import Skill from "../Skill/skill";
import TitleDesc from "../TitleDesc/titleDesc";
import "./about.css";
import reactPic from "../../assets/react.png";
import flutterPic from "../../assets/flutter.png";
import fastApi from "../../assets/fast_api.png";
import cp from "../../assets/cp.png";

const About = () => {
  return (
    <div className="about-page">
      <TitleDesc
        title="What I do"
        description="I'm a software engineer with a passion for learning and developing new
        technologies. I'm currently work with React for front end development,
        Flutter for Mobile Development and Fast API and for backend development.
        I am currently learning Data Science, Machine learning, Node.js,
        Express.js, MongoDB, and Next.js"
      />
      <br />
      <div className="skill-bars">
        <Skill
          imgSrc={reactPic}
          title="Front End Development"
          description="Skilled Frontend Developer with technologies like HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap"
        />
        <Skill
          imgSrc={flutterPic}
          title="Mobile Development"
          description="Skilled Mobile Developer with technologies like Flutter, TDD clean Archietecture, Bloc State management, Provider State management and Testing capabilities"
        />
        <Skill
          imgSrc={fastApi}
          title="Backend Development"
          description="Skilled Backend Developer with technologies like Fast API, and Python"
        />
        <Skill
          imgSrc={cp}
          title="Competative Programmer"
          description="Skilled Competative Programmer with experience using languages like python, c++..."
        />
      </div>
    </div>
  );
};

export default About;
