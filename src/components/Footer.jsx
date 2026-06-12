export default function Footer() {
  return (
    <footer>
      <div className="foot-accent" />
      <div className="foot-top">
        <div className="foot-brand">
          <div className="foot-logo">
            <img src="/logo.png" alt="BharatJobs AI Logo" style={{ height: '40px' }} />
          </div>
          <p>
            India&apos;s first chat-native job ecosystem. Connected through Groupin.app. A Groupin
            Solutions Private Limited initiative.
          </p>
          <span className="foot-tag">🇮🇳 One upload. One chat. One India.</span>
        </div>
        <div className="foot-col">
          <h5>Platform</h5>
          <a href="#concept">The Concept</a>
          <a href="#story">How It Works</a>
          <a href="#ai">AI Engine</a>
          <a href="#roles">For You</a>
        </div>
        <div className="foot-col">
          <h5>Resources</h5>
          <a href="#problem">Verification</a>
          <a href="#pricing">Pricing</a>
          <a href="#getstarted">Get Started</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <a href="#">About Us</a>
          <a href="https://groupin.app/">Groupin.app</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="foot-bot">
        <span>© 2025 BharatJobs.AI · A Groupin Solutions Pvt. Ltd. product · bharatjobs.ai</span>
        <span>Made with 💙 for Bharat</span>
      </div>
    </footer>
  );
}
