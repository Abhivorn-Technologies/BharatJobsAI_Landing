export default function ConceptDiagram() {
  return (
    <section className="section concept-sec" id="concept">
      <div className="container tc">
        <div className="eyebrow">The Concept</div>
        <h2 className="section-title">
          Two platforms. <span className="text-sky">One brain.</span>
          <br />
          Working together in real time.
        </h2>
        <p className="section-lead">
          BharatJobs.AI doesn&apos;t replace your job hunt — it lives inside the chat app you already use.
          Here&apos;s the entire ecosystem in one picture.
        </p>

        <div className="concept-wrap scroll-reveal mouse-tilt">
          <div className="concept-label">— The 2-Way Chat-Native Ecosystem —</div>
          <svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" className="concept-svg" aria-hidden="true">
            <defs>
              <linearGradient id="gradSky" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="gradCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
              <linearGradient id="gradDarkBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#172554" />
              </linearGradient>
              <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <filter id="dropShadow">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.1" />
              </filter>
              <marker id="arrowOrange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
              </marker>
              <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
              </marker>
            </defs>

            <g transform="translate(60,140)">
              <rect x="0" y="0" width="180" height="280" rx="22" fill="#0F172A" filter="url(#dropShadow)" />
              <rect x="6" y="6" width="168" height="268" rx="18" fill="#1E293B" />
              <rect x="14" y="22" width="152" height="20" rx="4" fill="rgba(255,255,255,0.06)" />
              <circle cx="26" cy="32" r="6" fill="url(#gradSky)" />
              <text x="38" y="35" fill="white" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="600">BharatJobs.AI</text>
              
              <rect x="76" y="50" width="90" height="22" rx="11" fill="url(#gradSky)" />
              <text x="86" y="64" fill="white" fontFamily="Outfit,sans-serif" fontSize="8" fontWeight="600">📎 Resume_Arjun.pdf</text>

              <rect x="14" y="78" width="140" height="32" rx="6" fill="#0f172a" stroke="#0d9488" strokeWidth="1" />
              <text x="20" y="91" fill="#2dd4bf" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="700">ANALYSIS COMPLETE</text>
              <text x="20" y="103" fill="white" fontFamily="Outfit,sans-serif" fontSize="8">Match score: 87% · Gap: AWS</text>

              <rect x="14" y="118" width="148" height="56" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <text x="20" y="131" fill="#7dd3fc" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="700">NEW JOB ALERT</text>
              <text x="20" y="143" fill="white" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="700">Senior Full-Stack Engineer</text>
              <text x="20" y="153" fill="rgba(255,255,255,0.5)" fontFamily="Outfit,sans-serif" fontSize="7">TechCorp · Bengaluru · ₹18 LPA</text>
              <rect x="20" y="158" width="44" height="14" rx="4" fill="#0d9488" />
              <text x="42" y="167" textAnchor="middle" fill="white" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="700">Apply ✓</text>

              <rect x="86" y="180" width="80" height="22" rx="11" fill="url(#gradSky)" />
              <text x="126" y="194" textAnchor="middle" fill="white" fontFamily="Outfit,sans-serif" fontSize="8" fontWeight="600">✓ Applied</text>
            </g>

            <text x="150" y="100" textAnchor="middle" fill="#0F172A" fontFamily="Outfit,sans-serif" fontSize="14" fontWeight="700">Groupin.app</text>
            <text x="150" y="118" textAnchor="middle" fill="#64748B" fontFamily="Outfit,sans-serif" fontSize="11" fontWeight="500">For Job Seekers</text>
            <rect x="40" y="445" width="220" height="32" rx="8" fill="#e0f2fe" stroke="#7dd3fc" />
            <text x="150" y="461" textAnchor="middle" fill="#0284c7" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="700">📱 Lives in your existing chat app</text>
            <text x="150" y="471" textAnchor="middle" fill="#0369a1" fontFamily="Outfit,sans-serif" fontSize="8">No new app - No new login</text>

            <g transform="translate(485,140)">
              <circle cx="115" cy="140" r="100" fill="url(#gradBlue)" filter="url(#dropShadow)" />
              <circle cx="115" cy="140" r="110" fill="none" stroke="#0ea5e9" strokeWidth="2" opacity="0.3">
                <animate attributeName="r" from="100" to="130" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="115" y="120" textAnchor="middle" fontSize="32">🧠</text>
              <text x="115" y="148" textAnchor="middle" fill="white" fontFamily="Outfit,sans-serif" fontSize="14" fontWeight="800">AI ENGINE</text>
              <text x="115" y="166" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="Outfit,sans-serif" fontSize="10">BharatJobs.AI</text>
              <rect x="65" y="190" width="100" height="22" rx="11" fill="rgba(255,255,255,0.15)" />
              <text x="115" y="204" textAnchor="middle" fill="white" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="600">⚡ &lt; 30s analysis</text>
            </g>

            <text x="600" y="100" textAnchor="middle" fill="#0F172A" fontFamily="Outfit,sans-serif" fontSize="14" fontWeight="700">AI Intelligence Engine</text>
            <text x="600" y="118" textAnchor="middle" fill="#64748B" fontFamily="Outfit,sans-serif" fontSize="11" fontWeight="500">2-Way Real-Time Sync</text>
            <rect x="490" y="445" width="220" height="32" rx="8" fill="#e0f2fe" stroke="#7dd3fc" />
            <text x="600" y="461" textAnchor="middle" fill="#0284c7" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="700">🤖 AI bridges both worlds</text>
            <text x="600" y="471" textAnchor="middle" fill="#0369a1" fontFamily="Outfit,sans-serif" fontSize="8">Auto-matches · Auto-verifies · Auto-notifies</text>

            <path d="M 250 200 Q 360 180 480 200" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowSky)" strokeDasharray="4,3" />
            <rect x="290" y="170" width="120" height="20" rx="10" fill="white" stroke="#7dd3fc" />
            <text x="350" y="183" textAnchor="middle" fill="#0284c7" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="700">Resume + Media →</text>

            <path d="M 480 250 Q 360 270 250 250" stroke="#06b6d4" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" strokeDasharray="4,3" />
            <rect x="290" y="265" width="120" height="20" rx="10" fill="white" stroke="#67e8f9" />
            <text x="350" y="278" textAnchor="middle" fill="#0891b2" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="700">← Job alerts + AI</text>

            <path d="M 720 200 Q 830 180 940 200" stroke="#06b6d4" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" strokeDasharray="4,3" />
            <rect x="760" y="170" width="140" height="20" rx="10" fill="white" stroke="#67e8f9" />
            <text x="830" y="183" textAnchor="middle" fill="#0891b2" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="700">Verified candidates →</text>

            <path d="M 940 250 Q 830 270 720 250" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrowSky)" strokeDasharray="4,3" />
            <rect x="760" y="265" width="140" height="20" rx="10" fill="white" stroke="#7dd3fc" />
            <text x="830" y="278" textAnchor="middle" fill="#0284c7" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="700">← Job post + ₹250</text>

            <g transform="translate(960,140)">
              <rect x="0" y="0" width="190" height="280" rx="14" fill="white" stroke="#E2E8F0" filter="url(#dropShadow)" />
              <rect x="0" y="0" width="190" height="40" rx="14" fill="#0F172A" />
              <circle cx="14" cy="20" r="4" fill="#06b6d4" />
              <text x="24" y="24" fill="white" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="700">Employer Dashboard</text>
              
              <rect x="10" y="50" width="170" height="34" rx="6" fill="#f8fafc" stroke="#e2e8f0" />
              <circle cx="24" cy="67" r="10" fill="#e0f2fe" />
              <text x="24" y="70" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="700">A</text>
              <text x="40" y="63" fill="#0f172a" fontSize="9" fontWeight="700">Arjun Mehta</text>
              <text x="40" y="73" fill="#64748B" fontSize="7">Full-Stack · 5y</text>
              <text x="168" y="70" textAnchor="end" fill="#0d9488" fontSize="9" fontWeight="700">92%</text>

              <rect x="10" y="90" width="170" height="34" rx="6" fill="#f8fafc" stroke="#e2e8f0" />
              <circle cx="24" cy="107" r="10" fill="#cffafe" />
              <text x="24" y="110" textAnchor="middle" fill="#0891b2" fontSize="8" fontWeight="700">P</text>
              <text x="40" y="103" fill="#0f172a" fontSize="9" fontWeight="700">Priya Sharma</text>
              <text x="40" y="113" fill="#64748B" fontSize="7">React · 4y</text>
              <text x="168" y="110" textAnchor="end" fill="#0d9488" fontSize="9" fontWeight="700">88%</text>

              <rect x="10" y="130" width="170" height="34" rx="6" fill="#f8fafc" stroke="#e2e8f0" />
              <circle cx="24" cy="147" r="10" fill="#e0f2fe" />
              <text x="24" y="150" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="700">R</text>
              <text x="40" y="143" fill="#0f172a" fontSize="9" fontWeight="700">Rahul Verma</text>
              <text x="40" y="153" fill="#64748B" fontSize="7">Node.js · 6y</text>
              <text x="168" y="150" textAnchor="end" fill="#0d9488" fontSize="9" fontWeight="700">85%</text>

              <rect x="10" y="174" width="170" height="24" rx="6" fill="url(#gradSky)" />
              <text x="95" y="190" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">View All →</text>

              {/* Stats Block */}
              <rect x="10" y="210" width="55" height="44" rx="6" fill="#e0f2fe" />
              <text x="37" y="229" textAnchor="middle" fill="#0F172A" fontFamily="Outfit,sans-serif" fontSize="14" fontWeight="800">25</text>
              <text x="37" y="244" textAnchor="middle" fill="#0284c7" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="700">MATCHED</text>
              
              <rect x="69" y="210" width="55" height="44" rx="6" fill="#cffafe" />
              <text x="96" y="229" textAnchor="middle" fill="#0F172A" fontFamily="Outfit,sans-serif" fontSize="14" fontWeight="800">8</text>
              <text x="96" y="244" textAnchor="middle" fill="#0891b2" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="700">APPLIED</text>
              
              <rect x="128" y="210" width="55" height="44" rx="6" fill="#e0f2fe" />
              <text x="155" y="229" textAnchor="middle" fill="#0F172A" fontFamily="Outfit,sans-serif" fontSize="13" fontWeight="800">100%</text>
              <text x="155" y="244" textAnchor="middle" fill="#0284c7" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="700">VERIFIED</text>
            </g>

            <text x="1055" y="100" textAnchor="middle" fill="#0F172A" fontFamily="Outfit,sans-serif" fontSize="14" fontWeight="700">BharatJobs.AI</text>
            <text x="1055" y="118" textAnchor="middle" fill="#64748B" fontFamily="Outfit,sans-serif" fontSize="11" fontWeight="500">For Employers</text>
            <rect x="945" y="445" width="220" height="32" rx="8" fill="#cffafe" stroke="#67e8f9" />
            <text x="1055" y="461" textAnchor="middle" fill="#0891b2" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="700">🏢 Web dashboard for hiring</text>
            <text x="1055" y="471" textAnchor="middle" fill="#0369a1" fontFamily="Outfit,sans-serif" fontSize="8">25 verified resumes for ₹250</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
