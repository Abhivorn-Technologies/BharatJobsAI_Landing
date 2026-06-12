const roles = [
  {
    variant: 'sky',
    tag: 'For Job Seekers',
    title: 'Your AI career manager, in your pocket.',
    text: 'Forget visiting job sites. Your entire career — feedback, alerts, applications, updates — lives inside Groupin.app, where you already chat.',
    items: [
      'Free forever — no hidden costs',
      'AI-powered match score and skill gap analysis',
      'Daily personalised job alerts in chat',
      'One-tap applications, no forms',
      'Multi-media profiles — video, audio, PDF',
    ],
    cta: 'Join as Job Seeker →',
  },
  {
    variant: 'cyan',
    tag: 'For Employers',
    title: 'Hire smarter. Pay only ₹250.',
    text: 'Post once. Receive 25 AI-matched, fully verified candidate profiles delivered directly to your dashboard. Background-checked. Pre-screened. Ready to interview.',
    items: [
      '25 AI-matched, verified resumes per post',
      'Background checks & PF verification included',
      'Per-candidate analytics & match scoring',
      'Auto-notifications to matched candidates',
      'No subscription, no contract',
    ],
    cta: 'Post a Job →',
  },
  {
    variant: 'blue',
    tag: 'For Consultants',
    title: 'Run your placement business at scale.',
    text: 'A unified dashboard with AI auto-matching, candidate communication automation, and placement pipeline tracking. Manage hundreds of candidates effortlessly.',
    items: [
      'Unified candidate & client dashboard',
      'AI auto-matches candidates to jobs',
      'Bulk skill upgrade plans',
      'Real-time placement pipeline tracking',
      'Multi-employer client management',
    ],
    cta: 'Apply for Access →',
  },
];

export default function Roles() {
  return (
    <section className="section roles-sec" id="roles">
      <div className="container tc">
        <div className="eyebrow">Built for Everyone</div>
        <h2 className="section-title">
          Three roles. <span className="text-sky">One platform.</span>
        </h2>
        <p className="section-lead">
          BharatJobs.AI works seamlessly across the entire hiring ecosystem — designed specifically
          for the unique needs of each.
        </p>
        <div className="roles-grid scroll-reveal-stagger">
          {roles.map((role, i) => (
            <article key={role.tag} className={`role-card ${role.variant} card-hover float-anim${i === 1 ? '-2' : i === 2 ? '-3' : ''} mouse-glow`}>
              <span className="role-tag">{role.tag}</span>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
              <ul>
                {role.items.map((item) => (
                  <li key={item}><span>✓</span>{item}</li>
                ))}
              </ul>
              <a href="/" className="role-cta">{role.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
