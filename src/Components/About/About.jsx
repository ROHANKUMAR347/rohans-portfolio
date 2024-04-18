//import React from 'react'
import './About.css'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src="/src/assets/theme_pattern.svg" alt="them" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src="/src/assets/rohani.jpg" alt="profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Frontend Developer</p>
                        <p>
                            Crafting captivating digital experiences through innovative design and seamless user interfaces.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skl">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skl">
                            <p>React Js</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skl">
                            <p>JavaScript</p>
                            <hr style={{ width: "60%" }} />
                        </div>

                        <div className="about-skl">
                            <p>Node Js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skl">
                            <p>Express Js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About