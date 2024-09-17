import "./landing_page.css";
import mihretImage from "../../assets/mihret.jpg";
import { Link } from "react-scroll";
import hire from "../../assets/hire.png";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="description">
        <span className="hello">Hello, </span>
        <span className="title">
          I'm <span className="name">Mihret Agegnehu</span>
        </span>
        <span className="title">Software Engineer</span>
        <span className="text-description">
          I am a software engineer with experience in full-stack web
          development. I am <br />
          passionate about creating web applications that are user-friendly and
          efficient. I have <br />
          experience working with JavaScript, React,Python , Fast API, Flutter
          Mobile Development, <br /> Machine Learning and Data Science. I am
          always eager to learn new technologies and <br /> improve my skills. I
          am currently looking for opportunities to work on exciting projects{" "}
          <br />
          and collaborate with other developers.
        </span>
        <Link to="contact" smooth={true} duration={500}>
          <button className="hire-button">
            <img src={hire} alt="Hire" className="hire-image" />
            Hire me
          </button>
        </Link>
      </div>
      <div className="image-container">
        <img src={mihretImage} alt="Mihret" className="image" />
      </div>
    </section>
  );
};

export default LandingPage;
