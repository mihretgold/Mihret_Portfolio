import './titleDesc.css'

const TitleDesc = ({title, description}) => {
  return (
    <div className='title-container'>
      <span className="about-title">{title}</span>
      <br />
      <br />
      <span className="about-text">
        {description}
      </span>
      <br />
    </div>
  );
}

export default TitleDesc