const testimonials = [
  {
    text: 'I uploaded my resume on Monday morning. Tuesday I had three job alerts in my chat. Friday I had two interview calls. I never once opened a job portal.',
    name: 'Arjun Mehta',
    role: 'Software Engineer · Pune',
    avatar: 'AM',
  },
  {
    text: 'Used to receive 300 unverified applications per post. Now I get 25 pre-matched, verified profiles directly. Shortlisted in twenty minutes. ₹250 is almost a joke.',
    name: 'Priya Rajan',
    role: 'HR Director · Bengaluru',
    avatar: 'PR',
  },
  {
    text: 'My placement consultancy went from spreadsheets and WhatsApp groups to a unified dashboard with AI matching. Twenty hours a week saved. Placement rate doubled.',
    name: 'Mohammed Rashid',
    role: 'Founder · Hyderabad Placements',
    avatar: 'MR',
  },
];

export default function Proof() {
  return (
    <section className="section proof-sec">
      <div className="container tc">
        <div className="eyebrow light">From the Field</div>
        <h2 className="section-title light">
          Real Indians. <span className="text-sky-light">Real outcomes.</span>
        </h2>
        <div className="proof-grid scroll-reveal-stagger">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="proof-card">
              <span className="proof-mark">&ldquo;</span>
              <p>{t.text}</p>
              <footer>
                <span className="proof-av">{t.avatar}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
