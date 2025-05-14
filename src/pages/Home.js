import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import home1 from '../data/home1.jpeg';
import home2 from '../data/home2.jpeg';
import home3 from '../data/home3.mp4';

import { Link } from 'react-router-dom';

import news_data from '../data/news/news_data'

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [home3, home2, home1];
    const totalSlides = slides.length;
    const timeoutRef = useRef(null);
    const videoRef = useRef(null); // Ref to control video element

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Handle auto-advance for images
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (slides[currentSlide] !== home3) {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 3000);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentSlide]);

    // Handle video playback
    useEffect(() => {
        if (videoRef.current) {
            if (currentSlide === 0) {
                videoRef.current.play().catch((error) => {
                    console.error('Video playback failed:', error);
                });
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0; // Reset video to start
            }
        }
    }, [currentSlide]);

    return (
        <div className='HomePage'>
            <NavBar />
            <div className="Home container">
                <div className="Home section">
                    <div className="Home_hero">
                        <div className="carousel">
                            <div
                                className="carousel-inner"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                <div className="carousel-item">
                                    <video ref={videoRef} playsInline muted controls preload="metadata" onEnded={nextSlide}>
                                        <source src={home3} type="video/mp4" alt="A short informational animation that touches on the various topics that the Building Robotics Lab researches, including building sensors today, IoT hardware in buildings today, sensing individuals, cognitive control, and low-power and high-performance IoT hardware." />
                                    </video>
                                </div>
                                <div className="carousel-item">
                                    <img src={home2} alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={home1} alt="Slide 1" />
                                </div>
                            </div>
                            <button className="carousel-prev" onClick={prevSlide}>
                                ❮
                            </button>
                            <button className="carousel-next" onClick={nextSlide}>
                                ❯
                            </button>
                        </div>
                    </div>
                </div>

                <div className="Home section">
                    <h4>Our long-term vision is to empower mobile robots with <b>safe</b>, <b>efficient</b>, and <b>fully autonomous operation</b> in dynamic, uncertain, and previously unexplored environments—enabling true <b>long-term autonomy</b> and bridging the gap between theoretical advances and real-world deployment.</h4>
                </div>

                <div className="Home section">
                    <div className="home_news_title">
                        <h2>News</h2>
                        <Link to='/news' target='_blank' rel='noreferrer'>View all news ❯</Link>
                    </div>
                    <div className="home_news_section">
                        {news_data.map((each_news, index) =>
                            <div className="each-news-section" key={index}>
                                <div className="news_img">
                                    <img src={each_news.newsPic} alt="" />
                                </div>
                                <div className='news_data'>
                                    <h4>{each_news.newsTitle}</h4>
                                    <span className="caption">{each_news.newsDate}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="Home section">
                    <div className="home_containers">
                        <div className="each_home_container">
                            <h2>Browse Our Publications</h2>
                            <p>Check out the research from the Robot Autonomy Lab. Our team publishes journal articles, conference papers, and theses on robotics and autonomous systems. The work covers topics like control algorithms, navigation, and mobility for robots. Visit our publications page to learn more about what we’ve been working on.</p>
                            <Link to='/publications'>OUR PAPERS</Link>
                        </div>
                        <div className="each_home_container">
                            <h2>Meet Our Team</h2>
                            <p>Our team includes faculty members, graduate students, and researchers working together on robotics and autonomous systems. Each person brings their own skills and ideas to the lab. Visit our team page to learn more about who we are and what we do.</p>
                            <Link to='/team'>OUR TEAM</Link>
                        </div>
                        <div className="each_home_container">
                            <h2>Apply</h2>
                            <p>Interested in robotics and AI? We’re looking for motivated students and researchers to work with us on exciting AI-driven robotics projects. Visit our Join Us page to see current opportunities and learn how to apply.</p>
                            <Link to='/join'>JOIN THE LAB</Link>
                        </div>
                        <div className="each_home_container">
                            <h2>Teaching</h2>
                            <p>Professor Jay Wang teaches courses on robotics and autonomous systems at the University of Manitoba. These courses cover both the basics and advanced topics, helping students build strong skills in navigation, control, and intelligent systems. Visit the Teaching page to learn more about the courses offered.</p>
                            <Link to='/teaching'>COURSES TAUGHT</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;