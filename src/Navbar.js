import React from 'react';
import './css/Navbar.css';

function Navbar() {
    return (
        <div className="topnav">
                <a href="About">Home</a>
                <a href="Projects">Projects</a>
                <a href="Contact">Contact</a>
        </div>
    );
}

export default Navbar;