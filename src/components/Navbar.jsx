import { useState } from 'react';

const links = [
  { href: '#concept', label: 'Concept' },
  { href: '#story', label: 'How It Works' },
  { href: '#ai', label: 'AI Engine' },
  { href: '#roles', label: 'For You' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav id="nav">
      <a href="/" className="logo" onClick={() => setOpen(false)}>
        <div className="logo-images-wrapper">
          <img src="/home.jpeg" alt="BharatJobs.AI Icon" className="logo-icon-img" />
          <div className="logo-text-wrapper">
            <div className="logo-main-texts">
              <img src="/bharathjobs.jpeg" alt="BharatJobs" className="logo-bharatjobs-img" />
              <img src="/ai.jpeg" alt=".AI" className="logo-ai-img" />
            </div>
            <div className="noise-patch"></div>
            <div className="logo-sub">EST. 2026 &bull; BHARAT</div>
          </div>
        </div>
      </a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="mobile-only-signin" style={{ marginTop: '10px' }}>
          <a
            href="https://app.bharatjobs.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signin"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setOpen(false)}
          >
            <span className="signin-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </span>
            Sign In
            <span className="signin-arrow">→</span>
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <a
          href="https://app.bharatjobs.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-signin"
        >
          <span className="signin-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </span>
          Sign In
          <span className="signin-arrow">→</span>
        </a>
        <button
          type="button"
          className={`nav-toggle ${open ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="nav-accent" />
    </nav>
  );
}
