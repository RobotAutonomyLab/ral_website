import React from 'react'
import './News.scss'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News
