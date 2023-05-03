import React from 'react';
import './css/Contact.css'
import profilePhoto from './images/coconut.png';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-image-container">
                <img src={profilePhoto} alt="Profile" />
            </div>
            <div className="contact-description-container">
                <h1 className="contact-title">Contact</h1>
                <p className="contact-description">
                    You can contact me at (+65) 93550370 or edobiasa@gmail.com
                </p>
                <p className="contact-description">
                    Hope to hear from you!
                </p>
            </div>
        </div>
    );
}

export default Contact;