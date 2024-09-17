import "./clientsCard.css";

const ClientsCard = ({ imgSrc, title, role, description, link }) => {
  const handleCardClick = () => {
    window.open(link, "_blank"); // Open the link in a new tab
  };
  return (
    <div className="client-card-container" onClick={handleCardClick}>
      <img src={imgSrc} alt="Company logo" className="client-logo" />
      <div className="client-info">
        <h3 className="client-title">{title}</h3>
        <p className="client-role">{role}</p>
        <p className="client-description">{description}</p>
      </div>
    </div>
  );
};

export default ClientsCard;
