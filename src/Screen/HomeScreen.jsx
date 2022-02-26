import React from 'react'
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const HomeScreen = () => {
    return (
        <div>
            <Header/>
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default HomeScreen
