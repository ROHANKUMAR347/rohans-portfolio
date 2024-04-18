//import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
const Hero = () => {
    function downloadresume() {
        const link = document.createElement('a');
        link.href = '/src/assets/RohanKumarSethi-FullStackWebDeveloper-FPtz.pdf';
        link.download = 'rohan resume';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div id='home' className='hero'>
            <img src="/src/assets/rohani.jpg" alt="profile" />
            <h1><span>I'm Rohan Sethi,</span> frontend developer</h1>
            <p>I am a fresher frontend developer from odisha,India</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume" onClick={downloadresume}>resume</div>
            </div>
        </div>
    )
}

export default Hero