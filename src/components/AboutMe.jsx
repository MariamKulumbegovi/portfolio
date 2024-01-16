import React from 'react'
import './AboutMe.css'
import cv from './cv.pdf'
export const AboutMe = () => {
  return (
    <div className='aboutwrap'>
        <span className='txt'>I am a Web Developer with experience in building responsive and interactive websites using HTML, CSS, Javascript and frameworks, mostly ReactJS.</span>
        <button className='btncv'>
            <a  download='MariamKulumbegoviCV' href={cv} className='txt'>Download CV</a>
        </button>
    </div>
  )
}
