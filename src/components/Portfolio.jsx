import React from 'react'
import './Portfolio.css'
export const Portfolio = () => {
  return (
    <div className='portWrapper'>
      <div className='migWrapper'>
        <div onClick={()=>window.open('https://businessstatementtest.moh.gov.ge')} className="box">
          <div className="emig"></div>
          <span className="txt">businessstatementtest.moh.gov.ge</span>
        </div>
        <div onClick={()=>window.open('https://labouractivitiestest.moh.gov.ge')} className="box">
          <div className="imig"></div>
          <span className="txt">labouractivitiestest.moh.gov.ge</span>
        </div>
      </div>
      <div className='tbWrapper'>
        <div onClick={()=>window.open('https://tb.moh.gov.ge')} className="box">
          <div className="tb"></div>
          <span className="txt">tb.moh.gov.ge</span>
        </div>
      </div>
    </div>
  )
}
