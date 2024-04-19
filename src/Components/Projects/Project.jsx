import { useState } from "react";
import './Project.css'
//import React, { useState } from 'react'
let imagesp1 = ["/src/assets/fblogin.jpg", "/src/assets/fbhome.jpg", "/src/assets/fbfriend.JPG", "/src/assets/fbmarcket.JPG", "/src/assets/fbprofile.jpg", "/src/assets/fbvideo.jpg"];


let imagesp2 = ["/src/assets/mudrahm.png", "/src/assets/adminp.png", "/src/assets/mudracountry.png", "/src/assets/mudra payment.png", "/src/assets/signupm.png"];
const Project = () => {
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const shiftLeftp1 = () => {
        if (currentIndex1 < imagesp1.length - 3) {
            setCurrentIndex1(currentIndex1 + 1);
        }
    };

    const shiftRightp1 = () => {
        if (currentIndex1 > 0) {
            setCurrentIndex1(currentIndex1 - 1);
        }
    };

    const shiftLeftp2 = () => {
        if (currentIndex2 < imagesp1.length - 3) {
            setCurrentIndex2(currentIndex2 + 1);
        }
    };

    const shiftRightp2 = () => {
        if (currentIndex2 > 0) {
            setCurrentIndex2(currentIndex2 - 1);
        }
    };

    function redirectToDeployLink1() {
        window.location.href = "https://fb-clone-rosy.vercel.app/login";
    }

    function redirectToCodeBase1() {
        window.location.href = "https://github.com/Sameeer-Ahmad/Facebook-Clone";
    }
    function redirectToDeployLink2() {
        window.location.href = "https://mudraexchange.netlify.app/";
    }

    function redirectToCodeBase2() {
        window.location.href = "https://github.com/ROHANKUMAR347/syntax-sadhak-2341";
    }


    return (
        <div id="project" className='project-container'>
            <div className='project-1'>
                <h2>Facebook Clone</h2>
                <div className="carousel">
                    <button className="arrow prev" onClick={shiftRightp1}>&lt;</button>
                    <div className="carousel-container" >
                        {imagesp1.slice(currentIndex1, currentIndex1 + 3).map((image, index) => (
                            <div key={index} className="carousel-item">
                                <img src={image} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </div>

                    <button className="arrow next" onClick={shiftLeftp1}>&gt;</button>
                </div>
                <div className="projectContent"> <p className="projectContent-p">The Facebook Clone project is a recreation of the popular social media platform, Facebook. It aims to replicate the core functionalities of Facebook, including user authentication, posting updates, liking and commenting on posts, and more.</p>
                    <p className="projectContent-p">Tech Stacks:React-js, Redux, Html-css-javascript, TypeScript, Firebase (Authentication, Realtime Database), Chakra UI, Tailwind CSS</p></div>
            </div>
            <div className="projectbtn">
                <div className="deployeedLink" onClick={() => redirectToDeployLink1()}>Deploy Link</div>
                <div className="codebase" onClick={() => redirectToCodeBase1()}>Code Base</div>
            </div>
            <div className='project-2'>
                <h2>Currency converter</h2>
                <div className="carousel">
                    <button className="arrow prev" onClick={shiftRightp2}>&lt;</button>
                    <div className="carousel-container" >
                        {imagesp2.slice(currentIndex2, currentIndex2 + 3).map((image, index) => (
                            <div key={index} className="carousel-item">
                                <img src={image} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </div>

                    <button className="arrow next" onClick={shiftLeftp2}>&gt;</button>
                </div>
                <div className="projectContent"> <p className="projectContent-p">StayHub is a user-centric hotel booking platform committed to providing a delightful and convenient experience for travelers exploring the beauty of Switzerland. Our platform boasts a diverse range of accommodations to suit every traveler's preferences, from intimate bed and breakfasts to opulent hotels offering top-notch amenities.</p>
                    <p className="projectContent-p">Tech Stacks: Redux, Html-css-javascript,  Tailwind CSS,Bootstrap,Scss</p></div>
            </div>
            <div className="projectbtn">
                <div className="deployeedLink" onClick={() => redirectToDeployLink2()} >Deploy Link</div>
                <div className="codebase" onClick={() => redirectToCodeBase2()}>Code Base</div>
            </div>
        </div>

    )
}

export default Project