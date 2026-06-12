const stats = [
  { num: '0', label: 'Manual steps to apply for a job' },
  { num: '24/7', label: 'AI engine running matches non-stop' },
  { num: '₹0', label: 'Cost for job seekers, always' },
  { num: '∞', label: 'Indians served, across the world' },
];

export default function Mission() {
  return (
    <section className="section mission-sec">
      <h2 className="mission-title scroll-reveal">
        From a fresher in <span className="text-sky-light">Chennai</span> to an NRI engineer in{' '}
        <span className="text-sky-light">Toronto</span> — BharatJobs.AI connects every Indian to opportunity.
      </h2>
      <div className="mission-stats scroll-reveal-stagger">
        {stats.map((s) => (
          <div key={s.label} className="ms-item">
            <div className="ms-num">{s.num}</div>
            <div className="ms-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
