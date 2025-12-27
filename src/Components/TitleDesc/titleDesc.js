import './titleDesc.css'

const TitleDesc = ({title, description}) => {
  return (
    <div className='title-container'>
      <h2 className="section-title">
        <span className="title-accent">{title}</span>
      </h2>
      <p className="section-description">
        {description}
      </p>
    </div>
  );
}

export default TitleDesc
