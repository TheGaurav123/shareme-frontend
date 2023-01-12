import React from 'react'
import { Upload } from '../components'
const shareMe = ({state}) => {
  return (
      <div className="container d-flex justify-content-center" style={{minHeight:'80vh', alignItems:'center'}}>
        <div className="row">
          <div className="col-12 px-3">
            <Upload state={state} />
          </div>
        </div>
      </div>      
  )
}

export default shareMe