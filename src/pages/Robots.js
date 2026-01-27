import React from 'react'
import './Robots.scss'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MarkdownLink from '../components/HandleMarkdownLinks'

import robots_data from '../data/robots.json'


function Robots() {
    const pageTitle = robots_data.robotPageTitle || 'Our Robots'
    const pageSubtitle = robots_data.robotPageSubtitle || ''

    return (
        <div className='RobotsPage'>
            <NavBar />
            <div className="Robots container">
                <div className="Robots section">
                    <h1>{pageTitle}</h1>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeSanitize]}
                        components={{
                            a: MarkdownLink,
                            p: ({ children }) => <h4>{children}</h4>,
                        }}
                    >
                        {pageSubtitle}
                    </ReactMarkdown>
                </div>

                <div className="Robots section">
                    <div className="robots">
                        {robots_data.robots.map((each_robot, index) => (
                            <div className={`each_robot ${index % 2 === 0 ? 'reverse' : ''}`} key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <img
                                            src={process.env.PUBLIC_URL + each_robot.robotsPic.replace('/public', '')}
                                            alt={each_robot.robotsTitle}
                                        />
                                        <div>
                                            <h3>{each_robot.robotsTitle}</h3>
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeSanitize]}
                                                components={{ a: MarkdownLink }}
                                            >
                                                {each_robot.robotsData || ''}
                                            </ReactMarkdown>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <h3>{each_robot.robotsTitle}</h3>
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeSanitize]}
                                                components={{ a: MarkdownLink }}
                                            >
                                                {each_robot.robotsData || ''}
                                            </ReactMarkdown>
                                        </div>
                                        <img
                                            src={process.env.PUBLIC_URL + each_robot.robotsPic.replace('/public', '')}
                                            alt={each_robot.robotsTitle}
                                        />
                                    </>
                                )}
                            </div>
                        ))}

                        {/* <div className="each_robot reverse">
                            <img src={scoutmini} alt="" />
                            <div>
                                <h3>AgileX Scout Mini</h3>
                                <p>The AgileX Scout Mini is a wheeled mobile robot powered by an NVIDIA Jetson Orin and outfitted with a cutting-edge sensor suite: a 32-beam RS-Helios LiDAR for 360° depth perception, a ZED2i stereo camera for RGB-D imaging, and a Fixposition Vision-RTK2 module for centimeter-level GNSS-RTK localization.</p>
                            </div>
                        </div> */}
                        {/* <div className="each_robot">
                            <div>
                                <h3>Unitree Go2</h3>
                                <p>The Unitree Go2, a four-legged robot, serves as our lab’s versatile platform for locomotion and perception research. With onboard computing, depth cameras, and LiDAR, it runs ROS 2 for real-time SLAM and navigation. Its modular design and open API enable projects from autonomous inspection to agile movement on uneven terrain.</p>
                            </div>
                            <img src={go2} alt="" />
                        </div>
                        <div className="each_robot reverse">
                            <img src={ur5e} alt="" />
                            <div>
                                <h3>Universal Robots UR5e</h3>
                                <p>The UR5e, a six-axis collaborative robotic arm, is our lab’s primary manipulation platform. With force-torque sensing and ROS 2 interface, it supports vision-guided pick-and-place, adaptive welding, and human-robot studies. Its repeatable motion, lightweight design, and safety features enable rapid, cage-free experiments in precision assembly and reinforcement-learning control.</p>
                            </div>
                        </div>
                        <div className="each_robot">
                            <div>
                                <h3>DJI Matrice 350 RTK</h3>
                                <p>The DJI Matrice 350 RTK, our lab’s heavy-lift multirotor, is a weather-sealed, RTK-enabled platform for centimeter-accurate aerial data and autonomous missions. With dual batteries, O3 Enterprise video, and a flexible gimbal for LiDAR or ROS 2 sensors, it excels in mapping, inspection, photogrammetry, SLAM, and search-and-rescue drills.</p>
                            </div>
                            <img src={dji_matrice} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Robots
