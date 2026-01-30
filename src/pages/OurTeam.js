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

function OurTeam() {
    const pageTitle = profile_data.ourTeamPageTitle
    const pageSubtitle = profile_data.ourTeamPageSubtitle

    // const PI = profile_data[0]['Principal Investigator'][0]
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
                                <img src={PI.ProfilePic} alt="" />
                            </div>
                            <div className="PI_Links">
                                {PI.Links.map((highlight, index) => (
                                    <a href={highlight.href} target='_blank' data-tooltip={highlight.text} rel='noreferrer'>
                                        <FontAwesomeIcon icon={highlight.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="PI_right">
                            <h2>Meet the PI</h2>
                            <p dangerouslySetInnerHTML={{ __html: PI.Biography }} />
                        </div>
                    </div>
                </div>

                {/* {profile_data.map(pubObj =>
                    Object.entries(pubObj)
                        .filter(([_, people]) => Object.keys(people).length > 0)
                        .slice(1)
                        .map(([eachPeopleIndex, people]) => (
                            <div className="OurTeam section" key={eachPeopleIndex}>
                                <h2>{eachPeopleIndex}</h2>
                                <div className="OurTeam-each">
                                    {pubObj[eachPeopleIndex].map((eachPeople, i) => (
                                        <div className='OurTeam-each-person' key={i}>
                                            <img src={eachPeople.ProfilePic} alt="" />
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
                                                    <a
                                                        href={highlight.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        data-tooltip={highlight.text}
                                                        key={index}
                                                    >
                                                        <FontAwesomeIcon icon={highlight.icon} />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                )} */}
            </div>
            <Footer />
        </div>
    )
}

export default OurTeam
