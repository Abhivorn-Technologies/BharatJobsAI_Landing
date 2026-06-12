import { useState } from 'react';

const faqs = [
  {
    tag: 'For Job Seekers',
    tagClass: 'cyan',
    q: 'Do I need to create a new account on BharatJobs.AI to use it?',
    a: <>No. Job seekers never need to visit the BharatJobs.AI website or create a separate account. Everything happens inside your existing <strong>Groupin.app</strong> — the app you already have. Simply connect to the BharatJobs.AI channel and start uploading your resume.</>,
  },
  {
    tag: 'For Employers',
    tagClass: 'sky',
    q: 'What exactly do I get for ₹250 per job post?',
    a: <>For ₹250, you receive <strong>25 AI-matched, fully verified candidate resumes</strong> delivered to your dashboard. Each profile includes a match score, skill summary, background check results, and identity verification status. No additional charges, post stays active until you receive all 25 matches.</>,
  },
  {
    tag: 'For Job Seekers',
    tagClass: 'cyan',
    q: 'Is BharatJobs.AI really free for job seekers? Forever?',
    a: <>Yes, absolutely. BharatJobs.AI is <strong>completely free for job seekers, always.</strong> Upload your resume, receive AI analytics, get unlimited job alerts, apply to jobs, and receive skill upgrade recommendations — at zero cost.</>,
  },
  {
    tag: 'General',
    tagClass: 'blue',
    q: 'What is the connection between BharatJobs.AI and Groupin.app?',
    a: <>BharatJobs.AI is a product built under <strong>Groupin Solutions Private Limited</strong> — the same company that makes Groupin.app. The two platforms are integrated via a real-time 2-way data sync. Groupin.app is the communication channel; BharatJobs.AI is the AI intelligence engine.</>,
  },
  {
    tag: 'For Job Seekers',
    tagClass: 'cyan',
    q: 'What file formats can I upload for my resume?',
    a: <>BharatJobs.AI accepts <strong>PDF, Word (DOC/DOCX), video files (MP4, MOV), audio files (MP3, WAV), and document formats (PPT, images).</strong> Multiple formats give you a richer profile that stands out to employers.</>,
  },
  {
    tag: 'For Employers',
    tagClass: 'sky',
    q: 'How quickly will I receive applications after posting a job?',
    a: <>The AI matching engine begins searching <strong>immediately</strong> after your post goes live. Matched candidates receive alerts in their Groupin.app within minutes. Your first verified applications typically appear in your dashboard within hours.</>,
  },
  {
    tag: 'For Consultants',
    tagClass: 'blue',
    q: 'How is the Consultant Dashboard different from an employer account?',
    a: <>The Consultant Dashboard gives you a <strong>multi-candidate, multi-employer view.</strong> Manage your entire candidate pool, see all match scores, track applications across employer clients, receive automated matching alerts — all in one interface designed for staffing agencies.</>,
  },
  {
    tag: 'For NRI Indians',
    tagClass: 'cyan',
    q: 'Can Indians living outside India use BharatJobs.AI?',
    a: <>Yes. BharatJobs.AI is built specifically to serve the <strong>global Indian community.</strong> Any Indian with a Groupin.app account — anywhere in the world — can use BharatJobs.AI to find jobs in India or with Indian-origin companies globally.</>,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-sec" id="faq">
      <div className="container-narrow tc">
        <div className="eyebrow">Frequently Asked Questions</div>
        <h2 className="section-title">
          Everything you
          <br />
          need to <span className="text-sky">know.</span>
        </h2>
        <p className="section-lead">
          Clear answers to the questions we hear most often from job seekers, employers, and consultants.
        </p>

        <div className="faq-list scroll-reveal">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button type="button" className="faq-q" onClick={() => toggle(i)}>
                <div>
                  <span className={`faq-tag ${faq.tagClass}`}>{faq.tag}</span>
                  <h4>{faq.q}</h4>
                </div>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
