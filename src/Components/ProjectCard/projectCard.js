import "./projectCard.css";

const ProjectCard = ({ imgSrc, title, description, technologies, period, highlights, link }) => {
  const handleCardClick = () => {
    if (link && link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <div 
      className={`project-card ${link && link !== "#" ? "clickable" : ""}`} 
      onClick={handleCardClick}
    >
      <div className="project-image-container">
        <img src={imgSrc} alt={title} className="project-card-img" />
        <div className="project-overlay">
          {link && link !== "#" && (
            <span className="view-project">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              View Project
            </span>
          )}
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          {period && <span className="project-period">{period}</span>}
        </div>
        
        <p className="project-description">{description}</p>
        
        {highlights && highlights.length > 0 && (
          <div className="project-highlights">
            {highlights.map((highlight, index) => (
              <span key={index} className="highlight-tag">{highlight}</span>
            ))}
          </div>
        )}
        
        {technologies && technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
