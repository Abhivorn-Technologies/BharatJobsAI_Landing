import { useState } from 'react';
import { Smartphone, UploadCloud, BarChart3, CheckCircle2, Building2, ClipboardList, BellRing, LineChart, Users, Bot, GraduationCap, Trophy } from 'lucide-react';

const stories = {
  seeker: {
    tabClass: '',
    ctaTitle: <>Free <span className="text-sky">forever.</span> Always.</>,
    ctaText: "Job seekers never pay anything on BharatJobs.AI — that's a promise built into our model.",
    ctaBtn: 'Start as Job Seeker',
    steps: [
      { num: 'Step 01', icon: <Smartphone size={28} />, title: 'Open Groupin.app', text: 'Use the chat app you already have. Connect to BharatJobs.AI channel inside it. No new download.' },
      { num: 'Step 02', icon: <UploadCloud size={28} />, title: 'Send your resume', text: 'Share PDF, video introduction, audio clip, or any document — directly in chat. AI begins immediately.' },
      { num: 'Step 03', icon: <BarChart3 size={28} />, title: 'Get AI feedback', text: 'Within minutes, your match score, skill gaps, and personalised upgrade plan arrive in chat.' },
      { num: 'Step 04', icon: <CheckCircle2 size={28} />, title: 'Tap Apply — done', text: 'When matching jobs arrive in chat, tap Apply. Your verified profile reaches the employer.' },
    ],
  },
  employer: {
    tabClass: 'cyan',
    ctaTitle: <><span className="text-sky">₹250 per post.</span> 25 verified resumes.</>,
    ctaText: 'No subscriptions. No agency fees. No hidden costs. Just pre-screened candidates, delivered.',
    ctaBtn: 'Post Your First Job',
    steps: [
      { num: 'Step 01', icon: <Building2 size={28} />, title: 'Register your company', text: "Create your free employer account at bharatjobs.ai. Add company details. You're set in two minutes." },
      { num: 'Step 02', icon: <ClipboardList size={28} />, title: 'Post a job — ₹250', text: 'Define role, skills, location, salary. Pay ₹250 via UPI. Your post is live and AI begins searching.' },
      { num: 'Step 03', icon: <BellRing size={28} />, title: 'AI notifies candidates', text: 'Matched job seekers receive instant chat alerts in Groupin.app — with Apply / View buttons.' },
      { num: 'Step 04', icon: <LineChart size={28} />, title: 'Review on dashboard', text: '25 verified, AI-matched candidates with full analytics, match scores, and background checks.' },
    ],
  },
  consultant: {
    tabClass: 'blue',
    ctaTitle: <>Save <span className="text-sky">20+ hours</span> a week.</>,
    ctaText: 'No more spreadsheets. No more WhatsApp follow-ups. Just a clean, AI-powered placement business.',
    ctaBtn: 'Apply for Access',
    steps: [
      { num: 'Step 01', icon: <Users size={28} />, title: 'Onboard candidates', text: 'Bring your candidate pool to BharatJobs.AI. Connect each to Groupin.app. AI analyses every profile.' },
      { num: 'Step 02', icon: <Bot size={28} />, title: 'AI handles matching', text: 'When employers post jobs, AI auto-matches and notifies your candidates via Groupin.app.' },
      { num: 'Step 03', icon: <GraduationCap size={28} />, title: 'Send upgrade plans', text: 'AI generates personalised skill upgrade plans. Push them via Groupin.app with one click.' },
      { num: 'Step 04', icon: <Trophy size={28} />, title: 'Track placements', text: "Your dashboard shows every candidate's status — applied, shortlisted, interviewed, placed." },
    ],
  },
};

export default function HowItWorks() {
  const [active, setActive] = useState('seeker');
  const story = stories[active];

  return (
    <section className="section story-sec" id="story">
      <div className="container tc">
        <div className="eyebrow">How It Works</div>
        <h2 className="section-title">
          Choose your role.
          <br />
          See <span className="text-sky">your</span> journey.
        </h2>
        <p className="section-lead">
          Whether you&apos;re searching for work, hiring talent, or running a placement business —
          here&apos;s exactly how BharatJobs.AI works for you.
        </p>

        <div className="story-tabs">
          {[
            { id: 'seeker', label: 'For Job Seekers' },
            { id: 'employer', label: 'For Employers' },
            { id: 'consultant', label: 'For Consultants' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`story-tab ${active === tab.id ? `active ${stories[tab.id].tabClass}` : ''}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={`story-panel ${story.tabClass} fade-panel`} key={active}>
          <div className="story-steps">
            {story.steps.map((step) => (
              <div key={step.num} className="story-step">
                <span className="step-num">{step.num}</span>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="story-cta">
            <div>
              <h4>{story.ctaTitle}</h4>
              <p>{story.ctaText}</p>
            </div>
            <a href="https://app.bharatjobs.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{story.ctaBtn} →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
