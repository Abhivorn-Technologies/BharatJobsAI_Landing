export default function Hero() {
  const candidates = [
    { initial: 'A', name: 'Arjun Mehta', role: 'Full-Stack · 5y', score: '92%', cls: 'a' },
    { initial: 'P', name: 'Priya Sharma', role: 'React · 4y', score: '88%', cls: 'p' },
    { initial: 'R', name: 'Rahul Verma', role: 'Node.js · 6y', score: '85%', cls: 'r' },
  ];

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />


      <div className="hero-grid">
        {/* Column 1 — Text content */}
        <div className="hero-content animate-in">
          <div className="eyebrow-pill">
            <span className="badge-new">New</span>
            India&apos;s First Chat-Native Job Ecosystem
          </div>
          <h1>
            Find your next job <span className="shimmer-text">without</span> ever leaving your{' '}
            <span className="shimmer-text">chat.</span>
          </h1>
          <p>
            Upload your resume on <strong>Groupin.app</strong> — India&apos;s communication platform.
            Our AI analyses it, finds matching roles, and sends alerts in chat.{' '}
            <strong>One tap to apply.</strong> No portals. No logins. No effort.
          </p>
          <div className="hero-ctas">
            <a href="#story" className="btn btn-primary btn-lg btn-gradient-border">
              Start Your Career Journey →
            </a>
            <a href="#concept" className="btn btn-link">
              See how it works ↓
            </a>
          </div>
          <div className="hero-meta">
            <div className="meta-item">
              <strong>2-Way</strong>
              <span>Live AI Sync</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <strong>₹250</strong>
              <span>Per Job Post</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <strong>Free</strong>
              <span>For Job Seekers</span>
            </div>
          </div>
        </div>

        {/* Column 2 — Phone mockup */}
        <div className="hero-stage animate-in delay-1" style={{ position: 'relative' }}>
          <div className="hero-bg-lines"></div>
          <div className="orb orb-blue" style={{ top: '-80px', right: '-60px', opacity: 0.1 }} />
          <div className="orb orb-cyan" style={{ bottom: '-40px', left: '-40px', opacity: 0.08 }} />
          <div className="phone">
            <div className="phone-screen">
              <div className="phone-status">
                <span>9:41</span>
                <span>●●●● 5G ▮▮▮</span>
              </div>
              <div className="phone-header">
                <span className="phone-back">‹</span>
                <div className="phone-avatar">B</div>
                <div>
                  <div className="phone-name">BharatJobs.AI</div>
                  <div className="phone-online">Active now</div>
                </div>
              </div>
              <div className="phone-chat">
                <div className="chat-msg chat-out chat-d1">
                  📎 Resume_Arjun.pdf
                  <span className="chat-time">9:41 AM ✓✓</span>
                </div>
                <div className="chat-msg chat-ai chat-d2">
                  <span className="chat-label">Analysis Complete</span>
                  Match score: 87% · Skill gap: AWS Cloud · 3 jobs found
                </div>
                <div className="chat-msg chat-job chat-d3">
                  <span className="chat-label sky">New Job Alert</span>
                  <strong>Senior Full-Stack Engineer</strong>
                  <span className="job-meta">TechCorp · Bengaluru · ₹18 LPA</span>
                  <span className="job-match">● 92% match · Verified</span>
                  <div className="job-actions">
                    <button type="button" className="job-btn primary">Apply</button>
                    <button type="button" className="job-btn">Details</button>
                  </div>
                </div>
                <div className="chat-msg chat-out chat-d4">
                  ✓ Applied
                  <span className="chat-time">9:42 AM ✓✓</span>
                </div>
                <div className="chat-msg chat-ai chat-d5">
                  <span className="chat-label">Update</span>
                  Application sent to TechCorp · Status: Pending review
                </div>
              </div>
              <div className="phone-input">
                <div className="phone-input-bar">Type a message...</div>
                <div className="phone-mic">🎤</div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 — Employer Dashboard white card */}
        <div className="dash-card animate-in delay-2">
          <div className="dash-head">
            <span className="dash-dot" />
            <div>
              <strong>Employer Dashboard</strong>
              <span>TechCorp · Live</span>
            </div>
          </div>
          {candidates.map((c) => (
            <div key={c.name} className="dash-row">
              <div className={`dash-av ${c.cls}`}>{c.initial}</div>
              <div>
                <div className="dash-name">{c.name}</div>
                <div className="dash-role">{c.role}</div>
              </div>
              <strong className="dash-score">{c.score}</strong>
            </div>
          ))}
          <div className="dash-stats">
            <div><strong>25</strong><span>Matched</span></div>
            <div><strong>8</strong><span>Applied</span></div>
            <div><strong>100%</strong><span>Verified</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
