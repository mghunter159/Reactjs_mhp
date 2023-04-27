import { HashRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

export default function Main() {
    return (
        
        <div>
            <HashRouter>
                <>
                <Navbar/>
                
                </>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/contact" element={<Contact/>} />
                    <Route exact path="/about" element={<About/>} />
                </Routes>
            </HashRouter>
        </div>
    );
}