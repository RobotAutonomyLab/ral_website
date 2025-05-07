import React from 'react'
import './OurTeam.scss'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function OurTeam() {
    return (
        <div className='OurTeamPage'>
            <NavBar />
            <div className="OurTeam container">
                <div className="OurTeam section">
                    <h1>Our Team</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurTeam
