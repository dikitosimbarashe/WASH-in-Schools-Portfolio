import { useState } from "react"

const stories = [
  {
    title: "Why WASH matters to me",
    text: "Growing up in a high-density community, I witnessed how unhygienic conditions fuel cholera outbreaks and how COVID-19 exposed fragile handwashing infrastructure. Seeing shared, non-accessible toilets and a single borehole serving more than 400 children motivated me to apply my IT skills to a humanitarian purpose: protecting learners’ health and dignity.",
  },
  {
    title: "The lesson beyond the dashboard",
    text: "During my five-school pilot in Chitungwiza, some school authorities were understandably cautious about data use and my motives. I built trust through transparency, introductory letters, consent, and explaining that the work was for learning and advocacy, not commercial gain. It taught me that community engagement is just as important as technical analysis.",
  },
  {
    title: "My first end-to-end achievement",
    text: "I designed and deployed a KoboToolbox form, surveyed five primary schools, mapped 10 boreholes and 28 handwashing stations, and built my first Power BI dashboard with inclusion indicators. Identifying Fungisai as a priority for disability-accessible intervention was the moment the numbers became a clear direction for action.",
  },
  {
    title: "Resilience, and life beyond work",
    text: "UZ OneDrive licence restrictions pushed me to build offline-first workflows, with locally verifiable CSV and Power BI deliverables. Beyond work, I volunteer in community programmes, am active in church, enjoy soccer and FIFA, and read about technology for development. I want to bring both resourcefulness and a spirit of service to a WASH team.",
  },
]

export default function AboutMe() {
  const [portrait, setPortrait] = useState<"professional" | "field">(
    "professional",
  )
  return (
    <section id="about" className="about-section container">
      <div className="about-grid">
        <aside className="about-profile">
          <div className="about-photo">
            <img
              src={`assets/simbarashe-${
                portrait === "professional" ? "portrait" : "field"
              }.jpg`}
              alt={
                portrait === "professional"
                  ? "Simbarashe Dikito in a grey blazer"
                  : "Simbarashe Dikito wearing a high-visibility vest"
              }
              loading="lazy"
            />
            <div className="portrait-caption">
              <span>SIMBARASHE DIKITO</span>
              <strong>
                Rooted in community.
                <br />
                Ready to contribute.
              </strong>
            </div>
          </div>
          <div
            className="portrait-toggle"
            role="group"
            aria-label="Choose portrait"
          >
            <button
              aria-pressed={portrait === "professional"}
              onClick={() => setPortrait("professional")}
            >
              Professional
            </button>
            <button
              aria-pressed={portrait === "field"}
              onClick={() => setPortrait("field")}
            >
              Field-ready
            </button>
          </div>
          <div className="about-contact">
            <span className="eyebrow">LET’S CONNECT</span>
            <a href="mailto:dikitosimbarashe@gmail.com">
              dikitosimbarashe@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/dikitosimbarashe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub / dikitosimbarashe <span aria-hidden="true">↗</span>
            </a>
            <p>Chitungwiza, Zimbabwe</p>
          </div>
        </aside>
        <div className="about-content">
          <div className="eyebrow">THE PERSON BEHIND THE DATA</div>
          <h2>
            A technologist by training.
            <br />
            <em>A community advocate at heart.</em>
          </h2>
          <p className="about-lead">
            I’m Simbarashe Dikito, a BSc Computer Science graduate from the
            University of Zimbabwe, based in Chitungwiza.
          </p>
          <p className="about-copy">
            In my community, I’ve seen how poor sanitation and fragile
            handwashing infrastructure put children’s health at risk. That
            experience gives my technical work a purpose: turning field
            realities into data that helps protect every learner’s health and
            dignity.
          </p>
          <p className="about-copy">
            I combine IT skills with community-grounded data collection and
            analysis. My five-school pilot taught me that a useful dashboard
            begins with trust, listening and consent — and ends with a clearer
            understanding of who is being left behind.
          </p>
          <div className="about-skills">
            <h3>What I bring</h3>
            <div className="skill-tags">
              {[
                "KoboToolbox & XLSForm",
                "Power BI & DAX",
                "QGIS & GIS mapping",
                "Advanced Excel",
                "Python data cleaning",
                "Database & IT support",
                "Offline-first workflows",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-stories">
            {stories.map((story) => (
              <details key={story.title}>
                <summary>
                  {story.title}
                  <span className="story-toggle" aria-hidden="true" />
                </summary>
                <p>{story.text}</p>
              </details>
            ))}
          </div>
          <div className="about-languages">
            <h3>Languages</h3>
            <div>
              {[
                ["Shona", "Native"],
                ["English", "Fluent"],
                ["French", "Working conversational"],
                ["Kiswahili", "Basic"],
              ].map(([language, level]) => (
                <span key={language}>
                  <strong>{language}</strong>
                  <small>{level}</small>
                </span>
              ))}
            </div>
          </div>
          <div className="about-goal">
            <span className="eyebrow">THE DIRECTION I’M WORKING TOWARD</span>
            <p>
              To become a WASH Data Analyst supporting UNICEF and partners in
              Zimbabwe toward safe, fully inclusive WASH in every school.
            </p>
          </div>
          <p className="about-thanks">
            Thank you, UNICEF, for making learning accessible through Agora —
            and inspiring me to see data as dignity.
          </p>
        </div>
      </div>
    </section>
  )
}
