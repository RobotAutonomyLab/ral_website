import React from 'react'
import './Home.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className='HomePage'>
            <NavBar />
            <div className="Home container">
                Home
            </div>
            <Footer />
        </div>
    )
}

export default Home
