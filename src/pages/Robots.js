import React from 'react'
import './Robots.scss'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import scoutmini from '../data/robots/scoutmini.jpeg'
import go2 from '../data/robots/go2.jpeg'
import ur5e from '../data/robots/ur5e.jpg'
import dji_matrice from '../data/robots/dji_matrice.jpeg'

function Robots() {
    return (
        <div className='RobotsPage'>
            <NavBar />
            <div className="Robots container">
                <div className="Robots section">
                    <h1>Robots</h1>
                    <p>RAL proudly showcases a cutting-edge collection of recently acquired robots, including the AgileX Scout Mini mobile robot, Go2, Universal Robots UR5e, and DJI Matrice 350 RTK. Stay tuned for more exciting additions!</p>
                </div>

                <div className="Robots section">
                    <div className="robots">
                        <div className="each_robot reverse">
                            <img src={scoutmini} alt="" />
                            <div>
                                <h3>AgileX Scout Mini</h3>
                                <p>Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here </p>
                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                        <div className="each_robot">
                            <div>
                                <h3>Unitree Go2</h3>
                                <p>Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here </p>
                                {/* <button>Read More</button> */}
                            </div>
                            <img src={go2} alt="" />
                        </div>
                        <div className="each_robot reverse">
                            <img src={ur5e} alt="" />
                            <div>
                                <h3>Universal Robots UR5e</h3>
                                <p>Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here </p>
                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                        <div className="each_robot">
                            <div>
                                <h3>DJI Matrice 350 RTK</h3>
                                <p>Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here Text about robot here </p>
                                {/* <button>Read More</button> */}
                            </div>
                            <img src={dji_matrice} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Robots
