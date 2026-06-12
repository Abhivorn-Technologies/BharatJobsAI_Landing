import { Inbox, FileSearch, Target, Send, BrainCircuit, TrendingUp, Network, BookOpen, Zap, ShieldCheck } from 'lucide-react';

const stages = [
  { num: 'Stage 01', icon: <Inbox size={28} />, title: 'Receive & Parse', text: 'Resume, video, or document arrives via Groupin.app trigger. AI parses content into structured data — in milliseconds.' },
  { num: 'Stage 02', icon: <FileSearch size={28} />, title: 'Extract & Analyse', text: 'Skills, experience, education, certifications, and salary expectations are extracted and cross-referenced with market data.' },
  { num: 'Stage 03', icon: <Target size={28} />, title: 'Match & Score', text: 'Profile is scored against all active job postings. Match percentage computed. Top jobs identified. Skill gaps pinpointed.' },
  { num: 'Stage 04', icon: <Send size={28} />, title: 'Post Back Results', text: 'Analytics report posted back to Groupin.app. Job alerts pushed. Verification initiated. All in under 30 seconds.' },
];

const features = [
  { icon: <BrainCircuit size={20} />, title: 'Smart Skill Extraction', text: 'AI identifies hard skills (Python, SAP) and soft skills (leadership) from unstructured resume text.' },
  { icon: <TrendingUp size={20} />, title: 'Market Demand Scoring', text: 'Skills scored against current job market demand. Candidates know which skills hire most.' },
  { icon: <Network size={20} />, title: 'Cross-Platform Memory', text: 'AI remembers every interaction — building a career intelligence profile over time.' },
  { icon: <BookOpen size={20} />, title: 'Skill Gap Plans', text: 'For every gap, AI recommends specific courses, certifications, or training to close it.' },
  { icon: <Zap size={20} />, title: 'Real-Time Matching', text: 'When a new job is posted, AI scans the candidate pool and sends alerts within minutes.' },
  { icon: <ShieldCheck size={20} />, title: 'Verification Integration', text: 'Background and document checks initiated automatically — before any employer sees the profile.' },
];

export default function AIEngine() {
  return (
    <section className="section ai-sec" id="ai">
      <div className="container tc">
        <div className="eyebrow blue">Inside the AI Engine</div>
        <h2 className="section-title">
          Four stages.
          <br />
          <span className="text-sky">Thirty seconds.</span>
        </h2>
        <p className="section-lead">
          The moment a resume arrives from Groupin.app, an automated 4-stage AI pipeline begins.
          Here&apos;s exactly what happens.
        </p>

        <div className="ai-pipeline scroll-reveal">
          <div className="ai-stages">
            {stages.map((s) => (
              <div key={s.num} className="ai-stage">
                <span className="ai-num">{s.num}</span>
                <div className="ai-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="ai-feats scroll-reveal-stagger">
            {features.map((f) => (
              <div key={f.title} className="ai-feat">
                <div className="ai-feat-icon">{f.icon}</div>
                <div>
                  <h5>{f.title}</h5>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
