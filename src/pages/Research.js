import React from 'react'
import './Research.scss'

import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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
                    <p>Our long-term vision is to empower mobile robots with <b>safe</b>, <b>efficient</b>, and <b>fully autonomous operation</b> in dynamic, uncertain, and previously unexplored environments—enabling true <b>long-term autonomy</b> and bridging the gap between theoretical advances and real-world deployment.</p>
                </div>
                <div className="Research section">
                    <h2>Ongoing Projects</h2>
                    <div>
                        <h3>NSERC Discovery Grant – Safe Control in Uncertain Environments</h3>
                        <p>Development of AI-enhanced control strategies and physics-informed data-driven modeling techniques for mobile robots operating in agriculture, Arctic, and mining environments.</p>
                    </div>
                    <div>
                        <h3>University Research Grants Program (URGP) – Learning-Based Control for Agricultural Robotics</h3>
                        <p>Design of an efficient, uncertainty-aware control framework integrating Gaussian Process-enhanced Model Predictive Control for autonomous field robots, enabling safe and adaptive navigation across uncertain terrains in real-world agricultural environments.</p>
                    </div>
                    <div>
                        <h3>University Start-up Grant – Field Robotics in Arctic Harsh Environments</h3>
                        <p>Exploration of mobile robotic platforms for sea ice navigation, autonomous environmental sensing, and manipulation tasks under extreme Arctic conditions.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Research
