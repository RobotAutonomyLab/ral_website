import React from 'react'
import './News.scss'

import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import news_data from '../data/news/news_data'

function News() {
    return (
        <div className='NewsPage'>
            <NavBar />
            <div className="News container">
                <div className="News section">
                    <h1>News</h1>
                    <p>Stay updated with the latest from the <Link to='/'>Robot Autonomy Lab</Link>! From groundbreaking research breakthroughs to exciting collaborations and events, explore our recent highlights!</p>
                </div>

                <div className="News section">
                    <div className="all_news">
                        {news_data.map((each_news, index) =>
                            <div className="each-news-section" key={index}>
                                <div className="news_img">
                                    <img src={each_news.newsPic} alt="" />
                                </div>
                                <div className='news_data'>
                                    <h4>{each_news.newsTitle}</h4>
                                    <span className="caption">{each_news.newsDate}</span>
                                    <p>{each_news.newsData}</p>
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
