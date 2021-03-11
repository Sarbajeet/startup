import React from 'react'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted></video>
            <h1>We are awesome</h1>
            <p>What are you waiting for!!!</p>
        </div>
    )
}

export default HeroSection
