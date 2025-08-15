import React from 'react'
import './Teaching.scss'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Teaching() {
    return (
        <div className='TeachingPage'>
            <NavBar />
            <div className="Teaching container">
                <div className="Teaching section">
                    <h1>Teaching</h1>
                    <h4>
                        <Link to='/team' target='_blank'>
                            Dr. Wang
                        </Link>
                        &nbsp;instructs a range of courses focused on robotics, autonomy, and machine learning, such as Mobile Robotics. These courses blend theoretical foundations with hands-on applications, preparing students for real-world challenges in mobile robotic systems design and implementation.
                    </h4>
                </div>

                <div className="Teaching section">
                    <h2>MECG 3550 - Robotics and Computer Numerical Control</h2>
                    <p>This is a new undergraduate course within the newly established <b>Mechatronics Stream</b> in the <a href="https://umanitoba.ca/engineering/faculty-staff/mechanical-engineering" target='_blank' rel='noreferrer'>Department of Mechanical Engineering</a>, focusing on preparing undergraduate students for careers in autonomy engineering. This course introduces the fundamental principles of robotic manipulator kinematics, dynamics, and control. Students will develop the ability to represent and analyze robot motion, model the forces and torques that drive it, and design controllers to achieve accurate and stable performance. By the end of the course, students will be able to model manipulators using homogeneous transformations and Denavit–Hartenberg (D-H) parameters, solve forward and inverse kinematics for common configurations, and determine velocities and forces through Jacobian analysis while identifying singular configurations. They will apply analytical mechanics to derive dynamic models, design and assess control laws for single- and multi-degree-of-freedom systems, and integrate kinematic, dynamic, and control concepts to simulate and evaluate manipulator performance in tracking specified trajectories.</p>                     
                </div>

                <div className="Teaching section">
                    <h2>MECG 7740 - Mobile Robotics</h2>
                    <p>This is a new graduate course within the newly established <b>Mechatronics Stream</b> in the <a href="https://umanitoba.ca/engineering/faculty-staff/mechanical-engineering" target='_blank' rel='noreferrer'>Department of Mechanical Engineering</a>, focusing on preparing graduate students for careers in autonomy engineering. The course covers critical topics such as <b>state estimation</b>, <b>trajectory tracking control</b>, and <b>navigation strategies</b> for complex, real-world environments like warehouses, roadways, and agricultural fields. Emphasizing the application of theoretical concepts to practical scenarios, the course incorporates simulation-based assignments and case studies to enhance problem-solving skills in dynamic, real-world settings.</p>                     
                </div>

                

            </div>
            <Footer />
        </div>
    )
}

export default Teaching
