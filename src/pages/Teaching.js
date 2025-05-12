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
                        &nbsp;instructs a range of courses focused on robotics, autonomy, and machine learning, including Introduction to Mobile Robotics, xxxxxx. These courses blend theoretical foundations with hands-on applications, preparing students for real-world challenges in mobile robotic systems design and implementation.</p>
                </div>

                <div className="Teaching section">
                    <h2>MECG 7740 - Mobile Robotics</h2>
                    <p>This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla </p>
                    <h3>Learning Goals</h3>
                    <ol>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                    </ol>
                </div>

                <div className="Teaching section">
                    <h2>xxx xxxx - xxxxxxxxxx</h2>
                    <p>This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla This course will teach you bla bla bla </p>
                    <h3>Learning Goals</h3>
                    <ol>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                        <p>Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 Learning Goal 1 </p>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Teaching
