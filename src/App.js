import { useEffect, useState } from "react";
import "./App.css";
import mihretImage from "./assets/mihret_new.jpg";
import {
  profile, news, visibleNews, publications,
  projects, industry, service, awards, skills,
} from "./data";

const THEME_KEY = "theme";

// Renders **bold** segments inside plain strings.
const Rich = ({ text }) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part));

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

const Bullets = ({ items }) => items.length === 0 ? null : (
  <ul className="bullets">
    {items.map((p, i) => (
      <li key={i}><Rich text={p} /></li>
    ))}
  </ul>
);

const Entry = ({ org, role, date, place, points }) => (
  <article className="entry">
    <div className="entry-head">
      <div>
        <h3>{org}</h3>
        {role && <p className="role">{role}</p>}
      </div>
      <p className="meta">{[date, place].filter(Boolean).join(" · ")}</p>
    </div>
    <Bullets items={points} />
  </article>
);

const Thumb = ({ src, fit, alt }) => (
  <img className={`thumb${fit === "contain" ? " contain" : ""}`} src={src} alt={alt} loading="lazy" />
);

const navItems = [
  ["about", "About"], ["news", "News"], ["publications", "Publications"],
  ["projects", "Projects"], ["experience", "Experience"],
  ["teaching", "Teaching"],
];

function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage unavailable */ }
  }, [theme]);

  const [showAllNews, setShowAllNews] = useState(false);
  const shownNews = showAllNews ? news : news.slice(0, visibleNews);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top">Mihret Agegnehu Bekele</a>
          <nav aria-label="Primary">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
            <a href={profile.cv} target="_blank" rel="noopener noreferrer">CV</a>
          </nav>
          <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title="Toggle theme">
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            )}
          </button>
        </div>
      </header>

      <main id="main" className="page">
        <div id="top" className="hero">
          <img src={mihretImage} alt="Mihret Agegnehu Bekele" className="portrait" />
          <div>
            <h1>{profile.name}</h1>
            <p className="tagline">{profile.tagline}</p>
            <p className="links">
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer">CV</a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>

        <Section id="about" title="About">
          <p className="prose">{profile.bio}</p>
        </Section>

        <Section id="news" title="News">
          <ul className="news">
            {shownNews.map((n, i) => (
              <li key={i}>
                <span className="date">{n.date}</span>
                <span><Rich text={n.text} /></span>
              </li>
            ))}
          </ul>
          {news.length > visibleNews && (
            <button className="show-all" onClick={() => setShowAllNews((v) => !v)} aria-expanded={showAllNews}>
              {showAllNews ? "Show less" : "Show all"}
            </button>
          )}
        </Section>

        <Section id="publications" title="Publications">
          <ol className="pubs">
            {publications.map((p) => (
              <li key={p.title}>
                <Thumb src={p.img} fit={p.fit} alt="" />
                <div>
                  <span className="venue">{p.venue} {p.year}</span>
                  <p className="pub-title">{p.title}</p>
                  <p className="authors">
                    {p.authors.map((a, i) => (
                      <span key={a}>
                        {a === "Mihret Agegnehu Bekele" ? <b>{a}</b> : a}
                        {i < p.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p className="meta">{p.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title}>
                <Thumb src={p.img} fit={p.fit} alt="" />
                <div>
                  <h3>{p.title}</h3>
                  {p.org && <p className="role">{p.org}</p>}
                  <p className="meta">{p.date}</p>
                  <ul className="bullets"><li><Rich text={p.point} /></li></ul>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Industry Experience">
          {industry.map((c) => (
            <div key={c.org} className="company">
              <h3 className="company-name">{c.org}</h3>
              {c.roles.map((r) => (
                <Entry key={r.role} org={r.role} date={r.date} place={r.place} points={r.points} />
              ))}
            </div>
          ))}
        </Section>

        <Section id="teaching" title="Teaching and Service">
          <ul className="plain">
            {service.map((t, i) => (
              <li key={i}>
                <b>{t.title}</b>, {t.role}<span className="meta"> · {t.date}</span>
                <p>{t.body}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="awards" title="Awards">
          <Bullets items={awards} />
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </footer>
    </>
  );
}

export default App;
