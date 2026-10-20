import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Menu,
  MapPin,
  Mail,
  Phone,
  Palette,
  Sparkles,
  X,
  Cpu
} from 'lucide-react';
import './styles.css';

const img =
  'https://res.cloudinary.com/dzzl28aef/image/upload/v1782388807/success_xfvxco.jpg';

const exp = [
  ['2014 — 2017', 'Graphic Design / Print Press', 'Sakafaz Nig. Enterprises', 'Ogun State'],
  ['2018 — 2020', 'Graphic Design / Machine Operator', 'Destiny Large Format Printing', 'Ogun State'],
  ['2019 — 2020', 'Computer Operator', 'St. George Group of Schools', 'Ogun State'],
  ['2020', 'Graphic Design', 'Glorious Print', 'Ogun State'],
  ['2020 — 2022', 'Maintenance', 'Pardee Food Nigeria Ltd', 'Ogun State'],
  ['2021 — 2023', 'Graphic Design / Computer Operator', 'Dabsally Engineering Company', 'Ogun State'],
  ['2023 — 2024', 'Graphic Design / Computer Operator', 'De Crown Printing', 'Ikorodu, Lagos'],
  ['2024 — 2025', 'Printing, Graphic Design & Product Branding', 'Sakafaz Printing Co.', 'Ogun State'],
  ['2024 — present', 'Graphic Design / Frontend Developer', 'Ideyprint Print House', 'Lekki, Lagos']
];

const edu = [
  ['2003 — 2011', 'Matemark Academy', 'O’Level', 'Lagos State'],
  ['2011 — 2014', 'Zafat International College', 'Junior Secondary School', 'Lagos State'],
  ['2014 — 2017', 'Odewale High School', 'Senior Secondary School', 'Ogun State'],
  ['2018 — 2020', 'Excellence Computer College', 'Computer Education', 'Ogun State'],
  ['2020 — 2022', 'Sky Standard Media & Co.', 'Photography', 'Ogun State'],
  ['2024 — 2025', 'TS Academy, Scholarship', 'Software Development', ''],
  ['2026 — 2026', 'Anthropic Academy, Claude', 'Claude AI', '']
];

const skills = [
  [
    'Graphic design',
    ['Photoshop', 'Illustrator', 'CorelDraw', 'Canva', 'Logo Creation', 'Portfolio Design'],
    Palette
  ],
  [
    'Web development',
    ['HTML', 'React', 'CSS', 'JavaScript', 'WordPress', 'Elementor', 'Responsive Design'],
    Code2
  ],
  [
    'Programming & tools',
    ['Python (basic)', 'GitHub', 'VS Code'],
    Cpu
  ],
  [
    'AI tools',
    ['Claude', 'Google AI', 'ChatGPT', 'Midjourney', 'Adobe Firefly'],
    Sparkles
  ]
];

function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const f = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
    };

    addEventListener('pointermove', f);

    return () => removeEventListener('pointermove', f);
  }, []);

  const nav = [
    'about',
    'skills',
    'services',
    'graphic-projects',
    'web-projects',
    'experience',
    'education',
    'contact'
  ];

  return (
    <div className="site">

      <header>
        <a className="brand" href="#top">
          <b>IA</b>
          <span>SUCCESS IBRAHIM</span>
        </a>

        <nav className={menu ? 'open' : ''}>
          {nav.map((n) => (
            <a
              key={n}
              href={'#' + n}
              onClick={() => setMenu(false)}
            >
              {n === 'graphic-projects' ? 'graphic work' : n === 'web-projects' ? 'web work' : n}
            </a>
          ))}

          <a
            className="talk"
            href="mailto:successibrahim2001@gmail.com"
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="hamb"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero">
          <div className="gridbg" />

          <div className="heroText">
            <p className="eyebrow">
              <i /> Open to remote & freelance work
            </p>

            <h1>
              Designer.
              <br />
              <em>Developer.</em>
              <br />
              AI-minded.
            </h1>

            <p className="intro">
              I’m Ibrahim — a self-motivated digital creator blending graphic
              design, frontend development and AI workflows to build
              high-impact digital work.
            </p>

            <div className="actions">
              <a className="primary" href="#services">
                Explore services <ArrowDown size={16} />
              </a>

              <a
                className="secondary"
                href="mailto:successibrahim2001@gmail.com"
              >
                Start a project <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="resume-actions" aria-label="Resume actions">
              <a className="resume-view" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View resume <ArrowUpRight size={16} />
              </a>
              <a className="resume-download" href="../Success Ibrahim Adewuyi.pdf" download="Success-Ibrahim-Adewuyi-Resume.pdf">
                Download resume <ArrowDown size={16} />
              </a>
            </div>

            <div className="stats">
              <span>
                <b>7+</b> years in design & print
              </span>

              <span>
                <b>2023</b> frontend development
              </span>

              <span>
                <b>AI</b> creative workflows
              </span>
            </div>
          </div>

          <div className="visual">
            <img
              src={img}
              alt="Success Ibrahim Adewuyi"
            />

            <div className="scan" />

            <div className="vname">
              SUCCESS IBRAHIM ADEWUYI
            </div>

            <div className="tag">
              <Sparkles size={14} />
              DESIGN × CODE × AI
            </div>
          </div>

          <div className="scroll">
            SCROLL TO EXPLORE ─────
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <label>// about</label>

          <h2>
            A designer who learned to code,{' '}
            <i>not the other way around.</i>
          </h2>

          <div className="two">
            <strong>
              Print taught me that small misalignments ruin big work — and
              that lesson never left.
            </strong>

            <div>
              <p>
                I started out running large-format printers and operating
                computers in print shops across Ogun State — Sakafaz, Destiny,
                Glorious, Dabsally, De Crown — learning graphic design
                hands-on, one job at a time.
              </p>

              <p>
                That instinct for precision followed me into the screen. At
                Ideyprint Print House in Lekki, I now split my time between
                graphic design and frontend development, folding AI tools —
                ChatGPT, Midjourney and Adobe Firefly — into both.
              </p>

              <p>
                These days I’m building toward web development, AI-assisted
                design and NFC-powered products as a freelancer.
              </p>
            </div>
          </div>

          <div className="principles">
            {[
              ['01', 'Self-driven', 'Highly motivated'],
              ['02', 'Clear communicator', 'Confident & collaborative'],
              ['03', 'Quick learner', 'Solution-oriented'],
              ['04', 'User-focused', 'Creative thinking']
            ].map((x) => (
              <div key={x[0]}>
                <small>{x[0]}</small>
                <b>{x[1]}</b>
                <span>{x[2]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <label>// capabilities</label>

          <div className="head">
            <h2>
              Design tools and code,
              <br />
              <i>side by side.</i>
            </h2>

            <p>
              Technical range built from years of real production work —
              from print floors to responsive interfaces and AI-assisted
              workflows.
            </p>
          </div>

          <div className="ticker">
            React — expert　 Photoshop — expert　 Illustrator — advanced　
            CorelDraw — advanced　 AI design tools — advanced　 HTML / CSS /
            JavaScript — advanced　 Python — growing
          </div>

          <div className="cards">
            {skills.map(([name, items, Icon]) => (
              <article key={name}>
                <Icon />

                <h3>{name}</h3>

                <div>
                  {items.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <label>// services</label>

          <div className="head">
            <h2>
              What I can
              <br />
              <i>build for you.</i>
            </h2>

            <p>
              From a printed flyer to a working website to a card people can
              tap — pick where you want to start.
            </p>
          </div>

          <div className="services">
            {[
              [
                '01',
                'Graphic Design & Branding',
                'Logos, print layouts, and branded visuals — built on years of hands-on production work, so the file is as clean as the final print.'
              ],
              [
                '02',
                'Web Development',
                'Responsive websites built with HTML, CSS, JavaScript, React and WordPress — from a landing page to a full small-business site.'
              ],
              [
                '03',
                'AI-Assisted Design',
                'Faster concepting and production using ChatGPT, Midjourney and Adobe Firefly, layered into a normal design workflow.'
              ],
              [
                '04',
                'NFC Smart Cards & Digital Profiles',
                'A tap-to-share card that opens contact details, portfolio or social links on anyone’s phone — no app needed.'
              ]
            ].map((x) => (
              <article key={x[0]}>
                <small>{x[0]}</small>

                <div>
                  <label>BUILD / CREATE</label>

                  <h3>{x[1]}</h3>

                  <p>{x[2]}</p>
                </div>

                <ArrowUpRight />
              </article>
            ))}
          </div>
        </section>


        {/* GRAPHIC DESIGN PROJECTS */}
        <section className="section project-section" id="graphic-projects">
          <label>// selected work · graphic design</label>
          <div className="head">
            <h2>Ideas made<br /><i>visible.</i></h2>
            <p>Brand identities, campaign artwork, print layouts and product visuals. Replace these starter cards with your actual designs and project links.</p>
          </div>
          <div className="project-grid">
            {[
              { title: 'Brand Identity & Logo', type: 'Branding · Identity', image: 'https://images.unsplash.com/photo-1634942536790-253d7f2f1f3b?auto=format&fit=crop&w=1200&q=85', note: 'Logo system, color direction and brand applications' },
              { title: 'Campaign & Social Artwork', type: 'Campaign · Digital design', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85', note: 'A flexible visual system for digital promotion' },
              { title: 'Print & Product Branding', type: 'Print · Packaging', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85', note: 'Print-ready artwork with attention to production detail' }
            ].map((project) => (
              <article className="project-card" key={project.title}>
                <a className="project-image" href="#contact" aria-label={`Ask about ${project.title}`}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-arrow"><ArrowUpRight size={20} /></span>
                </a>
                <div className="project-copy">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.note}</p>
                  <a className="project-link" href="#contact">Discuss a similar project <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WEBSITE DESIGN PROJECTS */}
        <section className="section project-section" id="web-projects">
          <label>// selected work · web design</label>
          <div className="head">
            <h2>Digital experiences<br /><i>built to work.</i></h2>
            <p>Responsive websites, landing pages and digital experiences. Replace the example cards with screenshots, live URLs and repositories for your completed projects.</p>
          </div>
          <div className="project-grid web-project-grid">
            {[
              { title: 'Real Estate Website', type: 'Website · Responsive UI', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', note: 'Property discovery experience with clear calls to action' },
              { title: 'Business Landing Page', type: 'Landing page · Frontend', image: 'https://images.unsplash.com/photo-1460925895917-afdac827c52f?auto=format&fit=crop&w=1200&q=85', note: 'A polished digital presence for a growing business' },
              { title: 'Creative Portfolio Website', type: 'Portfolio · UI design', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85', note: 'A visual-first portfolio built around projects and storytelling' }
            ].map((project) => (
              <article className="project-card" key={project.title}>
                <a className="project-image" href="#contact" aria-label={`Ask about ${project.title}`}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-arrow"><ArrowUpRight size={20} /></span>
                </a>
                <div className="project-copy">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.note}</p>
                  <a className="project-link" href="#contact">Discuss a website <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <label>// experience</label>

          <div className="head">
            <h2>
              A decade on the
              <br />
              <i>production floor.</i>
            </h2>

            <p>
              Every role added another layer: print, machines, computers,
              design, maintenance, branding — then code.
            </p>
          </div>

          <div className="timeline">
            {exp.map((x, i) => (
              <div key={`${x[0]}-${x[2]}`}>
                <time>{x[0]}</time>

                <p>
                  <b>{x[1]}</b>
                  <span>{x[2]}</span>
                  <small>{x[3]}</small>
                </p>

                <em>
                  {String(i + 1).padStart(2, '0')}
                </em>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
          <label>// education</label>

          <div className="head">
            <h2>
              Learning
              <br />
              <i>path.</i>
            </h2>

            <p>
              A practical education shaped by formal study, creative training
              and the modern AI ecosystem.
            </p>
          </div>

          <div className="edu">
            {edu.map((x) => (
              <article key={`${x[0]}-${x[1]}`}>
                <small>{x[0]}</small>

                <h3>{x[1]}</h3>

                <b>{x[2]}</b>

                <span>{x[3]}</span>
              </article>
            ))}
          </div>

          <div className="explore">
            <label>currently exploring</label>

            <p>
              AI in creative workflows　•　UI/UX design　•　Tech
              entrepreneurship　•　Pizza & continuous improvement
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div>
            <label>// contact</label>

            <h2>
              Got a project
              <br />
              <i>in mind?</i>
            </h2>

            <p>
              Design, a website, or an NFC card — tell me what you’re trying
              to build and I’ll tell you how I’d approach it.
            </p>
          </div>

          <a href="mailto:successibrahim2001@gmail.com">
            <Mail />

            <span>
              successibrahim2001@gmail.com
            </span>

            <ArrowUpRight />
          </a>

          <div className="meta">
            <span>
              <MapPin />
              Freedom Way, Lekki Phase 1, Lagos
            </span>

            <span>
              <Phone />
              +234 805 075 9876
              <br />
              +234 906 414 5186
            </span>

            <span>
              adewuyiibrahim.com
            </span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <span>© 2026 Ibrahim Adewuyi</span>

        <span>
          Designer · Developer · AI Prompt Engineer
        </span>

        <div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.1c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9V9Z"/></svg>
          </a>
        </div>
      </footer>

    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);