import { useEffect, useRef, useState } from "react"
import AboutMe from "./AboutMe"

type IconName = "arrow" | "download" | "pin" | "drop" | "school" | "chart" | "check" | "expand" | "file" | "close" | "menu" | "heart" | "shield"
function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    drop: <path d="M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12Z" />,
    school: (
      <>
        <path d="m3 10 9-6 9 6v11H3ZM9 21v-7h6v7M8 10h.01M16 10h.01M12 2v2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v18h17M8 16v-5m5 5V7m5 9v-8" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
    file: (
      <>
        <path d="M14 2H5v20h14V7ZM14 2v5h5M8 12h8m-8 4h8" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    heart: (
      <path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-4 4 0 9 8 15 8-6 12-11 8-15Z" />
    ),
    shield: (
      <>
        <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const schools = [
  {
    name: "Dzidzai",
    boreholes: 1,
    stations: 5,
    access: "Fully accessible",
    x: 188,
    y: 140,
  },
  {
    name: "Chinembiri",
    boreholes: 3,
    stations: 6,
    access: "Fully accessible",
    x: 344,
    y: 109,
  },
  {
    name: "Fungisai",
    boreholes: 3,
    stations: 8,
    access: "Not accessible",
    x: 251,
    y: 234,
  },
  {
    name: "Farai",
    boreholes: 1,
    stations: 4,
    access: "Fully accessible",
    x: 379,
    y: 292,
  },
  {
    name: "Tamuka",
    boreholes: 2,
    stations: 5,
    access: "Partially accessible",
    x: 196,
    y: 332,
  },
]
const certificates = [
  {
    title: "Child Safeguarding Training",
    file: "child-safeguarding",
    id: "2844733654SD",
    label: "CHILD-CENTRED PRACTICE",
    reflection:
      "A commitment to putting children’s safety first. In fieldwork, this means respectful engagement, responsible handling of information, and safeguarding every learner.",
  },
  {
    title: "Ethics and Integrity at UNICEF",
    file: "ethics-integrity",
    id: "0969832236SD",
    label: "PROFESSIONAL INTEGRITY",
    reflection:
      "Ethical practice is the foundation of trustworthy data. I aim to be transparent about limitations, protect sensitive information, and report findings honestly.",
  },
  {
    title: "Prevention of Sexual Exploitation and Abuse",
    file: "psea",
    id: "2926275390SD",
    label: "ACCOUNTABILITY & RESPECT",
    reflection:
      "A reminder that service must be grounded in dignity and accountability. I am committed to respectful community engagement and safe, inclusive working environments.",
  },
]
const plans = [
  {
    day: "30",
    title: "Learn & map",
    subtitle: "Build the foundation",
    icon: "school" as IconName,
    tasks: [
      "Review UNICEF WASH strategy, JMP indicators and the Zimbabwe Country Programme.",
      "Validate the five-school pilot and develop a master Kobo form.",
      "Scope GPS mapping of 100+ schools with district stakeholders.",
      "Meet the District Schools Inspector and School Health Coordinator.",
    ],
    deliverable: "Master Kobo form · Dashboard draft · Stakeholder map",
  },
  {
    day: "60",
    title: "Analyze & engage",
    subtitle: "Listen, then prioritize",
    icon: "chart" as IconName,
    tasks: [
      "Analyze borehole functionality, handwashing provision and accessibility gaps.",
      "Visit priority schools, including Fungisai and Farai.",
      "Engage headmasters, SDCs and learners with disabilities.",
      "Aim to train 20 teachers and assess low-cost, inclusive solutions.",
    ],
    deliverable: "Priority-school report · Training summary · Field evidence",
  },
  {
    day: "90",
    title: "Deliver & hand over",
    subtitle: "Leave a usable system",
    icon: "check" as IconName,
    tasks: [
      "Present findings to the WASH team and education stakeholders.",
      "Deliver a dashboard with infrastructure and accessibility flags.",
      "Propose a costed intervention plan for 10 priority schools.",
      "Hand over SOPs, data files and a user guide; document verified outcomes.",
    ],
    deliverable: "Final WASH report · Dashboard · Handover toolkit",
  },
]

function SchoolMap() {
  const [selected, setSelected] = useState(2)
  return (
    <div className="map-wrap">
      <div className="map-topline">
        <span>
          <span className="live-dot" /> THE FIVE-SCHOOL PILOT
        </span>
        <span>CHITUNGWIZA, ZW</span>
      </div>
      <svg
        className="school-map"
        viewBox="0 0 540 430"
        role="img"
        aria-label="Illustrative map of five surveyed schools in Chitungwiza"
      >
        <defs>
          <pattern
            id="grid"
            width="34"
            height="34"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M34 0H0V34"
              fill="none"
              stroke="#c5dbd2"
              strokeWidth=".6"
            />
          </pattern>
        </defs>
        <rect width="540" height="430" fill="url(#grid)" />
        <g fill="#dce8df" stroke="#cfddd2" strokeWidth="1">
          <path d="m64 100 74-36 81 18 24 55-35 58-78-1-48-39Z" />
          <path d="m298 48 99 16 46 67-39 65-83-23-33-54Z" />
          <path d="m99 266 68-46 66 36 3 84-76 43-58-27Z" />
          <path d="m290 237 76-15 84 55-1 68-109 33-61-58Z" />
        </g>
        <path
          d="M-10 351C102 326 96 220 208 210S335 169 358 93 451 30 550 18"
          fill="none"
          stroke="#bed9d6"
          strokeWidth="19"
        />
        <g fill="none" stroke="#fbfcf7" strokeWidth="9">
          <path d="m-20 152 165 37 127-31 137 37 150-59M90-20l48 133 80 128 11 209M262-20l-9 91 40 101 107 143 25 135M-10 324l129-17 175-17 142-43 117 39" />
          <path
            d="m-20 152 165 37 127-31 137 37 150-59M90-20l48 133 80 128 11 209M262-20l-9 91 40 101 107 143 25 135M-10 324l129-17 175-17 142-43 117 39"
            stroke="#cbd7c9"
            strokeWidth="1"
          />
        </g>
        <g
          fontSize="10"
          fill="#7c9585"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          <text x="60" y="53">
            ST MARY'S
          </text>
          <text x="349" y="397">
            CHITUNGWIZA
          </text>
          <text x="429" y="90">
            ZENGEZA
          </text>
        </g>
        {schools.map((s, i) => (
          <g
            key={s.name}
            className="map-marker"
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setSelected(i)
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${s.name} school`}
            aria-pressed={selected === i}
          >
            {selected === i && (
              <circle cx={s.x} cy={s.y} r="23" fill="#25816d" opacity=".12" />
            )}
            <circle
              cx={s.x}
              cy={s.y}
              r={selected === i ? 12 : 8}
              fill={selected === i ? "#17664f" : "#fff"}
              stroke="#17664f"
              strokeWidth="2"
            />
            <circle
              cx={s.x}
              cy={s.y}
              r="3"
              fill={selected === i ? "#fff" : "#17664f"}
            />
            <text
              x={s.x + 17}
              y={s.y + 4}
              fontSize="11"
              fill="#345448"
              fontWeight="600"
            >
              {s.name}
            </text>
          </g>
        ))}
      </svg>
      <div className="map-school-card">
        <span className="map-card-icon">
          <Icon name="school" size={23} />
        </span>
        <div>
          <strong>{schools[selected].name} Primary</strong>
          <span>
            {schools[selected].stations} handwashing stations ·{" "}
            {schools[selected].boreholes} boreholes
          </span>
        </div>
        <span
          className={`access-dot ${selected === 2 ? "amber" : ""}`}
          title={schools[selected].access}
        />
      </div>
      <div className="map-bottom">
        <span>
          <Icon name="pin" size={13} /> −18.02, 31.09
        </span>
        <span>Illustrative locations · Click a school</span>
      </div>
      <div className="map-note">
        <span className="note-icon">
          <Icon name="heart" size={18} />
        </span>
        <div>
          <strong>Every data point is a learner.</strong>
          <span>Making the invisible gaps visible.</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "collection">(
    "dashboard",
  )
  const [modal, setModal] = useState<{
    src: string
    title: string
  } | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [printPlan, setPrintPlan] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (modal) dialog.current?.showModal()
  }, [modal])
  useEffect(() => {
    const reset = () => setPrintPlan(false)
    window.addEventListener("afterprint", reset)
    return () => window.removeEventListener("afterprint", reset)
  }, [])
  const print = (plan = false) => {
    setPrintPlan(plan)
    setTimeout(() => window.print(), 100)
  }
  const downloadCSV = () => {
    const csv =
      "School,Main water source,Functional boreholes,Functional handwashing stations,Toilet accessibility\n" +
      schools
        .map(
          (s) =>
            `${s.name} Primary,Borehole,${s.boreholes},${s.stations},${s.access}`,
        )
        .join("\n")
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    )
    const a = document.createElement("a")
    a.href = url
    a.download = "Chitungwiza-pilot-transcribed.csv"
    a.click()
    URL.revokeObjectURL(url)
  }
  const nav = [
    ["About me", "about"],
    ["The project", "project"],
    ["My approach", "approach"],
    ["30–60–90 plan", "plan"],
    ["Certificates", "certificates"],
  ]
  return (
    <div className={printPlan ? "app print-plan" : "app"}>
      <header className="site-header">
        <a href="#" className="brand" aria-label="Simbarashe Dikito home">
          <span className="brand-monogram">
            sd<span>.</span>
          </span>
          <span className="brand-name">
            SIMBARASHE DIKITO<span>WASH & DATA PORTFOLIO</span>
          </span>
        </a>
        <nav
          className={menuOpen ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#downloads" className="header-cta">
          Portfolio resources <Icon name="arrow" size={16} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> PURPOSE-DRIVEN DATA. CHILD-CENTRED
              IMPACT.
            </div>
            <h1>
              Better data.
              <br />
              Better WASH.
              <br />
              <em>Brighter futures.</em>
            </h1>
            <p className="hero-description">
              Turning community data into clearer decisions for safe, inclusive
              water, sanitation and hygiene in Zimbabwe’s schools.
            </p>
            <div className="profile">
              <img
                className="avatar profile-photo"
                src={`assets/simbarashe-portrait.jpg`}
                alt="Simbarashe Dikito"
              />
              <div>
                <strong>Simbarashe Dikito</strong>
                <span>
                  UZ Computer Science graduate <i /> Chitungwiza
                </span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#project" className="button primary">
                Explore my work <Icon name="arrow" size={18} />
              </a>
              <button className="button text-button" onClick={() => print()}>
                <Icon name="download" size={17} /> Save portfolio as PDF
              </button>
            </div>
            <div className="hero-footnote">
              <Icon name="pin" size={14} /> Grounded in Chitungwiza. Guided by
              every child’s dignity.
            </div>
          </div>
          <SchoolMap />
        </section>
        <section
          className="stats container"
          aria-label="Pilot survey key figures"
        >
          {[
            [
              "school",
              "5",
              "Primary schools surveyed",
              "One community. Five perspectives.",
            ],
            [
              "drop",
              "10",
              "Functional boreholes",
              "A shared reliance on groundwater.",
            ],
            [
              "chart",
              "28",
              "Handwashing stations",
              "5.6 stations per school, on average.",
            ],
            [
              "shield",
              "60%",
              "Fully accessible toilets",
              "Inclusion gaps that deserve attention.",
            ],
          ].map(([icon, value, label, note]) => (
            <div className="stat" key={label}>
              <div className="stat-top">
                <span>{label}</span>
                <Icon name={icon as IconName} size={19} />
              </div>
              <strong>{value}</strong>
              <p>{note}</p>
            </div>
          ))}
        </section>
        <AboutMe />
        <section id="project" className="section container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / THE FEATURED PROJECT</div>
              <h2>From fieldwork to actionable insight.</h2>
            </div>
            <span className="pill">
              <span className="live-dot" /> 5-school pilot · 2024 data
            </span>
          </div>
          <p className="section-intro">
            A WASH infrastructure assessment in Chitungwiza — connecting
            GPS-verified data collection with visual analysis to identify where
            support matters most.
          </p>
          <div
            className="evidence-tabs"
            role="tablist"
            aria-label="Project evidence"
          >
            <button
              role="tab"
              aria-selected={activeTab === "dashboard"}
              aria-controls="evidence-panel"
              onClick={() => setActiveTab("dashboard")}
              className={activeTab === "dashboard" ? "active" : ""}
            >
              <Icon name="chart" size={17} /> Power BI dashboard
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "collection"}
              aria-controls="evidence-panel"
              onClick={() => setActiveTab("collection")}
              className={activeTab === "collection" ? "active" : ""}
            >
              <Icon name="file" size={17} /> KoboToolbox field data
            </button>
            <span>THE EVIDENCE BEHIND THE NUMBERS</span>
          </div>
          <div id="evidence-panel" role="tabpanel" className="evidence-grid">
            <div className="evidence-visual">
              <div className="visual-top">
                <span
                  className={`tool-label ${
                    activeTab === "dashboard" ? "powerbi" : ""
                  }`}
                >
                  {activeTab === "dashboard" ? "POWER BI" : "KOBOTOOLBOX"}
                </span>
                <button
                  onClick={() =>
                    setModal({
                      src: `assets/${
                        activeTab === "dashboard"
                          ? "power-bi-dashboard.jpg"
                          : "kobo-survey.png"
                      }`,
                      title:
                        activeTab === "dashboard"
                          ? "Original Power BI dashboard"
                          : "Original KoboToolbox survey screenshot",
                    })
                  }
                >
                  <Icon name="expand" size={16} /> View original
                </button>
              </div>
              <div className={`screenshot-frame ${activeTab}`}>
                <img
                  src={`assets/${
                    activeTab === "dashboard"
                      ? "power-bi-dashboard.jpg"
                      : "kobo-survey.png"
                  }`}
                  alt={
                    activeTab === "dashboard"
                      ? "Power BI WASH dashboard showing school infrastructure, accessibility and locations"
                      : "KoboToolbox table with the five schools, GPS locations, borehole counts and toilet accessibility"
                  }
                />
              </div>
              <div className="visual-footer">
                <span>
                  <Icon name="check" size={14} /> Original project evidence
                </span>
                <span>
                  {activeTab === "dashboard"
                    ? "Kobo data → Power BI → Decisions"
                    : "Field survey → Quality checks → CSV"}
                </span>
              </div>
            </div>
            <div className="evidence-notes">
              <div className="eyebrow">WHAT THE DATA TELLS US</div>
              <h3>
                {activeTab === "dashboard"
                  ? "Not just a dashboard.\nA direction for action."
                  : "Good decisions start\nwith good field data."}
              </h3>
              {(activeTab === "dashboard"
                ? [
                    [
                      "01",
                      "The big picture",
                      "10 functional boreholes and 28 handwashing stations across five schools, calculated from the Kobo dataset.",
                    ],
                    [
                      "02",
                      "An inclusion gap",
                      "Fungisai has the most handwashing stations (8), but no accessible toilets — a priority for inclusive intervention.",
                    ],
                    [
                      "03",
                      "Place matters",
                      "School GPS coordinates around −18.02, 31.09 connect infrastructure needs to real locations.",
                    ],
                  ]
                : [
                    [
                      "01",
                      "Five schools, real locations",
                      "Five primary schools surveyed in Chitungwiza, with GPS captured to support location verification.",
                    ],
                    [
                      "02",
                      "A shared water-source risk",
                      "All five schools depend on boreholes as their main water source — a key WASH indicator and resilience concern.",
                    ],
                    [
                      "03",
                      "Inclusion is part of the form",
                      "Toilet accessibility is tracked alongside infrastructure, supporting UNICEF-aligned disability inclusion priorities.",
                    ],
                  ]
              ).map(([num, title, body]) => (
                <div className="insight" key={num}>
                  <span className="insight-number">{num}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="finding">
            <span className="finding-icon">
              <Icon name="shield" size={23} />
            </span>
            <div>
              <strong>The insight that stays with me</strong>
              <p>
                More infrastructure doesn’t always mean more inclusion. Two of
                five schools lack fully accessible toilets. Counting facilities
                is only the beginning — understanding who can use them is what
                matters.
              </p>
            </div>
            <span className="finding-tag">DATA WITH PURPOSE</span>
          </div>
          <details className="data-details">
            <summary>
              Explore the five-school dataset{" "}
              <span>View school-level figures +</span>
            </summary>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>School</th>
                    <th>Boreholes</th>
                    <th>Handwashing stations</th>
                    <th>Toilet accessibility</th>
                  </tr>
                </thead>
                <tbody>
                  {schools.map((s) => (
                    <tr key={s.name}>
                      <td>{s.name} Primary</td>
                      <td>{s.boreholes}</td>
                      <td>{s.stations}</td>
                      <td>
                        <span
                          className={`table-status ${
                            s.access !== "Fully accessible" ? "attention" : ""
                          }`}
                        >
                          {s.access}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="data-caveat">
              Transcribed from the supplied screenshot. This is a small
              descriptive pilot, not a representative district assessment.
              Facility counts alone do not establish JMP service levels.
            </p>
          </details>
        </section>
        <section id="approach" className="approach-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">02 / MY APPROACH</div>
                <h2>Rigour in the process. People at the centre.</h2>
              </div>
            </div>
            <div className="approach-grid">
              {[
                [
                  "01",
                  "Collect with care",
                  "KoboToolbox",
                  "Capture consistent, GPS-linked school data. Include accessibility questions from the start, not as an afterthought.",
                ],
                [
                  "02",
                  "Make the data useful",
                  "Power BI",
                  "Check the numbers, visualize patterns and connect water, hygiene and inclusion indicators in one clear view.",
                ],
                [
                  "03",
                  "Turn insight into action",
                  "Community-led priorities",
                  "Look beyond totals. Prioritize barriers that affect vulnerable learners and listen to communities before proposing solutions.",
                ],
              ].map(([num, title, tool, description]) => (
                <div className="approach-card" key={num}>
                  <span className="approach-number">
                    {num}
                    <Icon name="arrow" size={22} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="approach-tool">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="plan" className="section container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">03 / LOOKING AHEAD</div>
              <h2>A practical plan for meaningful contribution.</h2>
            </div>
            <button
              className="button outline small"
              onClick={() => print(true)}
            >
              <Icon name="download" size={16} /> Save plan as PDF
            </button>
          </div>
          <p className="section-intro">
            My proposed first 90 days as a WASH intern. A starting point to
            shape with the team — grounded in the pilot, guided by local
            priorities.
          </p>
          <div className="plan-grid">
            {plans.map((p) => (
              <article className="plan-card" key={p.day}>
                <div className="plan-day">
                  <span>
                    FIRST <strong>{p.day}</strong> DAYS
                  </span>
                  <Icon name={p.icon} size={24} />
                </div>
                <h3>{p.title}</h3>
                <p className="plan-subtitle">{p.subtitle}</p>
                <ul>
                  {p.tasks.map((t) => (
                    <li key={t}>
                      <Icon name="check" size={13} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="deliverable">
                  <span>WHAT I’LL DELIVER</span>
                  <p>{p.deliverable}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="plan-note">
            <Icon name="pin" size={16} />
            <span>
              Built from the lessons of a five-school pilot in Chitungwiza.
              Expansion and targets are proposed, subject to access, resources
              and team approval.
            </span>
          </div>
        </section>
        <section id="certificates" className="certificate-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">04 / LEARNING WITH INTENTION</div>
                <h2>Skills matter. So do the values behind them.</h2>
              </div>
              <span className="pill">
                <Icon name="check" size={14} /> UNICEF Agora · 3 certificates
              </span>
            </div>
            <p className="section-intro">
              A foundation in safeguarding, integrity and accountability — and a
              commitment to carry these principles into every part of my work.
            </p>
            <div className="certificate-grid">
              {certificates.map((c) => (
                <article className="certificate-card" key={c.file}>
                  <button
                    className="certificate-image"
                    onClick={() =>
                      setModal({ src: `assets/${c.file}.png`, title: c.title })
                    }
                    aria-label={`Enlarge ${c.title} certificate`}
                  >
                    <img
                      src={`assets/${c.file}.png`}
                      alt={`${c.title} certificate awarded to Simbarashe Dikito`}
                    />
                    <span>
                      <Icon name="expand" size={17} /> View certificate
                    </span>
                  </button>
                  <div className="certificate-body">
                    <div className="eyebrow">{c.label}</div>
                    <h3>{c.title}</h3>
                    <div className="certificate-meta">
                      UNICEF via Agora · Date shown: 07/10/26
                    </div>
                    <div className="reflection">
                      <strong>How I’ll put it into practice</strong>
                      <p>{c.reflection}</p>
                    </div>
                    <div className="certificate-bottom">
                      <span>ID: {c.id}</span>
                      <a href={`assets/${c.file}.pdf`} download>
                        <Icon name="download" size={15} /> PDF
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="certificate-disclaimer">
              Certificate names, dates and credential IDs are reproduced from
              the uploaded originals. Reflections describe my intended
              application of the learning.
            </p>
          </div>
        </section>
        <section className="gratitude container">
          <div className="gratitude-label">
            <Icon name="heart" size={25} />
            <div className="eyebrow">GRATITUDE & COMMITMENT</div>
          </div>
          <div>
            <h2>
              Data is not just numbers.
              <br />
              <em>It is the voice of learners.</em>
            </h2>
            <p>
              I am deeply grateful to UNICEF for making high-quality learning
              accessible through Agora, and for championing safe, inclusive WASH
              environments for children in Zimbabwe.
            </p>
            <p>
              As a University of Zimbabwe graduate, I have worked around
              institutional data-access constraints to build this small,
              community-grounded portfolio. The learners at schools like
              Fungisai remind me why the work matters: handwashing stations
              alone are not enough if a child cannot access a toilet.
            </p>
            <p>
              This is my small contribution to a future where every child can
              learn in safety and dignity. Thank you for the opportunity to
              learn — and the inspiration to serve.
            </p>
            <div className="signature">
              Simbarashe Dikito
              <span>UNIVERSITY OF ZIMBABWE · ASPIRING WASH DATA ANALYST</span>
            </div>
          </div>
        </section>
        <section id="downloads" className="section resources container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">05 / TAKE A CLOSER LOOK</div>
              <h2>The work, ready to explore.</h2>
            </div>
          </div>
          <div className="resources-grid">
            <div className="downloads-card">
              <h3>Portfolio resources</h3>
              <p>Evidence you can review, share and keep.</p>
              <button onClick={downloadCSV} className="resource-row">
                <span className="resource-icon">
                  <Icon name="file" />
                </span>
                <span>
                  <strong>Five-school pilot dataset</strong>
                  <small>CSV · Transcribed from supplied evidence</small>
                </span>
                <Icon name="download" size={18} />
              </button>
              <button onClick={() => print(true)} className="resource-row">
                <span className="resource-icon">
                  <Icon name="file" />
                </span>
                <span>
                  <strong>30–60–90 day plan</strong>
                  <small>Print or save as PDF</small>
                </span>
                <Icon name="download" size={18} />
              </button>
              <a
                href={`assets/power-bi-dashboard.jpg`}
                download
                className="resource-row"
              >
                <span className="resource-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Power BI dashboard screenshot</strong>
                  <small>JPG · Original project evidence</small>
                </span>
                <Icon name="download" size={18} />
              </a>
              <div className="resource-row unavailable">
                <span className="resource-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Power BI project file</strong>
                  <small>Original .pbix not yet supplied</small>
                </span>
                <span className="pending">Pending</span>
              </div>
            </div>
            <div className="reference-card">
              <span className="reference-symbol">
                <Icon name="file" size={32} />
              </span>
              <span className="pill">COMING SOON</span>
              <h3>A reference, with context.</h3>
              <p>
                A reference letter will be added here when available, providing
                an additional perspective on my work and commitment.
              </p>
              <span className="reference-status">
                <span className="status-ring" /> Reference letter awaiting
                upload
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="container">
        <a className="brand" href="#">
          <span className="brand-monogram">
            sd<span>.</span>
          </span>
          <span className="footer-name">
            Simbarashe Dikito<span>Data with purpose. WASH with dignity.</span>
          </span>
        </a>
        <p>
          Independent application portfolio.
          <br />
          Not an official UNICEF website or endorsement.
        </p>
        <a href="#" className="back-top">
          Back to top <span>↑</span>
        </a>
      </footer>
      {modal && (
        <dialog
          ref={dialog}
          className="image-dialog"
          onClose={() => setModal(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) dialog.current?.close()
          }}
        >
          <div className="dialog-heading">
            <h3>{modal.title}</h3>
            <button
              onClick={() => dialog.current?.close()}
              aria-label="Close preview"
            >
              <Icon name="close" />
            </button>
          </div>
          <img src={modal.src} alt={modal.title} />
          <a href={modal.src} download className="button outline small">
            <Icon name="download" size={16} /> Download original image
          </a>
        </dialog>
      )}
    </div>
  )
}
export default App
