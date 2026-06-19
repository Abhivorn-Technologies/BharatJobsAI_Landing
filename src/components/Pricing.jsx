const included = [
  { text: '25 AI-matched verified resumes', meta: 'guaranteed' },
  { text: 'Auto-notifications to candidates', meta: 'included' },
  { text: 'Per-candidate analytics & scoring', meta: 'included' },
  { text: 'All 8 verification layers', meta: 'automatic' },
  { text: 'Tap-to-apply via Groupin.app', meta: 'automatic' },
  { text: 'Full dashboard with conversation log', meta: 'unlimited' },
];

export default function Pricing() {
  return (
    <section className="section pricing-sec" id="pricing">
      <div className="container tc">
        <div className="eyebrow">Pricing, Simplified</div>
        <h2 className="section-title">
          One price. <span className="text-sky">One promise.</span>
        </h2>
        <p className="section-lead">
          Transparent. Fixed. No surprises. Pay once per job post and get everything you need to hire
          India&apos;s finest verified talent.
        </p>

        <div className="pcard scroll-reveal-scale mouse-tilt">
          <div className="pcard-top">
            <div className="pcard-price">
              <span className="pcard-tag">For Employers</span>
              <div className="price-amount">
                <span className="currency">₹</span>250
              </div>
              <p className="price-per">per job post · no contract · no expiry</p>
              <span className="price-badge">✓ Pay once · Get 25 resumes</span>
            </div>
            <div className="pcard-list">
              <h4>— What&apos;s included</h4>
              {included.map((item) => (
                <div key={item.text} className="pl-item">
                  <span className="pl-check">✓</span>
                  <span className="pl-text">{item.text}</span>
                  <span className="pl-meta">{item.meta}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pcard-bot">
            <p><strong>Free for job seekers — forever.</strong> No hidden costs, no premium tiers, no upsells.</p>
            <a href="https://app.bharatjobs.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Post Your First Job →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
