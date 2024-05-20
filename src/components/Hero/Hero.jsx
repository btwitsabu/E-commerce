import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>For everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest collections</div>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
    <div className="hero-right">
        <img src={hero_image} alt="" />
    </div>
    </div>
  )
}

export default Hero