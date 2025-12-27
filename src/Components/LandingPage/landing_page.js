import "./landing_page.css";
import mihretImage from "../../assets/mihret.jpg";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="landing-bg-elements">
        <div className="landing-blob landing-blob-1"></div>
        <div className="landing-blob landing-blob-2"></div>
        <div className="landing-grid"></div>
      </div>
      
      <div className="landing-content">
        <div className="description">
          <div className="intro-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          <span className="hello">Hello, I'm</span>
          <h1 className="title">
            <span className="name">Mihret Agegnehu</span>
          </h1>
          <h2 className="role">Software Engineer</h2>
          <p className="text-description">
            A passionate full-stack developer with experience at <strong>ChromaWay</strong> (Stockholm) 
            and organizations like <strong>Develop for Good</strong>. I specialize in React, Next.js, 
            Flutter, and AI integration. With a strong foundation in Data Structures & Algorithms 
            (1000+ problems solved), I build scalable applications that make an impact.
          </p>
          
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">DSA Problems</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
          
          <div className="cta-buttons">
            <Link to="contact" smooth={true} duration={500}>
              <button className="hire-button primary-btn">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Hire Me
              </button>
            </Link>
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="hire-button secondary-btn">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                View Projects
              </button>
            </Link>
          </div>
        </div>
        
        <div className="image-container">
          <div className="image-frame">
            <img src={mihretImage} alt="Mihret Agegnehu" className="image" />
          </div>
          <div className="image-decoration"></div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
