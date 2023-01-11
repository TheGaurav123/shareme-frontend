import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Popper from '../Popper/Popper'
import Link from '../Link/Link'
import './upload.css'
const Upload = () => {
  const [data, setData] = useState([]) //eslint-disable-line
  const [drag, setDrag] = useState(false)
  const [popper, setPopper] = useState(false)
  const[link, setLink] = useState(null)
  let clientData = new FormData()


  // Drag Handler
  const handleDrag = (e) => {
    let tempData = e.target.files
    if (data.length > 1) return alert('Cannot upload more than 1 file at a time')
    setData(tempData)
  }


  //  HandleFileName
  const handleFileName = () => {
    let fileName = data[0].name.split('')
    let filteredName = '' + fileName.filter((val, index) => index < 25 ? val : null)
    let finalName = `${filteredName.replaceAll(',', '')}`
    return finalName.length === 25 || finalName.length > 25 ? finalName + '...' : finalName
  }



  const sendData = async () => {
    clientData.append('file', data[0])
    let response = await fetch('https://shareme-ij37.onrender.com/api/upload', {
      method: 'POST',
      body: clientData
    })

    response = await response.json()

    if (response.message) {
      toast.success('Wohoo, link is ready...!')
      setPopper(true)
      setTimeout(() => {
        setPopper(false)
      }, 1500);
      setData([])
      setLink(response.message)
    }

    else{
      toast.error(`${response.error}`)
    }
  }


  return (
    <>
      <section onDragOver={() => setDrag(true)} onDragLeaveCapture={() => setDrag(false)} className={`container px-5 uploadSection ${drag ? 'dargInBox' : 'dragout'}`}>
        <div className="row px-3 py-4 gy-1">
          <div className="col-12 text-center mb-5 my-5">
            <img src='./assets/fileIcon.svg' className={`${drag ? 'dragIn' : 'dragout'}`} alt="Upload" />
          </div>
          {popper ? <Popper /> : null}

          <div className="col-12 text-center mb-5">
            <input name='file' onChange={handleDrag} type="file" hidden id='inputField' />
            {data.length !== 1 ? <div className="h5 text-white">Drag files here or <label style={{ cursor: 'pointer' }} htmlFor='inputField' className='text-info'>browse.</label></div>
              :
              (data.length === 1 ?
                <>
                  <div className="h5 text-white">Good to Go! 😎</div>
                  <div className="col-12 mt-5 fileInfoDiv py-2 d-flex justify-content-between px-4 ">
                    <span className='text-white fw-bold my-auto'>{`${handleFileName()}`}</span> <img onClick={sendData} className='ms-2' style={{ width: '2.5rem', cursor: 'pointer' }} src="./assets/uploadIcon.svg" alt="send" />
                  </div>
                </>
                : null)
            }
          </div>
        </div>

      </section>
      {link !== null ? <Link link={link} /> : null}
    </>
  )
}


export default Upload