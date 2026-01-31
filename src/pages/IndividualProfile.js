import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './IndividualProfile.scss';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarkdownLink from '../components/HandleMarkdownLinks'

// import profile_data from '../data/profiles/profile_data'
import profile_data from '../data/ourteam.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faTemperatureHalf, faPerson, faS, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faResearchgate, faOrcid, faGithub } from '@fortawesome/free-brands-svg-icons';
import { icon } from 'leaflet';
import { type } from '@testing-library/user-event/dist/type';

const findProfileById = (id) => {
    if (!id) return null;

    for (const section of profile_data.ourTeam) {
        const members = section.teamMembers;
        if (!Array.isArray(members)) continue;

        const profile = members.find(
            (p) => p?.ProfileName && p.ProfileName.toLowerCase() === id.toLowerCase()
        );

        if (profile) return profile;
    }

    return null;
};

function typeOfLink(type, link) {

    let iconFA;
    let iconLink = link;

    switch (type) {
        case 'Email':
            iconLink = link.startsWith('mailto:') ? link : `mailto:${link}`;
            iconFA = faEnvelope;
            break;
        case 'Google Scholar':
            iconFA = faGoogle;
            break;
        case 'LinkedIn':
            iconFA = faLinkedin;
            break;
        case 'GitHub':
            iconFA = faGithub;
            break;
        case 'Resume':
            iconFA = faFile;
            iconLink = link.replace('/public', '');
            break;
        case 'Personal Website':
            iconFA = faUser;
            break;
        case 'Research Gate':
            iconFA = faResearchgate;
            break;
        case 'ORCID':
            iconFA = faOrcid;
            break;
    }

    return (
        <a href={iconLink} target='_blank' data-tooltip={type} rel='noreferrer'>
            <FontAwesomeIcon icon={iconFA} /> {type}
        </a>
    )
}

function IndividualProfile() {
    const { id } = useParams();
    const profile = findProfileById(id);

    return (
        <div className="IndividualProfilePage">
            <NavBar />
            <div className="IndividualProfile container">
                <div className="IndividualProfile section">
                    <div className="hero_section">
                        <img src={profile.ProfilePic.replace('/public', '')} alt="" />
                        <div>
                            <h2>{profile.Name}</h2>
                            <h3>{profile.Position}</h3>
                        </div>
                    </div>
                    <p className="pub-links">
                        {profile.Links.map((link, index) =>
                            typeOfLink(link.type, link.link)
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
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        components={{
                            a: MarkdownLink,
                            p: ({ children }) => <p className='bio'>{children}</p>,
                        }}
                    >
                        {profile.Biography}
                    </ReactMarkdown>
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
                    <h4>Publications</h4>
                    <ul>
                        {profile.Featured_Publications.map((highlight, index) => (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                components={{
                                    a: MarkdownLink,
                                    p: ({ children }) => <p>{children}</p>,
                                }}
                            >
                                {highlight}
                            </ReactMarkdown>
                        ))}
                    </ul>
                </div>

                <div className="IndividualProfile section">
                    <h4>Awards</h4>
                    <ul>
                        {profile.Awards.map((highlight, index) => (
                            <p key={index}>
                                {highlight.awardName}<br /><b>{highlight.awardPlace}</b> ({highlight.awardTime})
                            </p>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default IndividualProfile;
