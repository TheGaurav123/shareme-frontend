import React from 'react'
import './download.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const Download = () => {
  let uuid = useParams().uuid
  const [data, setData] = useState(null)


  // Handle Data
  const handleAPI = async () => {
    let response = await fetch(`http://localhost:4000/api/files/${uuid}`)
    response = await response.json();
    if (response.message) {
      setData(response.message)
    }
    else {
      toast.error(`${response.error}`)
    }
  }


  // HandleFile Name
  const handleFileName = () => {
    let splittedName = data.filename.split('.');
    let fileName = splittedName[0].split('')
    let filteredName = '' + fileName.filter((val, index) => index < 25 ? val : null)
    let finalName = `${filteredName.replaceAll(',', '')}`
    return finalName.length === 25 || finalName.length > 25 ? finalName + '.' + splittedName[1] : finalName
  }



  // Handle Download
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(`http://localhost:4000/api/files/download/${data.uuid}`, '_blank')
  }


  useEffect(() => {
    handleAPI()
  }, []) //eslint-disable-line





  return (
    <>
      <div className="container text-center mt-4">
        <Link to='/' className='text-white h5 text-decoration-none'>Hi! 👋 Wanna share something?</Link>
      </div>
      {data !== null ?
        <>
          <section className='container downloadContainer px-4'>
            <div className="row downloadItemContainer py-5 px-2">
              <div className="col-12 text-center">
                <div className="h2 text-dark ">📁 {handleFileName()}</div>
                <div className="h5 text-dark fw-light mt-5 text-uppercase"><span className='fw-bold text-capitalize'>Size</span> : {(data.size / 1000).toFixed(2)} KB</div>
              </div>
              <div className="col-12 text-center">
                <button onClick={handleDownload} className='h5 fw-light px-2 py-1 my-5 downloadBtn'>Download</button>
              </div>
            </div>
          </section>

          <div className="col-12 text-center mx-auto mb-5 pb-5">
            <span className='fw-bold text-danger' style={{letterSpacing:'.5px'}}>NOTE : Link will be expired in 24 hours !</span>
          </div>
        </>
        :
        <section>
          <div className="h4 text-white">No Data Found</div>
        </section>
      }
    </>
  )
}

export default Download