import React from 'react'
import './Research.scss'

import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import collab1 from '../data/collab1.png'
import collab2 from '../data/collab2.png'

function Research() {
    return (
        <div className='ResearchPage'>
            <NavBar />
            <div className="Research container">
                <div className="Research section">
                    <h1>Research</h1>
                    <p>At the <Link to='/'>Robot Autonomy Lab (RAL)</Link>, we design intelligent robotic systems that achieve <b>safe</b>, <b>adaptive</b>, and <b>robust autonomy</b> in <b>dynamic and uncertain environments</b>. Our research integrates robotics, control theory, and machine learning, with a strong emphasis on <b>real-world deployment</b> and <b>field validation</b>.</p>
                    <p>We are actively seeking collaborators in:</p>
                    <ul>
                        <p>Precision agriculture</p>
                        <p>Arctic exploration and environmental sensing</p>
                        <p>Mining automation and robotics for harsh environments</p>
                    </ul>
                </div>
                <div className="Research section">
                    <h2>Ongoing Projects</h2>
                    <div className='research_projects'>
                        <h3>NSERC Discovery Grant – Safe Control in Uncertain Environments</h3>
                        <p>Development of AI-enhanced control strategies and physics-informed data-driven modeling techniques for mobile robots operating in agriculture, Arctic, and mining environments.</p>
                    </div>
                    <div className='research_projects'>
                        <h3>University Research Grants Program (URGP) – Learning-Based Control for Agricultural Robotics</h3>
                        <p>Design of an efficient, uncertainty-aware control framework integrating Gaussian Process-enhanced Model Predictive Control for autonomous field robots, enabling safe and adaptive navigation across uncertain terrains in real-world agricultural environments.</p>
                    </div>
                    <div className='research_projects'>
                        <h3>University Start-up Grant – Field Robotics in Arctic Harsh Environments</h3>
                        <p>Exploration of mobile robotic platforms for sea ice navigation, autonomous environmental sensing, and manipulation tasks under extreme Arctic conditions.</p>
                    </div>
                </div>

                <div className="Research section">
                    <h2>Sponsors</h2>
                    <div className="research_collaborators">
                        <img src={collab1} alt="" />
                        <img src={collab2} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Research
