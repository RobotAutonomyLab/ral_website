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
                    <p>
                        <Link to='/team' target='_blank'>
                            Professor Wang
                        </Link>
                        &nbsp;instructs a range of courses focused on robotics, autonomy, and machine learning, such as Mobile Robotics. These courses blend theoretical foundations with hands-on applications, preparing students for real-world challenges in mobile robotic systems design and implementation.</p>
                </div>

                <div className="Teaching section">
                    <h2>MECG 7740 - Mobile Robotics</h2>
                    <p>I have designed and am currently delivering a new graduate course within the newly established <b>Mechatronics Stream</b> in the <a href="Department of Mechanical Engineering" target='_blank' rel='noreferrer'>Department of Mechanical Engineering</a>, focusing on preparing students for careers in autonomy engineering. The course covers critical topics such as <b>state estimation</b>, <b>trajectory tracking control</b>, and <b>navigation strategies</b> for complex, real-world environments like warehouses, roadways, and agricultural fields. Emphasizing the application of theoretical concepts to practical scenarios, the course incorporates simulation-based assignments and case studies to enhance problem-solving skills in dynamic, real-world settings.</p>
                    {/* <h3>Learning Goals</h3>
                    <ol>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                    </ol> */}
                </div>

                {/* <div className="Teaching section">
                    <h2>xxx xxxx - xxxxxxxxxx</h2>
                    <p>This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla </p>
                    <h3>Learning Goals</h3>
                    <ol>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                    </ol>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Teaching
