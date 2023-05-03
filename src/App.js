import React, { useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './css/App.css';

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
        let page = <About />;

        if (window.location.pathname === '/About') {
            page = <About />;
        } else if (window.location.pathname === '/Home') {
            page = <About />;
        }
        else if (window.location.pathname === '/Projects') {
            page = <Projects />;
        }

        else if (window.location.pathname === '/Contact') {
            page = <Contact />;
        }

        return (
            <div>
                <Navbar />
                <div style={{ marginBottom: '10em' }}>
                    {page}
                </div>
                <Footer />
            </div>
        );
    }
}

