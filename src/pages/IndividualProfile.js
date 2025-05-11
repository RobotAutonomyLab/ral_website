// pages/IndividualProfile.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './IndividualProfile.scss';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import profile_data from '../data/profiles/profile_data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const findProfileById = (id) => {
    for (const section of profile_data) {
        for (const category of Object.values(section)) {
            if (Array.isArray(category)) {
                const profile = category.find(
                    (p) => p.ProfileName.toLowerCase() === id.toLowerCase()
                );
                if (profile) return profile;
            }
        }
    }
    return null;
};

function IndividualProfile() {
    const { id } = useParams();
    const profile = findProfileById(id);

    return (
        <div className="IndividualProfilePage">
            <NavBar />
            <div className="IndividualProfile container">
                <div className="IndividualProfile section">
                    <div className="hero_section">
                        <img src={profile.ProfilePic} alt="" />
                        <div>
                            <h2>{profile.Name}</h2>
                            <h3>{profile.Position}</h3>
                        </div>
                    </div>
                    <p className="pub-links">
                        {profile.Links.map((link, index) =>
                            <a href={link.href} key={index} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={link.icon} /> {link.text}
                            </a>
                        )}
                    </p>
                    <div className="keywords">
                        {profile.Interests.map((link, index) =>
                            <span key={index} className="caption">
                                {link}
                            </span>
                        )}
                    </div>
                </div>

                <div className="IndividualProfile section">
                    <p>{profile.Biography}</p>
                </div>

                <div className="IndividualProfile section">
                    <h4>Education</h4>
                    <ul>
                        {profile.Education.map((highlight, index) => (
                            <p key={index}>{highlight.degreeName}<br /><b>{highlight.degreeUniversity}</b> ({highlight.gradYear})</p>
                        ))}
                    </ul>
                </div>

                <div className="IndividualProfile section">
                    <h4>Featured Publications</h4>

                </div>

                <div className="IndividualProfile section">
                    <h4>Awards</h4>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default IndividualProfile;
