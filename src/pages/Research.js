import React from 'react'
import './Research.scss'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MarkdownLink from '../components/HandleMarkdownLinks'

import research_data from '../data/research.json'

function Research() {
    const pageTitle = research_data.researchPageTitle || 'Research'
    const pageSubtitle = research_data.researchPageSubtitle || ''

    // Ongoing projects
    const onGoingProjectsTitle = research_data.onGoingProjectsTitle
    const onGoingProjectsData = research_data.onGoingProjectsData

    // Research Projects
    const researchProjects = research_data.researchProjects

    // Past Projects
    const pastProjectsTitle = research_data.pastProjectsTitle
    const pastProjectsData = research_data.pastProjectsData

    // Sponsors
    const sponsorsTitle = research_data.SponsorsTitle
    const sponsorsData = research_data.SponsorsData

    return (
        <div className='ResearchPage'>
            <NavBar />
            <div className="Research container">
                <div className="Research section">
                    <h1>{pageTitle}</h1>
                    {pageSubtitle.map((block, bidx) => {
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

                <div className="Research section">
                    <h2>{onGoingProjectsTitle}</h2>
                    {onGoingProjectsData.map((block, bidx) => {
                        return <div className="research_projects">
                            <h3>{block.projectTitle}</h3>
                            {block.projectDescription.map((desc, didx) => {
                                if (desc.type === "paragraph") {
                                    return (
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                            components={{ a: MarkdownLink }}
                                        >
                                            {desc.text || ''}
                                        </ReactMarkdown>
                                    );
                                }

                                if (desc.type === "bullet-list") {
                                    return (
                                        <ul key={bidx}>
                                            {desc.items?.map((item, i) => (
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
                    })}
                </div>

                {researchProjects.map((section, idx) => {
                    return <div className="Research section" key={idx}>
                        <h2>{section.sectionTitle}</h2>
                        <div className="research_project_main">
                            {section.sectionData.map((block, bidx) => {
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

                                if (block.type === 'image') {
                                    return (
                                        <img src={block.src.replace('/public', '')} alt="" />
                                    )
                                }

                                return null;
                            })
                            }
                        </div>
                    </div>
                })}

                <div className="Research section">
                    <h2>{pastProjectsTitle}</h2>
                    <div className="past_projects">
                        {pastProjectsData.map((block, idx) => {
                            return <div>
                                <h3>{block.projectTitle}</h3>
                                <img src={block.projectImage.replace('/public', '')} alt="" />
                            </div>

                        })}
                    </div>
                </div>


                <div className="Research section">
                    <h2>{sponsorsTitle}</h2>
                    <div className="research_collaborators">
                        {sponsorsData.map((value, idx) => {
                            return <img src={value.replace('/public', '')} alt="" />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Research
