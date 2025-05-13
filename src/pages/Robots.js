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
                                <p>The AgileX Scout Mini is a wheeled mobile robot powered by an NVIDIA Jetson Orin and outfitted with a cutting-edge sensor suite: a 32-beam RS-Helios LiDAR for 360° depth perception, a ZED2i stereo camera for RGB-D imaging, and a Fixposition Vision-RTK2 module for centimeter-level GNSS-RTK localization.</p>
                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                        <div className="each_robot">
                            <div>
                                <h3>Unitree Go2</h3>
                                <p>The Unitree Go2, a four-legged robot, serves as our lab’s versatile platform for locomotion and perception research. With onboard computing, depth cameras, and LiDAR, it runs ROS 2 for real-time SLAM and navigation. Its modular design and open API enable projects from autonomous inspection to agile movement on uneven terrain.</p>
                                {/* <button>Read More</button> */}
                            </div>
                            <img src={go2} alt="" />
                        </div>
                        <div className="each_robot reverse">
                            <img src={ur5e} alt="" />
                            <div>
                                <h3>Universal Robots UR5e</h3>
                                <p>The UR5e, a six-axis collaborative robotic arm, is our lab’s primary manipulation platform. With force-torque sensing and ROS 2 interface, it supports vision-guided pick-and-place, adaptive welding, and human-robot studies. Its repeatable motion, lightweight design, and safety features enable rapid, cage-free experiments in precision assembly and reinforcement-learning control.</p>                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                        <div className="each_robot">
                            <div>
                                <h3>DJI Matrice 350 RTK</h3>
                                <p>The DJI Matrice 350 RTK, our lab’s heavy-lift multirotor, is a weather-sealed, RTK-enabled platform for centimeter-accurate aerial data and autonomous missions. With dual batteries, O3 Enterprise video, and a flexible gimbal for LiDAR or ROS 2 sensors, it excels in mapping, inspection, photogrammetry, SLAM, and search-and-rescue drills.</p>                                {/* <button>Read More</button> */}
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
