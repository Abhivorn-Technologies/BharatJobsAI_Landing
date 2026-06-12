import { Shield, ShieldOff, Hand, FileText, Lock, Globe, CheckCircle, Ban } from 'lucide-react';

const items = [
  { icon: <Shield size={24} />, title: 'End-to-end encryption', text: 'All resume data, documents, and communication is encrypted in transit and at rest.' },
  { icon: <ShieldOff size={24} />, title: 'Zero data selling', text: 'We never sell personal data, resumes, or profiles to advertisers or third parties.' },
  { icon: <Hand size={24} />, title: 'Candidate-controlled', text: "Profiles only shared when you tap Apply. Employers can't access without your action." },
  { icon: <FileText size={24} />, title: 'DPDP Act compliant', text: "Fully compliant with India's Digital Personal Data Protection Act 2023 and IT Act 2000." },
];

const badges = [
  { icon: <Lock size={14} />, text: '256-bit SSL Encrypted' },
  { icon: <Globe size={14} />, text: 'DPDP Act 2023' },
  { icon: <CheckCircle size={14} />, text: 'IT Act 2000' },
  { icon: <Ban size={14} />, text: 'Zero Data Selling' }
];

export default function Security() {
  return (
    <section className="section security-sec">
      <div className="container tc">
        <div className="eyebrow blue">Security & Privacy</div>
        <h2 className="section-title">
          Your data is <span className="text-sky">safe.</span>
          <br />
          Your privacy, protected.
        </h2>
        <p className="section-lead">
          BharatJobs.AI is built on the same privacy-first infrastructure as Groupin.app. Your data is
          encrypted, protected, and never sold to third parties.
        </p>
        <div className="security-grid scroll-reveal-stagger">
          {items.map((item) => (
            <div key={item.title} className="sec-card mouse-glow">
              <span className="sec-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="sec-badges scroll-reveal">
          {badges.map((b) => (
            <span key={b.text} className="sec-badge">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
