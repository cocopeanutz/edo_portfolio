import React from 'react';
import './css/About.css'
import profilePhoto from './images/coconut.png';

function About() {
    return (
        <div className="about-container">
            <div className="about-image-container">
                <img src={profilePhoto} alt="Profile" />
            </div>
            <div className="about-description-container">
                <h1 className="about-title">Hi Folks!</h1>
                <p className="about-description">
                    My name is Edo. I am an electrical engineer/programmer which like to develop interesting stuff. Hit me up if you've got interesting projects!
                </p>
                <p className="about-description">
                    So far I've worked with pcb design, machine learning, and transforming academic papers into industrial products. More details can be read on <a href="/#/projects">projects</a>.
                </p>
                <p className="about-description">
                    I have a strong sense of initiative and enjoy generating new ideas that can be beneficial to the project or team. I believe that my ability to think creatively and take action without being prompted can contribute positively to our collective goals.
                </p>

            </div>
        </div>
    );
}

export default About;