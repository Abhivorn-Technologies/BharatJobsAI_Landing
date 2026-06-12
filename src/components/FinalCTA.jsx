export default function FinalCTA() {
  return (
    <section className="section cta-sec">
      <div className="cta-glow cta-glow-1" />
      <div className="cta-glow cta-glow-2" />
      <div className="orb orb-purple" style={{ top: '-100px', left: '10%', opacity: 0.2 }} />
      <div className="orb orb-blue" style={{ bottom: '-60px', right: '15%', opacity: 0.15 }} />
      <div className="cta-inner scroll-reveal">
        <div className="cta-flag">
          <span className="flag-bar sky" />
          <span>Made in Bharat</span>
          <span className="flag-bar cyan" />
        </div>
        <h2>
          Your next career move
          <br />
          is a <span className="shimmer-text">chat message</span> away.
        </h2>
        <p>It takes less than three minutes to begin. No credit card. No commitment. No friction.</p>
        <div className="cta-btns">
          <a href="/" className="btn btn-cyan btn-lg">I&apos;m a Job Seeker — Free →</a>
          <a href="/" className="btn btn-primary btn-lg">I&apos;m an Employer — ₹250 →</a>
        </div>
        <p className="cta-foot">Powered by Groupin.app · A Groupin Solutions Pvt. Ltd. initiative</p>
      </div>
    </section>
  );
}
