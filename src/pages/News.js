import React from 'react'
import './News.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function News() {
    return (
        <div className='NewsPage'>
            <NavBar />
            <div className="News container">
                News
            </div>
            <Footer />
        </div>
    )
}

export default News
