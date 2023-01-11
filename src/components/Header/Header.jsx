import React from 'react'
import './header.css'
const Header = () => {
  return (
    <section className='py-3 px-3 container'>
      <div className="row ">

        {/* Branding */}
        <div className="col-6">
          <div className="row w-25 brandingSection">
            <img src='/assets/icon.svg' className='ms-md-5 img-fluid mx-auto brandLogo' alt="shareMe" />
            <div className="h3 fw-light brandTxt pt-1">shareMe</div>
          </div>
        </div>

        {/* Github */}
        <div className="col-6 d-flex justify-content-end">
          <img src="/assets/github.svg" className='githubIcon img-fluid' alt="github" />
        </div>
      </div>
      
    </section>
  )
}

export default Header