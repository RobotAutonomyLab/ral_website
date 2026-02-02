import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarkdownLink from '../components/HandleMarkdownLinks'

import { Link } from 'react-router-dom';

import home_data from '../data/home.json';
import news_data from '../data/news.json'

function Home() {
    const homeSubtitle = home_data.homePageSubtitle

    const slides = home_data.homePageMedia || [];
    const totalSlides = slides.length;

    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef(null);
    const videoRef = useRef(null);

    const nextSlide = () => {
        if (totalSlides === 0) return;
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        if (totalSlides === 0) return;
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Handle auto-advance for images
    useEffect(() => {
        if (!totalSlides) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (slides[currentSlide]?.type === 'image') {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 3000);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentSlide, totalSlides, slides]);

    // Handle video playback
    useEffect(() => {
        if (!totalSlides) return;

        if (videoRef.current) {
            if (slides[currentSlide]?.type === 'video') {
                videoRef.current.play().catch((error) => {
                    console.error('Video playback failed:', error);
                });
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [currentSlide, totalSlides, slides]);

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
                                {slides.map((slide, index) => (
                                    <div className="carousel-item" key={index}>
                                        {slide.type === 'image' ? (
                                            <img
                                                src={process.env.PUBLIC_URL + slide.src.replace('/public', '')}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        ) : (
                                            currentSlide === index && (
                                                <video
                                                    ref={videoRef}
                                                    playsInline
                                                    muted
                                                    controls
                                                    preload="metadata"
                                                    onEnded={nextSlide}
                                                >
                                                    <source
                                                        src={process.env.PUBLIC_URL + slide.src.replace('/public', '')}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            )
                                        )}
                                    </div>
                                ))}
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
                    <h3>{homeSubtitle}</h3>
                </div>

                <div className="Home section">
                    <div className="home_news_title">
                        <h2>News</h2>
                        <Link to='/news' target='_blank' rel='noreferrer'>View all news ❯</Link>
                    </div>
                    <div className="home_news_section">
                        {news_data.news
                            .sort((a, b) => new Date(b.newsDate) - new Date(a.newsDate))
                            .slice(0, 6)
                            .map((each_news, index) =>
                                <div className="each-news-section" key={index}>
                                    <div className="news_img">
                                        <img
                                            src={process.env.PUBLIC_URL + each_news.newsPic.replace('/public', '')}
                                            alt={each_news.newsTitle}
                                        />
                                    </div>
                                    <div className='news_data'>
                                        <span className="caption">{each_news.newsDate}</span>
                                        <h4>{each_news.newsTitle}</h4>
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
