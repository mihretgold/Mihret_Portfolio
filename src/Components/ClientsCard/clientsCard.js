import "./clientsCard.css";

const ClientsCard = ({ imgSrc, title, role, location, period, description, technologies, highlights, link }) => {
  const handleCardClick = () => {
    if (link && link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <div 
      className={`experience-card ${link && link !== "#" ? "clickable" : ""}`} 
      onClick={handleCardClick}
    >
      <div className="experience-header">
        {imgSrc && (
          <div className="experience-logo-wrapper">
            <img src={imgSrc} alt={`${title} logo`} className="experience-logo" />
          </div>
        )}
        <div className="experience-title-section">
          <h3 className="experience-company">{title}</h3>
          <p className="experience-role">{role}</p>
          <div className="experience-meta">
            <span className="experience-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {location}
            </span>
            <span className="experience-period">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {period}
            </span>
          </div>
        </div>
      </div>
      
      <p className="experience-description">{description}</p>
      
      {highlights && highlights.length > 0 && (
        <div className="experience-highlights">
          {highlights.map((highlight, index) => (
            <span key={index} className="highlight-badge">{highlight}</span>
          ))}
        </div>
      )}
      
      {technologies && technologies.length > 0 && (
        <div className="experience-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      )}
      
      {link && link !== "#" && (
        <div className="experience-link-indicator">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ClientsCard;
