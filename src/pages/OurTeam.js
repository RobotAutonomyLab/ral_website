import React from 'react'
import { Link } from 'react-router-dom';
import './OurTeam.scss'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MarkdownLink from '../components/HandleMarkdownLinks'

import profile_data from '../data/ourteam.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faTemperatureHalf, faPerson, faS, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faResearchgate, faOrcid, faGithub } from '@fortawesome/free-brands-svg-icons';
import { icon } from 'leaflet';

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
    }

    return (
        <a href={iconLink} target='_blank' data-tooltip={type} rel='noreferrer'>
            <FontAwesomeIcon icon={iconFA} />
        </a>
    )
}

function OurTeam() {
    const pageTitle = profile_data.ourTeamPageTitle
    const pageSubtitle = profile_data.ourTeamPageSubtitle

    const PI = profile_data.ourTeam[0].teamMembers[0]

    return (
        <div className='OurTeamPage'>
            <NavBar />
            <div className="OurTeam container">
                <div className="OurTeam section">
                    <h1>{pageTitle}</h1>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        components={{
                            a: MarkdownLink,
                            p: ({ children }) => <h4>{children}</h4>,
                        }}
                    >
                        {pageSubtitle}
                    </ReactMarkdown>
                </div>

                <div className="OurTeam section">
                    <div className="PI">
                        <div className="PI_top">
                            <h2>Meet the PI</h2>
                            <h3>{PI.Position}</h3>
                        </div>
                        <div className="PI_left">
                            <div className="PI_Image">
                                <img src={PI.ProfilePic.replace('/public', '')} alt="" />
                            </div>
                            <div className="PI_Links">
                                {PI.Links.map((highlight) => (
                                    typeOfLink(highlight.type, highlight.link)
                                ))}
                            </div>
                        </div>
                        <div className="PI_right">
                            <h2>Meet the PI</h2>
                            <p dangerouslySetInnerHTML={{ __html: PI.Biography }} />
                        </div>
                    </div>
                </div>

                {profile_data.ourTeam
                    .slice(1)
                    .filter(section =>
                        section.teamMembers?.some(member => member && member.Name) // or member.ProfileName
                    )
                    .map((section, sectionIndex) => (
                        <div className="OurTeam section" key={sectionIndex}>
                            <h2>{section.sectionTitle}</h2>
                            <div className="OurTeam-each">
                                {section.teamMembers.map((eachPeople, eachPeopleIndex) => (
                                    <div className='OurTeam-each-person' key={eachPeopleIndex}>
                                        <img src={eachPeople.ProfilePic.replace('/public', '')} alt="" />
                                        <h4>
                                            <Link to={eachPeople.ProfileLink} target="_blank">
                                                <span className="title-text">
                                                    {eachPeople.ProfileName}
                                                </span>
                                            </Link>
                                        </h4>
                                        <span className="caption">
                                            {eachPeople.Position}
                                        </span>
                                        <div className="each_person_links">
                                            {eachPeople.Links.map((highlight, index) => (
                                                typeOfLink(highlight.type, highlight.link)
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
            <Footer />
        </div>
    )
}

export default OurTeam
