import React, { useState } from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import LogoLight from '../data/logo_light.jpg';

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <div className='NavBar'>
            <div className="brand-bar">
                <div className="brand-bar-container">
                    <a href="https://umanitoba.ca/" target='_blank' rel='noreferrer'>
                        University of Manitoba
                    </a>
                </div>
            </div>

            <div className="NavBar-container">
                <div className="NavBar-container-left">
                    <NavLink to='/'>
                        <img src={LogoLight} alt="" />
                    </NavLink>

                    <div>
                        <button className={`burger ${open ? 'open' : ''}`} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>

                <div className={`NavBar-container-right ${open ? 'open' : 'close'}`}>
                    {[
                        ['/', 'Home'],
                        ['/research', 'Research'],
                        ['/robots', 'Robots'],
                        ['/publications', 'Publications'],
                        ['/news', 'News'],
                        ['/team', 'Our Team'],
                        ['/join', 'Join Us'],
                        ['/teaching', 'Teaching'],
                    ].map(([to, label]) => (
                        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'selected' : '')} onClick={() => setOpen(false)}>
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavBar;