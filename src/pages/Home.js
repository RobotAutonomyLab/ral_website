import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import home1 from '../data/home1.jpeg';
import home2 from '../data/home2.jpeg';
import home3 from '../data/home3.mp4';
import home4 from '../data/home4.mp4'

import { Link } from 'react-router-dom';

import news_data from '../data/news/news_data'

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [home1, home2, home3, home4];
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

        if (slides[currentSlide] !== home3 && slides[currentSlide] !== home4) {
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
            if (currentSlide === 2 || currentSlide === 3) {
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
                                    <img src={home1} alt="Slide 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={home2} alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                    {currentSlide === 2 && (
                                        <video ref={videoRef} playsInline muted controls preload="metadata" onEnded={nextSlide}>
                                            <source src={home3} type="video/mp4" />
                                        </video>
                                    )}
                                </div>
                                <div className="carousel-item">
                                    {currentSlide === 3 && (
                                        <video ref={videoRef} playsInline muted controls preload="metadata" onEnded={nextSlide}>
                                            <source src={home4} type="video/mp4" />
                                        </video>
                                    )}
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
                            <p>Explore the latest research from the Robot Autonomy Lab. Our team publishes journal articles and conference papers on robotics and autonomous systems. Visit our publications page to learn more.</p>
                            <Link to='/publications'>OUR PAPERS</Link>
                        </div>
                        <div className="each_home_container">
                            <h2>Meet Our Team</h2>
                            <p>Our team includes faculty members, graduate students, and researchers working together on robotics and autonomous systems. Visit our team page to learn more about who we are and what we do.</p>
                            <Link to='/team'>OUR TEAM</Link>
                        </div>
                        <div className="each_home_container">
                            <h2>Apply</h2>
                            <p>Interested in robotics and AI? We’re looking for motivated students and researchers to work with us on exciting AI-driven robotics projects. Visit our Join Us page to see current opportunities and learn how to apply.</p>
                            <Link to='/join'>JOIN THE LAB</Link>
                        </div>
                        <div className="each_home_container">
                            <h2>Teaching</h2>
                            <p>Professor Wang teaches courses on robotics and autonomous systems at the University of Manitoba. Visit the Teaching page to learn more about these course.</p>
                            <Link to='/teaching'>COURSES</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;