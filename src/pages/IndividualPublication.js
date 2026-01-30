// pages/IndividualPublication.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './IndividualPublication.scss';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import publications_data from '../data/publications.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faDownload } from '@fortawesome/free-solid-svg-icons';

function CitationPopup({ isOpen, onClose, citation, citation_link }) {
    const [copySuccess, setCopySuccess] = useState(false);

    if (!isOpen) return null;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(citation);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleDownload = () => {
        try {
            const formatted = citation
                .trim()
                .split('\n')
                .map((line, i, arr) =>
                    (i > 0 && i < arr.length - 1 ? '  ' : '') +
                    line.trim()
                )
                .join('\n');
            const blob = new Blob([formatted], { type: 'text/x-bibtex' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${citation_link}.bib`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Failed to download:', err);
        }
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="popup-title">
                    <h3>Cite</h3>
                    <button className="popup-close" onClick={onClose}>×</button>
                </div>
                <pre>
                    {citation
                        .trim()
                        .split('\n')
                        .map((line, i, arr) =>
                            (i > 0 && i < arr.length - 1 ? '  ' : '') +
                            line.trim()
                        )
                        .join('\n')
                    }
                </pre>
                <div className="popup-buttons">
                    <button onClick={handleCopy}>
                        <FontAwesomeIcon icon={faCopy} /> {copySuccess ? 'Copied!' : 'Copy'}
                    </button>
                    <button onClick={handleDownload}>
                        <FontAwesomeIcon icon={faDownload} /> Download
                    </button>
                </div>
            </div>
        </div>
    );
}

// quick lookup helper (matches your JSON structure)
const findPublicationById = (id) => {
    const sections = publications_data?.publications;
    if (!Array.isArray(sections) || !id) return null;

    const needle = String(id).toLowerCase();

    for (const section of sections) {
        const years = section?.years;
        if (!Array.isArray(years)) continue;

        for (const y of years) {
            const papers = y?.papers;
            if (!Array.isArray(papers)) continue;

            const hit = papers.find((p) => {
                const key = p.id;
                return key && String(key).toLowerCase() === needle;
            });

            if (hit) {
                // ensure `publication.id` exists for anything else you rely on
                return { ...hit, id: hit.id ?? hit.citationLink };
            }
        }
    }

    return null;
};

const getWordsPerMinute = (title, keyword, abstract) => {
    let title_word_count = title.split(' ').length;
    let keyword_word_count = keyword.length;
    let abstract_word_count = abstract.split(' ').length;

    const wordCount = title_word_count + keyword_word_count + abstract_word_count;
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return readingTime;
}

(publications_data.publications || []).forEach((section) => {
    (section.years || []).forEach((yearBlock) => {
        (yearBlock.papers || []).forEach((pub) => {
            const readingTime = getWordsPerMinute(pub.title, pub.keywords, pub.abstract);
            pub.minRead = `${readingTime}-min read`;
        });
    });
});



function IndividualPublication() {
    const { id } = useParams();
    const publication = findPublicationById(id);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCitation, setSelectedCitation] = useState('');
    const [selectedCitationLink, setSelectedCitationLink] = useState('');

    const handleCiteClick = (citation, citationLink) => {
        setSelectedCitation(citation);
        setSelectedCitationLink(citationLink);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedCitation('');
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isPopupOpen]);

    return (
        <div className="IndividualPublicationPage">
            <NavBar />
            <div className="IndividualPublication container">
                <div className="IndividualPublication section">
                    <h3>{publication.title}</h3>
                    <span className="caption">
                        {publication.authors.map((author, index) => (
                            author.link ? (
                                <>
                                    <Link
                                        to={author.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="author"
                                    >
                                        {author.name}
                                    </Link>
                                    {/* <a href={author.link} target="_blank" rel="noreferrer" key={index} className="author">
                                        {author.name}
                                    </a> */}
                                    {index < publication.authors.length - 1 && ',\u00A0'}
                                </>
                            ) : (
                                <>
                                    <a key={index} className="not_author">
                                        {author.name}
                                    </a>
                                    {index < publication.authors.length - 1 && ',\u00A0'}
                                </>
                            )
                        ))} | {publication.minRead}
                    </span>
                    <p className="pub-links">
                        {publication.links.map((link, index) =>
                            link.type === "Cite" ? (
                                <a href="#" key={index} onClick={(e) => {
                                    e.preventDefault();
                                    handleCiteClick(publication.citation, publication.citationLink);
                                }}>
                                    Cite
                                </a>
                            ) : link.type === "PDF" ? (
                                <a href={link.url.replace('/public', '')} key={index} target="_blank" rel="noreferrer">
                                    {link.type}
                                </a>
                            ) : (
                                <a href={link.url} key={index} target="_blank" rel="noreferrer">
                                    {link.type}
                                </a>
                            )
                        )}
                    </p>
                    <div className="keywords">
                        {publication.keywords.map((link, index) =>
                            <span key={index} className="caption">
                                {link}
                            </span>
                        )}
                    </div>
                </div>

                <div className="IndividualPublication section">
                    <h4>Paper Highlights</h4>
                    <ul>
                        {publication.highlights.map((highlight, index) => (
                            <p key={index}>{highlight}</p>
                        ))}
                    </ul>
                </div>

                <div className="IndividualPublication section">
                    <h4>Abstract</h4>
                    <p>{publication.abstract}</p>
                </div>
            </div>
            <CitationPopup isOpen={isPopupOpen} onClose={closePopup} citation={selectedCitation} citation_link={selectedCitationLink} />
            <Footer />
        </div>
    );
}

export default IndividualPublication;
