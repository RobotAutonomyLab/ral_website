import React from 'react'
import './News.scss'

import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// import news_data from '../data/news/news_data'
import news_data from '../data/news.json'

function News() {
    return (
        <div className='NewsPage'>
            <NavBar />
            <div className="News container">
                <div className="News section">
                    <h1>News</h1>
                    <h4>Stay updated with the latest from the <Link to='/'>Robot Autonomy Lab</Link>! From groundbreaking research breakthroughs to exciting collaborations and events, explore our recent highlights!</h4>
                </div>

                <div className="News section">
                    <div className="all_news">
                        {news_data
                            .sort((a, b) => new Date(b.newsDate) - new Date(a.newsDate))
                            .map((each_news, index) =>
                            <div className="each-news-section" key={index}>
                                <div className="news_img">
                                    <img 
                                        src={process.env.PUBLIC_URL + each_news.newsPic.replace('/public', '')}
                                        alt={each_news.newsTitle}
                                    />
                                    {/* <img src={each_news.newsPic} alt="" /> */}
                                </div>
                                <div className='news_data'>
                                    <h4>{each_news.newsTitle}</h4>
                                    <span className="caption">{each_news.newsDate}</span>
                                    <p dangerouslySetInnerHTML={{ __html: each_news.newsData }}></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News
