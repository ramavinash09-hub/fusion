import React, { useEffect, useState } from "react";

const profileFields = ["org", "industry", "region", "owner", "date"];

const assessments = [
  {
    className: "card",
    domain: "Quality Engineering",
    title: "Understand QE maturity and transformation readiness.",
    poweredBy: "QMAP",
    description:
      "Evaluate Quality Engineering capability, operating model, governance, automation and improvement priorities.",
    points: [
      "Maturity and benchmark assessment",
      "Capability gap analysis",
      "Consultant validation",
      "Transformation roadmap"
    ],
    href: "/qmap.html",
    cta: "Launch Quality Engineering Assessment ->"
  },
  {
    className: "card ai",
    domain: "Artificial Intelligence",
    title: "Assess responsible AI readiness and adoption potential.",
    poweredBy: "AIDEN",
    description:
      "Connect enterprise AI foundations with AI-enabled Quality Engineering adoption and measurable use-case prioritisation.",
    points: [
      "Enterprise AI readiness",
      "Responsible AI governance",
      "AI-enabled QE opportunities",
      "Adoption roadmap and value case"
    ],
    href: "/aiden.html",
    cta: "Launch AI Readiness Assessment ->"
  },
  {
    className: "card auto",
    domain: "Automation Engineering",
    title: "Evaluate automation capability and modernisation priorities.",
    poweredBy: "CRAFT",
    description:
      "Use rapid factual inputs, evidence and contextual interpretation to assess automation engineering readiness.",
    points: [
      "Rapid readiness scan",
      "Evidence-led inference",
      "Context-aware follow-up",
      "Executive scorecard and roadmap"
    ],
    href: "/craft.html",
    cta: "Launch Automation Assessment ->"
  }
];

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
            <span>Executive Advisory Portal</span>
          </div>
        </div>
        <div className="nav-right">
          <span className="status">Executive Edition</span>
          <a className="btn" href="#assessments">
            Explore Assessments
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">Feuji Enterprise Advisory</div>
            <h1 id="hero-title">
              Enterprise transformation starts with <span>understanding.</span>
            </h1>
            <p>
              Assess current capabilities, interpret evidence and build a
              transformation roadmap through Feuji's domain-specific consulting
              accelerators.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#assessments">
                {"Start Your Transformation Journey ->"}
              </a>
              <a className="btn" href="#profile">
                Create Organisation Profile
              </a>
            </div>
            <div className="proof">
              <div>
                <b>3</b>
                <span>Executive consulting accelerators</span>
              </div>
              <div>
                <b>44+</b>
                <span>Readiness and maturity dimensions</span>
              </div>
              <div>
                <b>1</b>
                <span>Unified advisory experience</span>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="panel">
              <div className="eyebrow panel-eyebrow">Advisory engagement flow</div>
              <h3>From current state to transformation decisions.</h3>
              <p>
                A structured consulting experience for discovery workshops,
                executive conversations and transformation planning.
              </p>
              <div className="steps">
                {["Understand enterprise context", "Assess maturity and readiness", "Prioritise gaps and opportunities", "Build the transformation roadmap"].map((step, index) => (
                  <div className="step" key={step}>
                    <i>{index + 1}</i>
                    <b>{step}</b>
                    <span>{["Discovery", "Evidence", "Insights", "Action"][index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="assessments">
          <div className="container">
            <div className="kicker">Start with the business question</div>
            <div className="title">What would you like to assess today?</div>
            <p className="desc">
              The capability comes first. Each assessment is powered by a Feuji
              consulting accelerator designed for that transformation domain.
            </p>
            <div className="assess-layout">
              <aside className="intro">
                <div className="kicker intro-kicker">Executive advisory approach</div>
                <h3>
                  Select the domain that best matches the customer's
                  transformation priority.
                </h3>
                <p>
                  Each accelerator can be used independently in workshops,
                  assessment engagements, proposal conversations or executive
                  discovery sessions.
                </p>
                <div className="quote">
                  "Feuji's consulting methodology digitised - not another software
                  catalogue."
                  <span>FUSION design principle</span>
                </div>
              </aside>
              <div className="cards">
                {assessments.map((assessment) => (
                  <article className={assessment.className} key={assessment.poweredBy}>
                    <div className="domain">{assessment.domain}</div>
                    <h3>{assessment.title}</h3>
                    <div className="powered">
                      Powered by <b>{assessment.poweredBy}</b>
                    </div>
                    <p>{assessment.description}</p>
                    <ul>
                      {assessment.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <a
                      className="btn launch"
                      href={assessment.href}
                      onClick={() => remember(assessment.poweredBy)}
                    >
                      {assessment.cta}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="profile">
          <div className="container">
            <div className="kicker">Future-ready shared context</div>
            <div className="title">Create a lightweight organisation profile.</div>
            <p className="desc">
              This release stores a common profile locally in the browser and
              prepares the platform for future shared data across accelerators.
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
                    onChange={(event) =>
                      updateProfile("industry", event.target.value)
                    }
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
                    onChange={(event) =>
                      updateProfile("region", event.target.value)
                    }
                  />
                </label>
                <label className="field">
                  <span>Assessment owner</span>
                  <input
                    value={profile.owner}
                    placeholder="Consultant or sponsor"
                    onChange={(event) => updateProfile("owner", event.target.value)}
                  />
                </label>
                <label className="field">
                  <span>Assessment date</span>
                  <input
                    type="date"
                    value={profile.date}
                    onChange={(event) => updateProfile("date", event.target.value)}
                  />
                </label>
              </div>
              <div className="profile-foot">
                <p>
                  The shared profile is stored only in the local browser. The
                  current standalone accelerators retain their own organisation
                  fields and do not automatically consume this information yet.
                </p>
                <button className="btn primary" type="button" onClick={saveProfile}>
                  Save Organisation Profile
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="kicker">A consistent consulting journey</div>
            <div className="title">
              Designed for advisory conversations - not tool demonstrations.
            </div>
            <p className="desc">
              FUSION provides a repeatable path while preserving the depth of
              each individual accelerator.
            </p>
            <div className="journey">
              {[
                ["01", "Discover", "Establish business context, current state and ambition."],
                ["02", "Assess", "Measure maturity and readiness through domain models."],
                ["03", "Validate", "Combine evidence, scoring and consultant judgement."],
                ["04", "Transform", "Convert findings into priorities, value and roadmaps."]
              ].map(([number, heading, copy]) => (
                <div key={number}>
                  <span>{number}</span>
                  <h4>{heading}</h4>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vision">
          <div className="container">
            <div className="kicker">Platform evolution</div>
            <div className="title">
              Built to grow into an enterprise advisory ecosystem.
            </div>
            <p className="desc">
              FUSION v2 establishes a distinct executive advisory identity while
              retaining the current browser-based architecture.
            </p>
            <div className="vision-grid">
              <div className="vision-main">
                <h3>One advisory experience. Multiple transformation domains.</h3>
                <p>
                  The platform can evolve from a unified portal into a shared
                  workspace with integrated intelligence and executive reporting.
                </p>
                <div className="roadmap">
                  <div>
                    <b>FUSION v2</b>
                    <span>Executive portal and shared profile</span>
                  </div>
                  <div>
                    <b>Future release</b>
                    <span>Shared data and cross-accelerator analytics</span>
                  </div>
                  <div>
                    <b>Enterprise edition</b>
                    <span>Consolidated reporting and AI-backed advisory</span>
                  </div>
                </div>
              </div>
              <div className="future">
                <div className="kicker">Expansion opportunities</div>
                <h3>Future accelerators</h3>
                <div className="future-list">
                  {[
                    "DevOps Readiness",
                    "Cloud Modernisation",
                    "Platform Engineering",
                    "Data & Analytics",
                    "DevSecOps",
                    "Product Engineering",
                    "Delivery Excellence",
                    "Enterprise Architecture"
                  ].map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot">
          <div>
            <b>Feuji FUSION</b>
            <br />
            <span>Executive Advisory Portal - Enterprise Transformation Accelerators</span>
          </div>
          <span>Executive Edition 2026</span>
        </div>
      </footer>
      <div className={`toast${toast ? " show" : ""}`}>{toast}</div>
    </>
  );
}
