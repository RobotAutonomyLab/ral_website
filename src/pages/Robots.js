import React from 'react'
import './Robots.scss'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MarkdownLink from '../components/HandleMarkdownLinks'

import robots_data from '../data/robots.json'


function Robots() {
    const pageTitle = robots_data.robotPageTitle || 'Our Robots'
    const pageSubtitle = robots_data.robotPageSubtitle || ''

    return (
        <div className='RobotsPage'>
            <NavBar />
            <div className="Robots container">
                <div className="Robots section">
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

                <div className="Robots section">
                    <div className="robots">
                        {robots_data.robots.map((each_robot, index) => (
                            <div className={`each_robot ${index % 2 === 0 ? 'reverse' : ''}`} key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <img
                                            src={process.env.PUBLIC_URL + each_robot.robotsPic.replace('/public', '')}
                                            alt={each_robot.robotsTitle}
                                        />
                                        <div>
                                            <h3>{each_robot.robotsTitle}</h3>
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                                components={{ a: MarkdownLink }}
                                            >
                                                {each_robot.robotsData || ''}
                                            </ReactMarkdown>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <h3>{each_robot.robotsTitle}</h3>
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                                components={{ a: MarkdownLink }}
                                            >
                                                {each_robot.robotsData || ''}
                                            </ReactMarkdown>
                                        </div>
                                        <img
                                            src={process.env.PUBLIC_URL + each_robot.robotsPic.replace('/public', '')}
                                            alt={each_robot.robotsTitle}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Robots
