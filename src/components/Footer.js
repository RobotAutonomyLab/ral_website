import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import LogoUM from '../data/logo_um.jpg'

function Footer() {
    return (
        <div className='Footer'>
            <div className="Footer-container">
                <div className="Footer-container-left">
                    <h3>Robot Autonomy Laboratory</h3>
                    <p>at the University of Manitoba</p>
                    <a href="https://umanitoba.ca/" target='_blank' rel='noreferrer'><img src={LogoUM} alt="" /></a>
                    {/* <div className="footer-links">

                    </div> */}
                </div>
                <div className="Footer-container-middle">
                    <h3>Mailing Address</h3>
                    <p>Robot Autonomy Laboratory</p>
                    <p>E1-406 EITC</p>
                    <p>Price Faculty of Engineering</p>
                    <p>University of Manitoba</p>
                    <p>75 Chancellors Circle</p>
                    <p>Winnipeg MB R3T 5V6</p>
                    <p>Canada</p>
                </div>
                <div className="Footer-container-right">
                    <h3>Quick Links</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/research'>Research</Link>
                    <Link to='/robots'>Robots</Link>
                    <Link to='/publications'>Publications</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/team'>Our Team</Link>
                    <Link to='/join'>Join Us</Link>
                    <Link to='/teaching'>Teaching</Link>
                </div>
            </div>
            <div className="design-bar">
                <span className="caption left">
                    © 2026 Robot Autonomy Laboratory
                </span>
                <span className="caption right">
                    Website by <a href="https://blank-ed.github.io/ilyas_dawoodjee/#/" target='_blank' rel="noreferrer">Ilyas Dawoodjee</a>
                </span>
            </div>
        </div>
    )
}

export default Footer
