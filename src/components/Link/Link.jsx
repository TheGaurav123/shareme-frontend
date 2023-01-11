import React from 'react'
import { toast } from 'react-hot-toast'
import './link.css'
const Link = (props) => {

    let link = `${props.link}`

    // File Handler
    const handleFileName = () => {
        let fileName = link.split('')
        let filteredName = '' + fileName.filter((val, index) => index < 25 ? val : null)
        let finalName = `${filteredName.replaceAll(',', '')}`
        return finalName.length === 25 || finalName.length > 25 ? finalName + '......' : finalName
    }


    // Copy Handler
    const handleCopy = () => {
        navigator.clipboard.writeText(props.link)
        toast('Copied!', {
            icon: '😀',
          });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 linkContainer d-flex justify-content-center py-2">
                    <div className="h6 d-flex my-auto"><a className='text-dark my-auto text-decoration-none' target='_blank' rel="noreferrer" href={props.link}>🔗 {`${handleFileName()}`}</a> <span className='ms-4 px-2 copyContainer' onClick={handleCopy}>Copy</span></div>
                </div>
            </div>
        </div>
    )
}

export default Link