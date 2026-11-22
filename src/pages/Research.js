import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faUniversalAccess, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import researchData from '../data/research.json'
import './Research.scss'

const applicationIcons = { agriculture: faSeedling, assistive: faUniversalAccess, arctic: faSnowflake }
const mediaPath = (path = '') => path.replace(/^\/public\//, '/')

function ExternalLink({ href, children, ...props }) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
}

function ProjectCard({ project, wide }) {
    const illustration = <img src={mediaPath(project.image)} alt={project.imageAlt} loading="lazy" className={project.imageFit === 'contain' ? 'project-image-contain' : undefined} />
    return (
        <article className={`project-card${wide ? ' project-card-wide' : ''}`}>
            <div className="project-visual">
                {project.url ? <ExternalLink href={project.url} aria-label={`Visit ${project.title} project page`}>{illustration}</ExternalLink> : illustration}
                {project.imageCaption && <p className="project-image-caption">{project.imageCaption}</p>}
            </div>
            <div className="project-copy">
                <div className="project-topline">
                    <p className="project-name">{project.title}</p>
                    {project.status && <span className="project-status">{project.status}</span>}
                </div>
                <h3>{project.subtitle}</h3>
                <p className="project-description">{project.description}</p>
                {project.tags?.length > 0 && <ul className="project-tags" aria-label="Research topics">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
                <div className="project-links">
                    {project.url ? <ExternalLink className="research-link" href={project.url} aria-label={`${project.linkLabel || 'Project page'}: ${project.title}`}>{project.linkLabel || 'Project page'}</ExternalLink> : <span className="project-coming-soon">Project page coming soon</span>}
                    {project.videoUrl && <ExternalLink className="research-video-link" href={project.videoUrl} aria-label={`Watch ${project.title} video`}>Watch video</ExternalLink>}
                </div>
            </div>
        </article>
    )
}

function Research() {
    const applications = researchData.researchApplications || []
    function jumpTo(id) {
        const section = document.getElementById(id)
        if (!section) return
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
        section.querySelector('h2')?.focus({ preventScroll: true })
    }
    return (
        <div className="ResearchPage">
            <NavBar />
            <main className="Research container">
                <header className="research-intro">
                    <h1>{researchData.researchPageTitle}</h1>
                    <p className="research-headline">{researchData.researchPageHeadline}</p>
                    <p className="research-summary">{researchData.researchPageSubtitle}</p>
                </header>
                <nav className="research-jump-nav" aria-label="Research applications">
                    {applications.map(application => <button key={application.id} onClick={() => jumpTo(application.id)}><FontAwesomeIcon icon={applicationIcons[application.icon] || faSeedling} aria-hidden="true" />{application.title}</button>)}
                    <button className="past-projects-jump" onClick={() => jumpTo('past-projects')}>Past Projects</button>
                </nav>
                {applications.map(application => (
                    <section className={`application-section application-${application.icon}`} key={application.id} id={application.id} aria-labelledby={`${application.id}-title`}>
                        <div className="application-heading">
                            <div>
                                <div className="application-label"><FontAwesomeIcon icon={applicationIcons[application.icon] || faSeedling} aria-hidden="true" /><h2 id={`${application.id}-title`} tabIndex="-1">{application.title}</h2></div>
                                <p className="application-tagline">{application.tagline}</p>
                            </div>
                            <p className="application-description">{application.description}</p>
                        </div>
                        <div className={`project-grid${application.projects.length === 1 ? ' project-grid-single' : ''}`}>
                            {application.projects.map(project => <ProjectCard key={project.id} project={project} wide={application.projects.length === 1} />)}
                        </div>
                        {application.highlight && <aside className="research-highlight" aria-label={application.highlight.title}><div><h3>{application.highlight.title}</h3><p>{application.highlight.description}</p></div>{application.highlight.url && <a href={application.highlight.url} className="research-link">{application.highlight.linkLabel || 'Lab news'}</a>}</aside>}
                        {application.mediaCoverage?.length > 0 && <aside className="research-media" aria-label={`${application.title} in the news`}><h3>In the news</h3><ul>{application.mediaCoverage.map(item => <li key={item.url}><span className="media-outlet">{item.outlet}</span><ExternalLink href={item.url}>{item.title}</ExternalLink><span className="media-date">{item.date}</span></li>)}</ul></aside>}
                    </section>
                ))}
                <section className="section research-past-section" id="past-projects" aria-labelledby="past-projects-title">
                    <h2 id="past-projects-title" tabIndex="-1">{researchData.pastProjectsTitle}</h2>
                    <div className="past_projects">{researchData.pastProjectsData.map(project => <div key={project.projectTitle}><h3>{project.projectTitle}</h3><img src={mediaPath(project.projectImage)} alt={project.projectTitle} loading="lazy" /></div>)}</div>
                </section>
                <section className="section research-sponsors-section" aria-labelledby="research-sponsors-title">
                    <h2 id="research-sponsors-title">{researchData.SponsorsTitle}</h2>
                    <div className="research_collaborators">{researchData.SponsorsData.map((src, index) => <img key={src} src={mediaPath(src)} alt={`Research sponsor ${index + 1}`} loading="lazy" />)}</div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Research
