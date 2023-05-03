import React from 'react';
import './css/Navbar.css';
import { Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="topnav">
            <Link to="/home">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Navbar;