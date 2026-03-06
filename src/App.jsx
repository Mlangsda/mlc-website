import { useState, useEffect } from 'react'
import './App.css'

const LOGO_URL = 'https://static.wixstatic.com/media/bbe81b_00a4d46fc8e64c8da2d1fe1eb22609b8~mv2.png'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* NAV */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <img src={LOGO_URL} alt="Marzena Langsdale Communication" />
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#results">Results</a>
          <a href="#contact" className="nav-cta">Get in Touch</a>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#results" onClick={closeMenu}>Results</a>
        <a href="#contact" onClick={closeMenu}>Get in Touch</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Stockholm-Based Brand Studio</p>
          <h1>
            Your brand should <em>work</em> as hard as you do
          </h1>
          <p className="hero-sub">
            I help ambitious companies build brands that attract the right clients,
            tell stories that resonate, and use AI to move faster than the competition.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Start a Conversation</a>
            <a href="#services" className="btn-secondary">See How</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <p className="section-tag">What I Do</p>
          <h2 className="section-title">Three pillars. One clear result.</h2>
          <p className="section-subtitle">
            Every service is designed to solve one problem: making your business impossible to ignore.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">&#9670;</span>
              <h3>Brand Strategy</h3>
              <p>
                A strong brand isn't a logo — it's a business decision. I define your positioning,
                messaging, and visual identity so every touchpoint builds trust and drives growth.
              </p>
              <ul className="service-list">
                <li>Brand positioning & messaging</li>
                <li>Visual identity & design systems</li>
                <li>Brand audits & competitor analysis</li>
                <li>Go-to-market brand strategy</li>
              </ul>
            </div>

            <div className="service-card">
              <span className="service-icon">&#9671;</span>
              <h3>Content Marketing</h3>
              <p>
                Content that actually performs. I create strategies and produce content
                that positions you as a thought leader and brings inbound leads — consistently.
              </p>
              <ul className="service-list">
                <li>Content strategy & planning</li>
                <li>LinkedIn & social media content</li>
                <li>Copywriting & storytelling</li>
                <li>Campaign management</li>
              </ul>
            </div>

            <div className="service-card">
              <span className="service-icon">&#9674;</span>
              <h3>AI Creative</h3>
              <p>
                AI isn't replacing creativity — it's amplifying it. I integrate AI tools into
                your marketing workflow so you produce more, faster, without losing your voice.
              </p>
              <ul className="service-list">
                <li>AI-powered content production</li>
                <li>Workflow automation & tooling</li>
                <li>AI image & visual generation</li>
                <li>Training & implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-placeholder">
                <img src={LOGO_URL} alt="Marzena Langsdale" style={{ padding: '3rem', opacity: 0.6 }} />
              </div>
            </div>
            <div className="about-text">
              <p className="section-tag">About</p>
              <h3>One person. A full creative department.</h3>
              <p>
                I'm Marzena Langsdale — a brand strategist, art director, and creative
                director based in Stockholm. I've spent years helping companies build brands
                that actually mean something — from pharma to tech to business development.
              </p>
              <p>
                My clients don't need a big agency with layers of account managers. They need
                someone who understands their business, thinks strategically, and delivers — fast.
                That's what I do. When specialist skills are needed, I bring in the right people.
              </p>
              <p>
                Today, I combine deep brand expertise with AI tools to deliver work that used to
                require entire teams. The result? Better output, faster timelines, and a partner
                who's invested in your success.
              </p>
              <div className="about-stats">
                <div>
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years experience</span>
                </div>
                <div>
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Brands built</span>
                </div>
                <div>
                  <span className="stat-number">1</span>
                  <span className="stat-label">Point of contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process">
        <div className="container">
          <p className="section-tag">How It Works</p>
          <h2 className="section-title">Simple process. Serious results.</h2>
          <p className="section-subtitle">
            No unnecessary meetings. No bloated timelines. Just clear steps from where you are to where you want to be.
          </p>

          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">01</span>
              <h4>Discovery</h4>
              <p>We talk about your business, goals, audience, and what's not working. I ask the hard questions.</p>
            </div>
            <div className="process-step">
              <span className="step-number">02</span>
              <h4>Strategy</h4>
              <p>I build a clear plan — positioning, messaging, visual direction, and content approach.</p>
            </div>
            <div className="process-step">
              <span className="step-number">03</span>
              <h4>Create</h4>
              <p>Design, copy, content, campaigns — everything produced to the highest standard, using AI where it makes sense.</p>
            </div>
            <div className="process-step">
              <span className="step-number">04</span>
              <h4>Launch & Grow</h4>
              <p>We go live, measure what works, and refine. Your brand keeps getting stronger over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="results">
        <div className="container">
          <p className="section-tag">Results</p>
          <h2 className="section-title">The proof is in the work</h2>
          <p className="section-subtitle">
            Real projects. Real outcomes. Here's what happens when strategy meets execution.
          </p>

          <div className="results-grid">
            <div className="result-card">
              <p className="result-type">Pharma</p>
              <h3>External in-house agency for Evolan Pharma</h3>
              <p>
                Stepped in as interim Marketing Director and Creative Director.
                Built and ran the entire marketing operation — strategy, content creation,
                campaign management — bringing in specialists only when needed.
              </p>
              <p className="result-outcome">
                Full marketing department delivered by one person
              </p>
            </div>
            <div className="result-card">
              <p className="result-type">Business Development</p>
              <h3>Yobedoo — brand from zero to market</h3>
              <p>
                No budget, no vendors. Used AI for copywriting, learned the platform,
                designed the entire website and brand identity, and articulated a complex
                business development offering for the market.
              </p>
              <p className="result-outcome">
                Complete brand and website built with AI-driven workflow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <p className="section-tag">Let's Talk</p>
          <h2>Ready to build a brand that actually works?</h2>
          <p>
            Whether you need a complete brand overhaul, a content strategy that delivers,
            or want to integrate AI into your creative workflow — let's start with a conversation.
          </p>
          <a href="mailto:marzena@marzenalangsdale.com" className="btn-primary">
            marzena@marzenalangsdale.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={LOGO_URL} alt="MLC" style={{ height: '30px' }} />
            <p>Brand Strategy &middot; Content Marketing &middot; AI Creative</p>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/marzenalangsdale/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:marzena@marzenalangsdale.com">Email</a>
          </div>
          <div className="footer-right">
            &copy; {new Date().getFullYear()} Marzena Langsdale Communication. Stockholm.
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
