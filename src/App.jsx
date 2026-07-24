import React, { useEffect, useMemo, useState } from "react";

const profileFields = ["org", "industry", "region", "owner", "date"];

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

const accelerators = [
  {
    key: "qmap",
    name: "QMAP",
    domain: "Quality Engineering",
    headline: "Understand QE maturity and transformation priorities.",
    signal: "Release confidence, operating model, metrics, governance and QE maturity.",
    href: "/qmap.html",
    service: "Quality Engineering Transformation",
    accent: "orange",
    points: ["QE maturity baseline", "Readiness heatmap", "Benchmarks", "Roadmap"]
  },
  {
    key: "craft",
    name: "CRAFT",
    domain: "Automation Engineering",
    headline: "Evaluate automation readiness and modernization priorities.",
    signal: "Manual effort, automation debt, framework health, CI/CD fit and execution readiness.",
    href: "/craft.html",
    service: "Automation Modernization",
    accent: "green",
    points: ["Automation readiness", "Evidence inference", "Follow-up prompts", "Modernization plan"]
  },
  {
    key: "aiden",
    name: "AIDEN",
    domain: "AI-enabled Transformation",
    headline: "Assess responsible AI readiness and AI-enabled QE feasibility.",
    signal: "AI governance, data, architecture, AI operations, human oversight and use-case readiness.",
    href: "/aiden.html",
    service: "AI Advisory and AI-enabled QE",
    accent: "violet",
    points: ["Enterprise AI readiness", "AI-QE adoption", "Use-case priority", "Value roadmap"]
  }
];

const servicePlays = [
  {
    title: "Product Engineering",
    trigger: "Product delivery, ownership and engineering ways of working need a structured review.",
    offer: "Product engineering acceleration, delivery model redesign and platform-led product squads."
  },
  {
    title: "Quality Engineering",
    trigger: "Release confidence, quality gates, defect trends or QE metrics need a clearer operating view.",
    offer: "QE transformation, test strategy, governance, metrics and managed QE services."
  },
  {
    title: "Automation",
    trigger: "Regression effort, automation coverage, framework health or validation cycle time need review.",
    offer: "Automation modernization, framework engineering, CI/CD integration and regression optimization."
  },
  {
    title: "AI",
    trigger: "AI readiness, governance, use-case feasibility or adoption controls need structured assessment.",
    offer: "AI advisory, responsible AI foundations, AI-enabled QE pilots and adoption roadmap."
  },
  {
    title: "Cloud and Infra",
    trigger: "Environment reliability, scalability, release flow or platform foundations need review.",
    offer: "Cloud modernization, DevOps enablement, environment reliability and platform engineering."
  },
  {
    title: "Data and Analytics",
    trigger: "Lifecycle data, reporting, traceability or decision intelligence need a connected view.",
    offer: "Data foundation, engineering analytics, quality intelligence and executive dashboards."
  }
];

const transformationThemes = [
  ["01", "Contextualize", "Use evidence and customer context to establish a balanced readiness view."],
  ["02", "Align", "Connect readiness themes to relevant Feuji service capabilities."],
  ["03", "Prioritize", "Separate foundational actions, pilot candidates and scale considerations."],
  ["04", "Guide", "Create a practical roadmap, value view and executive summary."]
];

function getDefaultDate() {
  return new Date().toISOString().slice(0, 10);
}

export default function App() {
  const [profile, setProfile] = useState({
    org: "",
    industry: industries[0],
    region: "",
    owner: "",
    date: getDefaultDate()
  });
  const [toast, setToast] = useState("");

  const recommendedMotion = useMemo(() => {
    if (/financial|healthcare|public/i.test(profile.industry)) {
      return "Evidence-led discovery followed by a governed AI-QE readiness roadmap.";
    }
    if (/technology|saas/i.test(profile.industry)) {
      return "Product engineering, automation modernization and AI-enabled quality intelligence review.";
    }
    return "Cross-domain readiness scan followed by a practical 90-day transformation roadmap.";
  }, [profile.industry]);

  useEffect(() => {
    try {
      const savedProfile = JSON.parse(
        localStorage.getItem("feujiFusionProfile") || "{}"
      );
      setProfile((current) => ({
        ...current,
        ...Object.fromEntries(
          profileFields
            .filter((field) => savedProfile[field] !== undefined)
            .map((field) => [field, savedProfile[field]])
        ),
        date: savedProfile.date || current.date
      }));
    } catch {
      setProfile((current) => ({ ...current, date: current.date || getDefaultDate() }));
    }
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2500);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function updateProfile(field, value) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  function saveProfile() {
    try {
      localStorage.setItem("feujiFusionProfile", JSON.stringify(profile));
      setToast("Organisation profile saved locally.");
    } catch {
      setToast("Profile could not be saved.");
    }
  }

  function remember(name) {
    try {
      localStorage.setItem(
        "feujiFusionLastLaunch",
        JSON.stringify({ name, time: new Date().toISOString() })
      );
    } catch {
      // Launch history is helpful but non-essential.
    }
  }

  return (
    <>
      <nav>
        <div className="brand">
          <div className="feuji">feuji</div>
          <div className="sep" />
          <div className="brand-copy">
            <b>FUSION</b>
            <span>Transformation Intelligence Platform</span>
          </div>
        </div>
        <div className="nav-right">
          <span className="status">Executive Edition</span>
          <a className="btn" href="#command">
            Command Center
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">Feuji Enterprise Advisory</div>
            <h1 id="hero-title">
              FUSION brings Feuji accelerators into one structured transformation platform.
            </h1>
            <p>
              A customer-facing platform for structured advisory conversations
              across product engineering, quality engineering, automation, AI,
              cloud, infra, data and analytics. FUSION brings together
              evidence-led accelerators, readiness views and practical roadmap
              outputs in a consistent experience.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#command">
                Open Executive Command Center
              </a>
              <a className="btn" href="#accelerators">
                Launch Accelerators
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="command-card">
              <div className="panel-top">
                <span>FUSION platform view</span>
                <b>{profile.org || "Sample Organisation"}</b>
              </div>
              <div className="signal-grid">
                <div>
                  <strong>3</strong>
                  <span>active accelerators</span>
                </div>
                <div>
                  <strong>6</strong>
                  <span>capability areas</span>
                </div>
                <div>
                  <strong>90</strong>
                  <span>day roadmap lens</span>
                </div>
              </div>
              <div className="insight-box">
                <span>Recommended motion</span>
                <p>{recommendedMotion}</p>
              </div>
              <div className="mini-flow">
                {["Evidence", "Readiness", "Capabilities", "Roadmap"].map((item) => (
                  <i key={item}>{item}</i>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="command" className="command">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">Executive command center</div>
                <div className="title">One platform view before the accelerator drill-down.</div>
                <p className="desc">
                  FUSION provides an executive-level view of readiness themes,
                  accelerator coverage and relevant Feuji capability areas
                  before users move into detailed accelerator screens.
                </p>
              </div>
              <a className="btn primary" href="#profile">
                Set Customer Context
              </a>
            </div>

            <div className="command-layout">
              <div className="snapshot">
                <div className="snapshot-head">
                  <span>Readiness snapshot</span>
                  <b>{profile.industry}</b>
                </div>
                <div className="readiness-bars">
                  {[
                    ["Quality Engineering", 68, "QMAP"],
                    ["Automation", 61, "CRAFT"],
                    ["AI-enabled QE", 56, "AIDEN"],
                    ["Data and Intelligence", 52, "FUSION"]
                  ].map(([label, value, source]) => (
                    <div className="bar-row" key={label}>
                      <div>
                        <b>{label}</b>
                        <span>{source}</span>
                      </div>
                      <div className="bar">
                        <i style={{ width: `${value}%` }} />
                      </div>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="recommendation">
                <div className="kicker">Suggested engagement pathway</div>
                <h3>{recommendedMotion}</h3>
                <p>
                  Use the accelerators to validate the baseline and convert
                  the findings into a customer-ready roadmap, summary and
                  implementation direction.
                </p>
                <div className="recommended-stack">
                  <span>Discovery workshop</span>
                  <span>Evidence review</span>
                  <span>Pilot definition</span>
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="accelerators">
          <div className="container">
            <div className="kicker">Evidence-led accelerators</div>
            <div className="title">Use the right accelerator for the transformation question.</div>
            <p className="desc">
              QMAP, CRAFT and AIDEN become the domain engines underneath the
              FUSION executive layer. Each can operate independently or
              contribute to a wider transformation roadmap.
            </p>
            <div className="cards">
              {accelerators.map((accelerator) => (
                <article className={`card ${accelerator.accent}`} key={accelerator.key}>
                  <div className="domain">{accelerator.domain}</div>
                  <h3>{accelerator.headline}</h3>
                  <div className="powered">
                    Powered by <b>{accelerator.name}</b>
                  </div>
                  <p>{accelerator.signal}</p>
                  <ul>
                    {accelerator.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="service-map">Aligned capability: {accelerator.service}</div>
                  <a
                    className="btn launch"
                    href={accelerator.href}
                    onClick={() => remember(accelerator.name)}
                  >
                    Launch {accelerator.name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <div className="kicker">Feuji capability alignment</div>
            <div className="title">Relate accelerator outputs to Feuji service capabilities.</div>
            <p className="desc">
              FUSION keeps the discussion structured by showing which Feuji
              capabilities are relevant to different transformation themes,
              without turning the platform into a sales-heavy experience.
            </p>
            <div className="service-grid">
              {servicePlays.map((play) => (
                <div className="service-card" key={play.title}>
                  <span>{play.title}</span>
                  <h3>{play.trigger}</h3>
                  <p>{play.offer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="profile">
          <div className="container">
            <div className="kicker">Customer context</div>
            <div className="title">Create a lightweight organisation profile.</div>
            <p className="desc">
              This shared profile sets the organisation context for the FUSION
              narrative and prepares the platform for cross-accelerator data.
            </p>
            <div className="profile-box">
              <div className="fields">
                <label className="field">
                  <span>Organisation name</span>
                  <input
                    value={profile.org}
                    placeholder="ABC Bank"
                    onChange={(event) => updateProfile("org", event.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Industry</span>
                  <select
                    value={profile.industry}
                    onChange={(event) => updateProfile("industry", event.target.value)}
                  >
                    {industries.map((industry) => (
                      <option key={industry}>{industry}</option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Country / Region</span>
                  <input
                    value={profile.region}
                    placeholder="India / North America"
                    onChange={(event) => updateProfile("region", event.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Review owner</span>
                  <input
                    value={profile.owner}
                    placeholder="Consultant or sponsor"
                    onChange={(event) => updateProfile("owner", event.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Review date</span>
                  <input
                    type="date"
                    value={profile.date}
                    onChange={(event) => updateProfile("date", event.target.value)}
                  />
                </label>
              </div>
              <div className="profile-foot">
                <p>
                  This release stores the profile locally in the browser. The next
                  platform step is to let QMAP, CRAFT and AIDEN consume one shared
                  customer profile and publish their findings back into this
                  command center.
                </p>
                <button className="btn primary" type="button" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <div className="container">
            <div className="kicker">Platform narrative</div>
            <div className="title">FUSION is a unified accelerator platform for transformation advisory.</div>
            <div className="journey">
              {transformationThemes.map(([number, heading, copy]) => (
                <div key={number}>
                  <span>{number}</span>
                  <h4>{heading}</h4>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot">
          <div>
            <b>Feuji FUSION</b>
            <br />
            <span>Transformation Intelligence Platform</span>
          </div>
          <span>Executive Edition 2026</span>
        </div>
      </footer>
      <div className={`toast${toast ? " show" : ""}`}>{toast}</div>
    </>
  );
}
