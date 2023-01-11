import React from 'react'
import './popper.css'
const Popper = () => {
  return (
    <section className='popperContainer'>
        <img src="./assets/popperGif.gif" className='popperImg' alt="Job Done!" />
        <audio src="./assets/sounds/push.mp3" autoPlay hidden></audio>
    </section>
  )
}

export default Popper