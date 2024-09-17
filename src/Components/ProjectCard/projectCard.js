import "./projectCard.css";

const ProjectCard = ({ imgSrc, title, description, link }) => {
  const handleCardClick = () => {
    window.open(link, "_blank"); // Open the link in a new tab
  };
  return (
    <div className="project-card-container" onClick={handleCardClick}>
      <img src={imgSrc} alt="project picture" className="project-card-img" />
      <a href="#" className="project-link">
        <span className="project-title">{title}</span>
      </a>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
