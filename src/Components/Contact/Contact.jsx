//import React from 'react'
import './Contact.css'

const Contact = () => {

    //const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3b7ac842-f9a9-4b29-9a30-143653b255fd");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src="/src/assets/theme_pattern.svg" alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new project, so feel free to reach out to me</p>
                    <div className="contact-details">
                        <div className="contact-dtl">
                            <img src="/src/assets/mail_icon.svg" alt="email" />
                            <p>rohansethi347@gmail.com</p>
                        </div>
                        <div className="contact-dtl">
                            <img src="/src/assets/call_icon.svg" alt="call" />
                            <p>+ 772-825-524</p>
                        </div>
                        <div className="contact-dtl">
                            <img src="/src/assets/location_icon.svg" alt="loca" />
                            <p>Odisha,India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" id="" cols="30" rows="10"
                        placeholder='Enter your message '
                    ></textarea>
                    <button type='submit' className='contact-btn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact