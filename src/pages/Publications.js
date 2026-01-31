import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Publications.scss';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarkdownLink from '../components/HandleMarkdownLinks'

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

// Turn any string into a clean slug
const slugify = (str, words = 6) =>
    str
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")         // strip punctuation
        .split(/\s+/)
        .slice(0, words)
        .join("_");

const generateId = (title, year) => `${year}_${slugify(title)}`;

(publications_data.publications ?? []).forEach((section) => {
  (section.years ?? []).forEach((eachYear) => {
    (eachYear.papers ?? []).forEach((pub) => {
      pub.id = pub.id ?? pub.citationLink ?? generateId(pub.title ?? "", eachYear.year ?? "");
    });
  });
});


function Publications() {
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

    const pageTitle = publications_data.publicationsPageTitle
    const pageSubtitle = publications_data.publicationsPageSubtitle

    return (
        <div className="PublicationsPage">
            <NavBar />
            <div className="Publications container">
                <div className="Publications section">
                    <h1>{pageTitle}</h1>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        components={{
                            a: MarkdownLink,
                            p: ({ children }) => <h4>{children}</h4>,
                        }}
                    >
                        {pageSubtitle}
                    </ReactMarkdown>
                </div>

                {publications_data.publications
                    .filter(section => (section.years ?? []).some(y => (y.papers ?? []).length > 0))
                    .map(section => (
                        <div className="Publications section" key={section.sectionTitle}>
                            <h2>{section.sectionTitle}</h2>

                            {(section.years ?? [])
                                .filter(y => (y.papers ?? []).length > 0)
                                .sort((a, b) => Number(b.year) - Number(a.year))
                                .map(yearObj => (
                                    <div className="pub-each-year" key={yearObj.year}>
                                        <h3>{yearObj.year}</h3>

                                        <div className="pub-each-paper">
                                            {(yearObj.papers ?? []).map((paper, i) => (
                                                <div key={`${paper.title}-${i}`}>
                                                    <h4>
                                                        <Link to={`/publications/${paper.id}`} target="_blank">
                                                            <span className="title-text">{paper.title}</span>
                                                        </Link>
                                                    </h4>

                                                    <p>
                                                        {paper.journal && <span className="journal">{paper.journal}</span>}

                                                        {paper.volume && (
                                                            <>
                                                                {paper.journal && ", "}
                                                                <span className="volume">
                                                                    {paper.volume}
                                                                    {paper.issue && `(${paper.issue})`}
                                                                </span>
                                                            </>
                                                        )}

                                                        {!paper.volume && paper.issue && (
                                                            <>
                                                                {paper.journal && ", "}
                                                                <span className="issue">{paper.issue}</span>
                                                            </>
                                                        )}

                                                        {paper.page && (
                                                            <>
                                                                {(paper.journal || paper.volume || paper.issue) && ", "}
                                                                <span className="page">{paper.page}</span>
                                                            </>
                                                        )}
                                                    </p>

                                                    {(paper.authors ?? []).length > 0 && (
                                                        <span className="caption">
                                                            {paper.authors.map((author, index) => (
                                                                <React.Fragment key={`${author.name}-${index}`}>
                                                                    {author.link ? (
                                                                        <Link
                                                                            to={author.link}
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                            className="author"
                                                                        >
                                                                            {author.name}
                                                                        </Link>
                                                                    ) : (
                                                                        <span className="not_author">{author.name}</span>
                                                                    )}
                                                                    {index < paper.authors.length - 1 && ",\u00A0"}
                                                                </React.Fragment>
                                                            ))}
                                                        </span>
                                                    )}

                                                    {(paper.links ?? []).length > 0 && (
                                                        <p className="pub-links">
                                                            {paper.links.map((link, index) =>
                                                                link.type === "PDF" ? (
                                                                    <a
                                                                        href={link.url.replace('/public', '')}
                                                                        key={`${link.type}-${index}`}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                    >
                                                                        {link.type}
                                                                    </a>
                                                                ) : (
                                                                    <a
                                                                        href={link.url}
                                                                        key={`${link.type}-${index}`}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                    >
                                                                        {link.type}
                                                                    </a>
                                                                )
                                                            )}
                                                            {paper.citation && (
                                                                <a
                                                                    href="#"
                                                                    onClick={e => {
                                                                        e.preventDefault();
                                                                        handleCiteClick(paper.citation, paper.title);
                                                                    }}
                                                                >
                                                                    Cite
                                                                </a>
                                                            )}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
            </div>

            <CitationPopup isOpen={isPopupOpen} onClose={closePopup} citation={selectedCitation} citation_link={selectedCitationLink} />
            <Footer />
        </div>
    );
}

export default Publications;
