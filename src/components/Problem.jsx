const problems = [
  {
    tag: 'For Job Seekers',
    title: '5 portals. 100 applications. 0 feedback.',
    text: "Register on five sites, upload the same resume each time, blindly apply, wait weeks, never know why you weren't shortlisted. No skill guidance. No clarity. No closure.",
  },
  {
    tag: 'For Employers',
    title: '500 applications. 5 days of filtering.',
    text: 'Post a job and receive an avalanche of unqualified, unverified applications. Spend a week filtering. Hire the wrong person. Lose ₹50,000+ in agency fees. Start again.',
  },
  {
    tag: 'For Consultants',
    title: 'Spreadsheets, WhatsApp, and chaos.',
    text: 'Manage candidates across spreadsheets and chats. No central dashboard. No automated matching. Manual follow-ups. Missed placements. Lost clients. No visibility.',
  },
];

export default function Problem() {
  return (
    <section className="section problem-sec" id="problem">
      <div className="container tc">
        <div className="eyebrow">The Problem We Solve</div>
        <h2 className="section-title">
          Job search in India is broken.
          <br />
          We <span className="text-sky">rebuilt it</span> from scratch.
        </h2>
        <p className="section-lead">
          Job seekers waste hours on multiple portals. Employers drown in unverified resumes.
          Consultants juggle spreadsheets. BharatJobs.AI eliminates all of it.
        </p>
        <div className="prob-grid scroll-reveal-stagger">
          {problems.map((p) => (
            <article key={p.tag} className="prob-card card-hover mouse-glow">
              <span className="prob-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
