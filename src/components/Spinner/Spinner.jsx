import React from 'react'
import './spinner.css'
import { PropagateLoader } from 'react-spinners'
const Spinner = ({ state }) => {
    console.log(state)
    return (
        <>
            {state ?
                <section className='spinnerContainer'>
                    <PropagateLoader
                        color="#ffffff"
                        speedMultiplier={0.7}
                    />
                </section>
                :
                null
            }
        </>
    )
}

export default Spinner