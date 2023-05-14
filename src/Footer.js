import React from 'react';
import './css/Footer.css';


const today = new Date();
const year = today.getFullYear();

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">Phone: (+65) 93550370 | Email: edobiasa@gmail.com | © {year} edjayaku.com</span>
            </div>
        </footer>
    );
}

export default Footer;