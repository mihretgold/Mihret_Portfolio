import "./projectCard.css";

const ProjectCard = ({ imgSrc, title, description, link }) => {
  const handleCardClick = () => {
    window.open(link, "_blank"); // Open the link in a new tab
  };
  return (
    <div className="project-card-container" onClick={handleCardClick}>
      <img src={imgSrc} alt={`${title} picture`} className="project-card-img" />
      <span className="project-title">{title}</span>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
