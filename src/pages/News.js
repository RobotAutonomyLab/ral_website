import React from 'react'
import './News.scss'

import { Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import news_data from '../data/news.json'

// Convert markdown links into either <Link> (internal) or <a> (external)
function MarkdownLink({ href = '', children, ...props }) {
    // handle "www.google.com" -> make it absolute
    const normalizedHref = href.startsWith('www.') ? `https://${href}` : href

    // handle "#/team/ilyas" -> "/team/ilyas"
    if (normalizedHref.startsWith('#/')) {
        return <Link to={normalizedHref.slice(1)}>{children}</Link>
    }

    // External links (http/https) open in new tab
    const isExternal = /^https?:\/\//i.test(normalizedHref)
    if (isExternal) {
        return (
            <a
                href={normalizedHref}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        )
    }

    // Internal links like "/" or "/team/ilyas"
    return <Link to={normalizedHref}>{children}</Link>
}

function News() {
    const pageTitle = news_data.newsPageTitle || 'News'
    const pageSubtitle = news_data.newsPageSubtitle || ''

    // Avoid mutating the imported JSON array
    const sortedNews = (news_data.news || [])
        .slice()
        .sort((a, b) => new Date(b.newsDate) - new Date(a.newsDate))

    return (
        <div className='NewsPage'>
            <NavBar />
            <div className="News container">
                <div className="News section">
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

                <div className="News section">
                    <div className="all_news">
                        {sortedNews.map((each_news, index) => (
                            <div className="each-news-section" key={index}>
                                <div className="news_img">
                                    <img
                                        src={process.env.PUBLIC_URL + (each_news.newsPic || '').replace('/public', '')}
                                        alt={each_news.newsTitle}
                                    />
                                </div>

                                <div className='news_data'>
                                    <h4>{each_news.newsTitle}</h4>
                                    <span className="caption">{each_news.newsDate}</span>

                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeSanitize]}
                                        components={{ a: MarkdownLink }}
                                    >
                                        {each_news.newsData || ''}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News
