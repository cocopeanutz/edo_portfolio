import React, { useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './css/App.css';
import { Routes, Route, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    useEffect(() => {
        document.title = "Edo's Portfolio";
    }, []);

    return (
        <div>
            <Page />
        </div>
    );

}

export default App;

class Page extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div style={{ marginBottom: '10em' }}>
                        <Routes>
                            <Route exact path="/" element={<About />} />
                            <Route path="/home" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                </div>
                <Footer />
            </div>
        );
    }
}

