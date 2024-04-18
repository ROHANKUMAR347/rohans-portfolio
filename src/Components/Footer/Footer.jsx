//import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="/src/assets/rohan logo - Copy.png" alt="logo" />
                    <p>I am a full stack web developer from odisha</p>
                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src="/src/assets/user_icon.svg" alt="logo" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Rohan Sethi. All right reserved </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>

    )
}

export default Footer