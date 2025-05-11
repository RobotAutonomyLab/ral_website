import React from 'react'
import './OurTeam.scss'
import profile_data from '../data/profiles/profile_data'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OurTeam() {
    const PI = profile_data[0]['Principal Investigator'][0]

    return (
        <div className='OurTeamPage'>
            <NavBar />
            <div className="OurTeam container">
                <div className="OurTeam section">
                    <h1>Our Team</h1>
                    <p>We are a team of faculty, engineers, and students advancing mobile-robot autonomy in real-world settings through machine learning and physics-based modeling.</p>
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
                            <h3>{PI.Position}</h3>
                            <p>{PI.Biography}</p>
                        </div>
                    </div>
                </div>

                {profile_data.map(pubObj =>
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
                )}
            </div>
            <Footer />
        </div>
    )
}

export default OurTeam
