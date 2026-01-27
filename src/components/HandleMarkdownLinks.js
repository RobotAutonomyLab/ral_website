import { Link } from 'react-router-dom'

// Convert markdown links into either <Link> (internal) or <a> (external)
function MarkdownLink({ href = '', children, ...props }) {
    // handle "www.google.com" -> make it absolute
    const normalizedHref = href.startsWith('www.') ? `https://${href}` : href

    // handle "#/team/ilyas" -> "/team/ilyas"
    if (normalizedHref.startsWith('#/')) {
        return <Link to={normalizedHref.slice(1)}>{children}</Link>
    }

    // External links (http/https) open in new tab
    const isExternal = /^https?:\/\//i.test(normalizedHref)
    if (isExternal) {
        return (
            <a
                href={normalizedHref}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        )
    }

    // Internal links like "/" or "/team/ilyas"
    return <Link to={normalizedHref}>{children}</Link>
}

export default MarkdownLink