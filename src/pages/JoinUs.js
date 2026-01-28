import React from 'react'
import './JoinUs.scss'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MarkdownLink from '../components/HandleMarkdownLinks'

import joinus_data from '../data/joinus.json'

function JoinUs() {
    const pageTitle = joinus_data.joinusPageTitle || 'Join Us'
    const pageSubtitle = joinus_data.joinusPageSubtitle || ''

    return (
        <div className='JoinUsPage'>
            <NavBar />
            <div className="JoinUs container">
                <div className="JoinUs section">
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

                <div className="JoinUs section">
                    {joinus_data.joinus.map((section, idx) => (
                        <div className="each-join-section" key={idx}>
                            <h3>{section.joinusTitle}</h3>

                            <div>
                                {section.joinusData?.map((block, bidx) => {
                                    if (block.type === "paragraph") {
                                        return (
                                            <ReactMarkdown 
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                                components={{ a: MarkdownLink }}
                                            >
                                                {block.text || ''}
                                            </ReactMarkdown>   
                                        );
                                    }

                                    if (block.type === "bullet-list") {
                                        return (
                                            <ul key={bidx}>
                                                {block.items?.map((item, i) => (
                                                    <ReactMarkdown 
                                                        remarkPlugins={[remarkGfm]}
                                                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                                        components={{ a: MarkdownLink }}
                                                    >
                                                        {item}
                                                    </ReactMarkdown>  
                                                ))}
                                            </ul>
                                        );
                                    }

                                    return null;
                                })}
                            </div>
                        </div>
                    ))}

                    {/* <div className="each-join-section">
                        <h3>Current Opportunities</h3>
                        <div>
                            <p>The <Link to="/">Robot Autonomy Lab</Link> is currently recruiting <b>one MSc</b> and <b>one PhD</b> student to join our team starting <b>Fall 2026</b>. Both positions comes with <b>full scholarships</b>. To apply, please submit the following documents to <a href="mailto:j.wang@umanitoba.ca">j.wang@umanitoba.ca</a> with the subject line <b>"RAL2026 - [Your Name]"</b>:</p>
                            <ul>
                                <p>CV <b>(max. 2 pages)</b></p>
                                <p>Statement of Research Interest <b>(max. 1 page)</b></p>
                                <p>Academic Transcripts</p>
                                <p>Relevant <b>Project</b> or <b>Research Experience</b> <b>(max. 1 page)</b></p>
                            </ul>
                            <p>For application deadlines and program details, please visit <a href="https://umanitoba.ca/explore/programs-of-study/mechanical-engineering-phd" target='_blank' rel='noreferrer'>University of Manitoba - Mechanical Engineering Graduate Programs</a>.</p>
                        </div>
                    </div> */}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default JoinUs
