import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <section className='py-3 px-3 container'>
      <div className="row ">

        {/* Branding */}
        <div className="col-6">
          <div className="row w-25 brandingSection">
            <Link className='text-decoration-none d-flex flex-column' to='/'>
            <img src='/assets/icon.svg' className='img-fluid mx-auto brandLogo' alt="shareMe" />
            <div className="h4 mx-auto fw-light brandTxt pt-1">shareMe</div>
            </Link>
          </div>
          
        </div>

        {/* Github */}
        <div className="col-6 d-flex justify-content-end">
          <img src="/assets/github.svg" onClick={()=>window.open('https://github.com/TheGaurav123/shareme-frontend','_blank')} className='githubIcon img-fluid' alt="github" />
        </div>
      </div>
      
    </section>
  )
}

export default Header
