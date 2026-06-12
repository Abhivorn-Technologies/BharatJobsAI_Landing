import { GraduationCap, Briefcase, IdCard, ShieldCheck, Landmark, Fingerprint, FileText, Globe } from 'lucide-react';

const checks = [
  { icon: <GraduationCap size={32} strokeWidth={1.5} />, title: 'Education', text: 'Degree authenticity, university validation, academic credentials.' },
  { icon: <Briefcase size={32} strokeWidth={1.5} />, title: 'Experience', text: 'Previous employer verification and employment duration.' },
  { icon: <IdCard size={32} strokeWidth={1.5} />, title: 'Identity', text: 'Aadhaar, PAN, and government ID validation.' },
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'PF / EPFO', text: 'UAN verification and Provident Fund history.' },
  { icon: <Landmark size={32} strokeWidth={1.5} />, title: 'Bank Account', text: 'Account number and IFSC code cross-verification.' },
  { icon: <Fingerprint size={32} strokeWidth={1.5} />, title: 'Background', text: 'Criminal records, court records, police verification.' },
  { icon: <FileText size={32} strokeWidth={1.5} />, title: 'Documents', text: 'Certificate authenticity, professional licences.' },
  { icon: <Globe size={32} strokeWidth={1.5} />, title: 'Digital Presence', text: 'LinkedIn, GitHub, portfolio, online footprint.' },
];

export default function Verification() {
  return (
    <section className="section verify-sec">
      <div className="container tc">
        <div className="eyebrow">Trust, Fully Automated</div>
        <h2 className="section-title">
          Every candidate. <span className="text-sky">Fully verified.</span>
        </h2>
        <p className="section-lead">
          Eight verification layers — completed automatically before any employer reviews a profile.
          No third-party agencies. No delays. No extra cost.
        </p>
        <div className="verify-pulse scroll-reveal">
          <span className="pulse-dot" />
          Live verification — every profile checked across 8 systems in real-time
        </div>
        <div className="verify-grid scroll-reveal-stagger">
          {checks.map((c) => (
            <div key={c.title} className="verify-card">
              <div className="vc-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <span className="vc-badge">✓ Auto</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
