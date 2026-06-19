export default function GettingStarted() {
  return (
    <section className="section start-sec" id="getstarted">
      <div className="container tc">
        <div className="eyebrow blue">Getting Started</div>
        <h2 className="section-title">
          Ready to begin?
          <br />
          <span className="text-sky">Three minutes.</span> That&apos;s all.
        </h2>
        <p className="section-lead">
          Whether you&apos;re a job seeker or an employer, getting started is simple. Three steps, three minutes.
        </p>

        <div className="start-grid scroll-reveal-stagger">
          <article className="start-card cyan">
            <div className="sc-head">
              <div>
                <span className="sc-tag">For Job Seekers</span>
                <h3>Start your career journey</h3>
              </div>
              <div className="sc-price">Free<em>forever</em></div>
            </div>
            <div className="sc-steps">
              <div className="sc-step">
                <span>01</span>
                <div>
                  <h5>Download Groupin.app</h5>
                  <p>Get Groupin.app from the Play Store or App Store. Register with your mobile number. <strong>This is the only app you need.</strong></p>
                </div>
              </div>
              <div className="sc-step">
                <span>02</span>
                <div>
                  <h5>Connect to BharatJobs.AI</h5>
                  <p>Open the BharatJobs.AI channel inside Groupin.app. Your AI career manager is waiting.</p>
                </div>
              </div>
              <div className="sc-step">
                <span>03</span>
                <div>
                  <h5>Upload & let AI work</h5>
                  <p>Send your resume in chat. Within minutes you&apos;ll receive your first analytics and matching jobs.</p>
                </div>
              </div>
            </div>
            <a href="https://app.bharatjobs.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-cyan btn-lg">Get Started — Free →</a>
          </article>

          <article className="start-card sky">
            <div className="sc-head">
              <div>
                <span className="sc-tag">For Employers</span>
                <h3>Hire your next great team member</h3>
              </div>
              <div className="sc-price">₹250<em>per post</em></div>
            </div>
            <div className="sc-steps">
              <div className="sc-step">
                <span>01</span>
                <div>
                  <h5>Register at bharatjobs.ai</h5>
                  <p>Create a free employer account in under 2 minutes. Add company details and you&apos;re ready.</p>
                </div>
              </div>
              <div className="sc-step">
                <span>02</span>
                <div>
                  <h5>Post your first job</h5>
                  <p>Define role, skills, location, salary. Pay <strong>₹250 via UPI.</strong> Your post is live instantly.</p>
                </div>
              </div>
              <div className="sc-step">
                <span>03</span>
                <div>
                  <h5>Review verified applicants</h5>
                  <p>Within hours, 25 AI-matched, verified candidates appear on your dashboard with full analytics.</p>
                </div>
              </div>
            </div>
            <a href="https://app.bharatjobs.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Post a Job — ₹250 →</a>
          </article>
        </div>
      </div>
    </section>
  );
}
