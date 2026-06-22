import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  translations,
  LINKS,
  ASSETS,
  CV_FILES,
  type Lang,
  type TabId,
  type ProjectItem,
} from './data'
import './App.css'

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
)

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.73V1.73C24 .77 23.19 0 22.22 0z" />
  </svg>
)

const MailIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
)

const FileIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8M8 17h5" />
  </svg>
)

const GlobeIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
)

const ExternalIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6M10 14 21 3" />
  </svg>
)

const CodeIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
)

const ArrowIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const CloseIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const CheckIcon = () => (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const GamepadIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
    <rect x="2" y="6" width="20" height="12" rx="4" />
  </svg>
)

const VideoIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8z" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </svg>
)

function ProjectCard({ p, onOpen, cta }: { p: ProjectItem; onOpen: () => void; cta: string }) {
  return (
    <button type="button" className="card card-clickable" onClick={onOpen}>
      <div className="card-cover">
        {p.cover ? <img src={p.cover} alt={p.title} /> : <div className="card-cover-empty" />}
        <span className="card-badge">{p.n}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{p.title}</h3>
        <p className="card-desc">{p.desc}</p>
        <div className="tech-row">
          {p.tech.map((tech) => (
            <span className="tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <span className="card-cta">
          {cta}
          <span className="card-cta-arrow">→</span>
        </span>
      </div>
    </button>
  )
}

const BriefcaseIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const GradCapIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
  </svg>
)

const ChevronIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

function CvDownload({ t }: { t: (typeof translations)[Lang] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div className="cv-menu" ref={ref}>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <FileIcon /> {t.contact.cvLabel} <ChevronIcon />
      </button>
      {open && (
        <div className="cv-menu-list" role="menu">
          <a href={CV_FILES.es} download role="menuitem" onClick={() => setOpen(false)}>
            {t.cv.es}
          </a>
          <a href={CV_FILES.en} download role="menuitem" onClick={() => setOpen(false)}>
            {t.cv.en}
          </a>
        </div>
      )}
    </div>
  )
}

function App({ lang }: { lang: Lang }) {
  const [tab, setTab] = useState<TabId>('home')
  const [op, setOp] = useState<ProjectItem | null>(null)
  const navigate = useNavigate()

  const t = translations[lang]
  const isES = lang === 'es'
  const year = new Date().getFullYear()
  const toggleLang = () => navigate(isES ? '/en' : '/es')

  useEffect(() => {
    if (op == null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOp(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [op])

  return (
    <div className="app">
      <div className="bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <nav className="nav">
        <div className="nav-brand">
          <div className="nav-logo">RJ</div>
          <span className="nav-name">Raúl Junquera</span>
        </div>

        <div className="nav-tabs">
          {t.tabs.map((tb) => (
            <button
              key={tb.id}
              className={tb.id === tab ? 'tab active' : 'tab'}
              onClick={() => setTab(tb.id)}
            >
              {tb.label}
            </button>
          ))}
        </div>

        <button className="lang-btn" onClick={toggleLang}>
          <GlobeIcon />
          {isES ? 'EN' : 'ES'}
        </button>
      </nav>

      <main>
        {tab === 'home' && (
          <section className="section section-home">
            <div className="hero-grid">
              <div>
                <div className="badge">
                  <span className="dot" />
                  {t.hero.available}
                </div>
                <div className="hero-greeting">{t.hero.greeting}</div>
                <h1 className="hero-name">{t.hero.name}</h1>
                <div className="hero-role">{t.hero.role}</div>
                <p className="hero-tagline">{t.hero.tagline}</p>
                <div className="hero-cta">
                  <button className="btn btn-primary" onClick={() => setTab('projects')}>
                    {t.hero.ctaProjects} <span className="btn-arrow">→</span>
                  </button>
                  <CvDownload t={t} />
                </div>
                <div className="hero-socials">
                  <a href={LINKS.github} aria-label="GitHub" className="social">
                    <GitHubIcon />
                  </a>
                  <a href={LINKS.linkedin} aria-label="LinkedIn" className="social">
                    <LinkedInIcon />
                  </a>
                  <a href={`mailto:${LINKS.email}`} aria-label="Email" className="social">
                    <MailIcon />
                  </a>
                </div>
              </div>

              <div className="avatar-wrap">
                <div className="avatar">
                  <div className="avatar-ring" />
                  <div className="avatar-frame">
                    <div className="avatar-photo">
                      <img
                        src={ASSETS.photo}
                      />
                    </div>
                  </div>
                  <div className="avatar-chip avatar-chip-1">
                    <span />
                    React
                  </div>
                  <div className="avatar-chip avatar-chip-2">
                    <span />
                    Flutter
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === 'about' && (
          <section className="section section-about">
            <div className="eyebrow">
              <span />
              {t.about.eyebrow}
            </div>
            <h2 className="h-section">{t.about.title}</h2>
            <div className="about-paras">
              {t.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="stats">
              {t.about.stats.map((stat, i) => (
                <div className="stat" key={i}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === 'projects' && (
          <section className="section section-projects">
            <div className="eyebrow">
              <span />
              {t.projects.eyebrow}
            </div>
            <h2 className="h-section">{t.projects.title}</h2>
            <p className="lead">{t.projects.subtitle}</p>
            <div className="cards">
              {t.projects.items.map((p) => (
                <ProjectCard
                  key={p.n}
                  p={p}
                  cta={t.projects.detailsCta}
                  onOpen={() => setOp(p)}
                />
              ))}
            </div>

            <div className="games-card">
              <div className="games-card-main">
                <span className="games-icon">
                  <GamepadIcon size={26} />
                </span>
                <div className="games-text">
                  <h3 className="games-title">{t.projects.games.title}</h3>
                  <p className="games-subtitle">{t.projects.games.subtitle}</p>
                </div>
              </div>
              <div className="games-links">
                <a href={LINKS.itch} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <GamepadIcon />
                  {t.projects.games.itchLabel}
                </a>
                <a href={LINKS.vimeo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <VideoIcon />
                  {t.projects.games.portfolioLabel}
                </a>
              </div>
            </div>

            <div className="cards games-grid">
              {t.projects.games.items.map((p) => (
                <ProjectCard
                  key={p.n}
                  p={p}
                  cta={t.projects.detailsCta}
                  onOpen={() => setOp(p)}
                />
              ))}
            </div>
          </section>
        )}

        {tab === 'skills' && (
          <section className="section section-skills">
            <div className="eyebrow">
              <span />
              {t.skills.eyebrow}
            </div>
            <h2 className="h-section">{t.skills.title}</h2>
            <p className="lead">{t.skills.subtitle}</p>
            <div className="skill-groups">
              {t.skills.groups.map((g) => (
                <div className="skill-group" key={g.title}>
                  <div className="skill-group-head">
                    <span />
                    <h3>{g.title}</h3>
                  </div>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === 'experience' && (
          <section className="section section-experience">
            <div className="eyebrow">
              <span />
              {t.experience.eyebrow}
            </div>
            <h2 className="h-section">{t.experience.title}</h2>

            <div className="xp-group-head">
              <span className="xp-icon xp-icon-work">
                <BriefcaseIcon />
              </span>
              <h3>{t.experience.workLabel}</h3>
            </div>
            <div className="timeline">
              {t.experience.work.map((ex, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-dot" />
                  <div className="tl-year">{ex.year}</div>
                  <div className="tl-role">{ex.role}</div>
                  <div className="tl-company">{ex.company}</div>
                  <div className="tl-desc">{ex.desc}</div>
                </div>
              ))}
            </div>

            <div className="xp-group-head xp-group-head-edu">
              <span className="xp-icon xp-icon-edu">
                <GradCapIcon />
              </span>
              <h3>{t.experience.eduLabel}</h3>
            </div>
            <div className="timeline timeline-edu">
              {t.experience.education.map((ed, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-dot tl-dot-edu" />
                  <div className="tl-year tl-year-edu">{ed.year}</div>
                  <div className="tl-role">{ed.role}</div>
                  <div className="tl-company">{ed.company}</div>
                  <div className="tl-desc">{ed.desc}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === 'contact' && (
          <section className="section section-contact">
            <div className="eyebrow">
              <span />
              {t.contact.eyebrow}
            </div>
            <h2 className="h-contact">{t.contact.title}</h2>
            <p className="contact-lead">{t.contact.lead}</p>
            <div className="contact-actions">
              <a href={`mailto:${LINKS.email}`} className="btn btn-primary btn-primary-lg">
                <MailIcon size={19} />
                {t.contact.emailLabel}
              </a>
              <CvDownload t={t} />
            </div>
            <div className="contact-connect">{t.contact.connect}</div>
            <div className="contact-socials">
              <a href={LINKS.github} aria-label="GitHub" className="social social-lg">
                <GitHubIcon size={22} />
              </a>
              <a href={LINKS.linkedin} aria-label="LinkedIn" className="social social-lg">
                <LinkedInIcon size={22} />
              </a>
              <a href={`mailto:${LINKS.email}`} aria-label="Email" className="social social-lg">
                <MailIcon size={22} />
              </a>
            </div>
          </section>
        )}
      </main>

      {op && (
        <div className="modal-overlay" onClick={() => setOp(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={op.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label={isES ? 'Cerrar' : 'Close'}
              onClick={() => setOp(null)}
            >
              <CloseIcon />
            </button>

            <div className="modal-cover">
              {op.cover ? <img src={op.cover} alt={op.title} /> : <div className="card-cover-empty" />}
            </div>

            <div className="modal-body">
              <div>
                <div className="modal-n">{op.n}</div>
                <h2 className="modal-title">{op.title}</h2>
                <div className="tech-row modal-tech">
                  {op.tech.map((tech) => (
                    <span className="tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="modal-label">{t.projects.aboutLabel}</h3>
                <p className="modal-about">{op.longDesc ?? op.desc}</p>
              </div>

              {op.features && op.features.length > 0 && (
                <div>
                  <h3 className="modal-label">{t.projects.featuresLabel}</h3>
                  <div className="modal-features">
                    {op.features.map((f) => (
                      <div className="modal-feature" key={f}>
                        <span className="modal-feature-icon">
                          <CheckIcon />
                        </span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {op.gallery && op.gallery.length > 0 && (
                <div>
                  <h3 className="modal-label">{t.projects.galleryLabel}</h3>
                  <div className="modal-gallery">
                    {op.gallery.map((g, gi) => (
                      <div className="modal-shot" key={gi}>
                        <img src={g} alt={`${op.title} ${gi + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {op.video && (
                <div>
                  <h3 className="modal-label">{t.projects.videoLabel}</h3>
                  <div className="modal-video">
                    <video src={op.video} controls poster={op.cover} />
                  </div>
                </div>
              )}

              {(op.links?.demo || op.links?.code || op.links?.project) && (
                <div className="modal-actions">
                  {op.links?.demo && (
                    <a href={op.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      <ExternalIcon />
                      {t.projects.demo}
                    </a>
                  )}
                  {op.links?.code && (
                    <a href={op.links.code} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      <CodeIcon />
                      {t.projects.code}
                    </a>
                  )}
                  {op.links?.project && (
                    <a href={op.links.project} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      <ArrowIcon />
                      {t.projects.project}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer>© {year} Raúl Junquera Abellán</footer>
    </div>
  )
}

export default App
