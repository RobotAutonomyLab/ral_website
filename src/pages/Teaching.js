import React from 'react'
import './Teaching.scss'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MarkdownLink from '../components/HandleMarkdownLinks'

import teachings_data from '../data/teachings.json'

function Teaching() {
    const pageTitle = teachings_data.teachingPageTitle || 'Teaching'
    const pageSubtitle = teachings_data.teachingPageSubtitle || ''

    return (
        <div className='TeachingPage'>
            <NavBar />
            <div className="Teaching container">
                <div className="Teaching section">
                    <h1>{pageTitle}</h1>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeSanitize]}
                        components={{
                            a: MarkdownLink,
                            p: ({ children }) => <h4>{children}</h4>,
                        }}
                    >
                        {pageSubtitle}
                    </ReactMarkdown>                    
                </div>
                
                {teachings_data.teachings.map((each_teaching, index) => (
                    <div className="Teaching section" key={index}>
                        <h2>{each_teaching.teachingsTitle}</h2>
                        <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeSanitize]}
                            components={{ a: MarkdownLink }}
                        >
                            {each_teaching.teachingsData || ''}
                        </ReactMarkdown>                     
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Teaching
