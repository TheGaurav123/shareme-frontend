import React from 'react'
const Footer = () => {
    return (
        <section className='container'>
            <div className="row">
                <div className="p text-white text-center pb-2 pb-md-0">Design & Developed with <img src="/assets/heart.png" style={{ width: '1.2rem' }} alt="Love" /> by <span className='fw-bold' style={{cursor:'pointer'}} onClick={()=>window.open('https://github.com/TheGaurav123')}>Gaurav.</span></div>
            </div>
        </section>
    )
}

export default Footer