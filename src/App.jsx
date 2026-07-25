import React, { useEffect, useMemo, useState } from "react";

const industries = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Retail & Consumer",
  "Technology & SaaS",
  "Manufacturing",
  "Aviation & Travel",
  "Telecom",
  "Public Sector"
];

const cloudProfiles = ["Azure", "AWS", "Google Cloud", "Hybrid Cloud", "On-premise"];
const architectureProfiles = ["Cloud Native", "Hybrid Modernization", "Legacy Modernization", "Platform Engineering"];

const platformKpis = [
  ["3", "Consulting Accelerators"],
  ["75+", "Assessment Dimensions"],
  ["300+", "Recommendations"],
  ["Executive", "Transformation Reports"],
  ["AI-powered", "Consulting"]
];

const accelerators = [
  {
    key: "qmap",
    name: "QMAP",
    title: "Quality Maturity Assessment & Planning",
    icon: "⚙",
    href: "/qmap.html",
    purpose:
      "Evaluate enterprise Quality Engineering maturity, benchmark capabilities, identify improvement themes and produce transformation roadmaps.",
    domains: ["Governance", "Operating Model", "Automation", "Engineering", "Metrics", "Continuous Testing"],
    tags: ["QE maturity", "Benchmarking", "Roadmap", "Executive report"],
    accent: "orange"
  },
  {
    key: "craft",
    name: "CRAFT",
    title: "Continuous Readiness Assessment Framework for Test Automation",
    icon: "▣",
    href: "/craft.html",
    purpose:
      "Evaluate automation engineering capability and identify opportunities to accelerate intelligent automation readiness.",
    domains: ["Framework", "CI/CD", "Automation", "Test Data", "Reporting", "Engineering Practices"],
    tags: ["Automation", "CI/CD", "Framework", "Readiness"],
    accent: "green"
  },
  {
    key: "aiden",
    name: "AIDEN",
    title: "AI Readiness & QE Adoption Accelerator",
    icon: "AI",
    href: "/aiden.html",
    purpose:
      "Assess enterprise AI readiness, responsible AI foundations and AI-enabled QE adoption feasibility through evidence-led review.",
    domains: ["AI Governance", "Data", "Architecture", "AI Operations", "Human Oversight", "AI-enabled QE"],
    tags: ["AI readiness", "Responsible AI", "AI-QE", "Value roadmap"],
    accent: "violet"
  }
];

const capabilityCoverage = [
  ["Quality Engineering", 88],
  ["Artificial Intelligence", 76],
  ["Automation Engineering", 78],
  ["Governance", 86],
  ["Transformation", 74],
  ["Executive Reporting", 90],
  ["Roadmaps", 80],
  ["Business Case", 68]
];

const journey = [
  "Organisation",
  "Select Accelerator",
  "Discovery",
  "Assessment",
  "Evidence",
  "AI Insights",
  "Consultant Validation",
  "Executive Report",
  "Transformation Roadmap"
];

const dashboardMetrics = [
  ["Overall Enterprise Readiness", "78%"],
  ["Quality Engineering", "74%"],
  ["AI Readiness", "69%"],
  ["Automation Readiness", "82%"]
];

const riskThemes = [
  "Legacy automation framework",
  "AI governance gaps",
  "Test data bottlenecks",
  "Manual release validation"
];

const investmentAreas = [
  "AI-enabled test generation",
  "Enterprise automation platform",
  "Quality Engineering CoE",
  "Responsible AI governance"
];

const impactMetrics = [
  ["Regression effort reduction", "30-45%", "through automation modernization and AI-assisted test design"],
  ["Faster release cycles", "20-35%", "through improved quality gates, CI/CD readiness and risk-based validation"],
  ["QE maturity uplift", "+0.8 to +1.2", "maturity level improvement over a 12-18 month roadmap"],
  ["Operational cost reduction", "15-25%", "through reduced manual validation and better engineering efficiency"],
  ["AI adoption readiness", "+25-40%", "through governance, data readiness and controlled AI-QE pilots"]
];

function defaultDate() {
  return new Date().toISOString().slice(0, 10);
}

export default function App() {
  const [profile, setProfile] = useState({
    org: "ABC Bank",
    industry: "Financial Services",
    cloud: "Azure",
    architecture: "Cloud Native",
    applications: "500",
    owner: "",
    date: defaultDate(),
    selected: ["qmap", "aiden", "craft"]
  });
  const [toast, setToast] = useState("");

  const selectedAccelerators = useMemo(
    () => accelerators.filter((item) => profile.selected.includes(item.key)),
    [profile.selected]
  );

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("feujiFusionProfile") || "{}");
      setProfile((current) => ({ ...current, ...saved, selected: saved.selected || current.selected }));
    } catch {
      // Demo profile is optional.
    }
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function updateProfile(field, value) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  function toggleAccelerator(key) {
    setProfile((current) => {
      const selected = current.selected.includes(key)
        ? current.selected.filter((item) => item !== key)
        : [...current.selected, key];
      return { ...current, selected };
    });
  }

  function saveProfile() {
    localStorage.setItem("feujiFusionProfile", JSON.stringify(profile));
    setToast("Unified assessment profile saved locally.");
  }

  function remember(name) {
    localStorage.setItem("feujiFusionLastLaunch", JSON.stringify({ name, time: new Date().toISOString() }));
  }

  return (
    <>
      <nav>
        <div className="brand">
          <div className="feuji">feuji</div>
          <div className="sep" />
          <div>
            <b>FUSION™</b>
            <span>Enterprise Advisory Platform</span>
          </div>
        </div>
        <div className="nav-actions">
          <a href="#accelerators">Accelerators</a>
          <a href="#dashboard">Dashboard</a>
          <a className="nav-btn" href="#unified">Create Assessment</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-copy">
            <div className="eyebrow">Feuji FUSION™ · Enterprise Advisory Platform</div>
            <h1>
              Helping Enterprises Assess, Benchmark, Transform and Modernize
              through AI-powered Consulting.
            </h1>
            <p>
              One platform. Multiple consulting accelerators. Unified enterprise
              transformation insights across Quality Engineering, Automation,
              AI readiness and executive roadmap development.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#accelerators">Explore Accelerators</a>
              <a className="btn glass" href="#unified">View Unified Assessment</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="network-card">
              <span>Enterprise readiness signal</span>
              <strong>FUSION</strong>
              <p>Evidence · AI Insights · Consultant Validation · Executive Roadmap</p>
              <div className="node-map">
                {["QE", "AI", "AUTO", "GOV", "DATA", "ROADMAP"].map((node) => (
                  <i key={node}>{node}</i>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="kpi-strip">
          {platformKpis.map(([value, label]) => (
            <div className="kpi" key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section id="accelerators" className="section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Consulting Accelerators</div>
              <h2>Three focused accelerators. One connected platform experience.</h2>
              <p>
                QMAP, CRAFT and AIDEN can be demonstrated independently, while
                FUSION provides the common platform layer for profile reuse,
                evidence-led insights and consolidated reporting.
              </p>
            </div>
          </div>
          <div className="accelerator-grid">
            {accelerators.map((item) => (
              <article className={`accelerator-card ${item.accent}`} key={item.key}>
                <div className="card-glow" />
                <div className="acc-top">
                  <div className="acc-icon">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="label">Purpose</div>
                <p>{item.purpose}</p>
                <div className="label">Domains</div>
                <div className="domain-list">
                  {item.domains.map((domain) => (
                    <span key={domain}>✓ {domain}</span>
                  ))}
                </div>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <i key={tag}>{tag}</i>
                  ))}
                </div>
                <a className="launch" href={item.href} onClick={() => remember(item.name)}>Launch</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div>
            <div className="eyebrow">Enterprise Capability Map</div>
            <h2>Capability coverage across the advisory platform.</h2>
            <p>
              A simple customer-facing view of the platform’s coverage across
              quality, automation, AI, governance, roadmap and executive
              reporting areas.
            </p>
          </div>
          <div className="capability-matrix">
            {capabilityCoverage.map(([name, value]) => (
              <div className="capability-row" key={name}>
                <span>{name}</span>
                <div className="meter"><b style={{ width: `${value}%` }} /></div>
                <strong>{value}%</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section journey-section">
          <div className="eyebrow">Platform Journey</div>
          <h2>From organisation context to transformation roadmap.</h2>
          <div className="journey">
            {journey.map((step, index) => (
              <div className="journey-step" key={step}>
                <i>{index + 1}</i>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="unified" className="section unified-section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Platform Vision</div>
              <h2>Unified Enterprise Assessment</h2>
              <p>
                Instead of repeating the same organisation profile inside every
                accelerator, FUSION can create one shared assessment context and
                pass it into QMAP, AIDEN and CRAFT.
              </p>
            </div>
          </div>

          <div className="unified-layout">
            <div className="profile-card">
              <h3>Create Assessment</h3>
              <div className="fields">
                <label>
                  <span>Organisation</span>
                  <input value={profile.org} onChange={(event) => updateProfile("org", event.target.value)} />
                </label>
                <label>
                  <span>Industry</span>
                  <select value={profile.industry} onChange={(event) => updateProfile("industry", event.target.value)}>
                    {industries.map((industry) => <option key={industry}>{industry}</option>)}
                  </select>
                </label>
                <label>
                  <span>Cloud</span>
                  <select value={profile.cloud} onChange={(event) => updateProfile("cloud", event.target.value)}>
                    {cloudProfiles.map((cloud) => <option key={cloud}>{cloud}</option>)}
                  </select>
                </label>
                <label>
                  <span>Architecture</span>
                  <select value={profile.architecture} onChange={(event) => updateProfile("architecture", event.target.value)}>
                    {architectureProfiles.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
                <label>
                  <span>Application estate</span>
                  <input value={profile.applications} onChange={(event) => updateProfile("applications", event.target.value)} />
                </label>
              </div>
              <button className="btn primary full" type="button" onClick={saveProfile}>Continue</button>
            </div>

            <div className="selector-card">
              <h3>Select accelerators</h3>
              {accelerators.map((item) => (
                <label className="check-row" key={item.key}>
                  <input
                    type="checkbox"
                    checked={profile.selected.includes(item.key)}
                    onChange={() => toggleAccelerator(item.key)}
                  />
                  <span>{item.name}</span>
                  <small>{item.title}</small>
                </label>
              ))}
              <div className="selected-note">
                {selectedAccelerators.map((item) => item.name).join(" + ")} will receive the shared profile context.
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="section dashboard-section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Enterprise Transformation Dashboard</div>
              <h2>Single consolidated view after accelerator completion.</h2>
              <p>
                FUSION should culminate in one executive dashboard that combines
                QMAP, AIDEN and CRAFT outputs into readiness, risks, investment
                areas, roadmap and quantified impact.
              </p>
            </div>
          </div>

          <div className="dashboard">
            <div className="dashboard-metrics">
              {dashboardMetrics.map(([label, value]) => (
                <div className="dash-metric" key={label}>
                  <span>{label}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>
            <div className="priority-card">
              <span>Transformation Priority</span>
              <h3>AI-enabled Intelligent Quality Engineering</h3>
            </div>
            <div className="dash-columns">
              <div>
                <h3>Top Risks</h3>
                {riskThemes.map((risk) => <p key={risk}>• {risk}</p>)}
              </div>
              <div>
                <h3>Recommended Investment Areas</h3>
                {investmentAreas.map((area) => <p key={area}>• {area}</p>)}
              </div>
              <div>
                <h3>Value Realisation Roadmap</h3>
                <div className="year-row"><b>0-90 Days</b><span>Quick Wins</span></div>
                <div className="year-row"><b>3-6 Months</b><span>Modernise</span></div>
                <div className="year-row"><b>6-12 Months</b><span>Scale Outcomes</span></div>
              </div>
            </div>
          </div>

          <div className="impact-grid">
            {impactMetrics.map(([label, value, copy]) => (
              <div className="impact-card" key={label}>
                <span>{label}</span>
                <b>{value}</b>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section compliance-section">
          <div>
            <div className="eyebrow">Security & Compliance Posture</div>
            <h2>Designed for enterprise and regulated advisory contexts.</h2>
            <p>
              FUSION should be positioned as a compliance-conscious accelerator
              platform aligned to Feuji’s ISO 27001 information security posture
              and HIPAA-aware delivery considerations for healthcare contexts.
              The platform supports cross-industry assessment while allowing
              benchmarks, evidence handling and reporting to be contextualised.
            </p>
          </div>
          <div className="compliance-grid">
            {["ISO 27001-aligned posture", "HIPAA-aware delivery lens", "TMMi-aligned QE maturity", "Industry maturity models"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <b>Feuji FUSION™</b>
        <span>Enterprise Advisory Platform · QMAP · AIDEN · CRAFT</span>
      </footer>
      <div className={`toast${toast ? " show" : ""}`}>{toast}</div>
    </>
  );
}
