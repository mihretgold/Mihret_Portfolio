import "./skill.css";

const Skill = ({ imgSrc, title, description }) => {
  return (
    <div className="about-skills">
      <img src={imgSrc} className="about-img" alt="Skill" />
      <div className="about-skill-body">
        <span className="about-skill-title">{title}</span>
        <span className="about-skil-description">{description}</span>
      </div>
    </div>
  );
};

export default Skill;
