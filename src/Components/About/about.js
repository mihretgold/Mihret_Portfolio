import Skill from "../Skill/skill";
import TitleDesc from "../TitleDesc/titleDesc";
import "./about.css";
import reactPic from "../../assets/react.png";
import flutterPic from "../../assets/flutter.png";
import fastApi from "../../assets/fast_api.png";
import cp from "../../assets/cp.png";
import ai from "../../assets/ai.png";

const About = () => {
  const skills = [
    {
      imgSrc: reactPic,
      title: "Full-Stack Web Development",
      description: "Expert in React.js, Next.js, TypeScript, Tailwind CSS, Node.js, and T3 Stack. Experienced with Express, tRPC, and Prisma for building scalable web applications."
    },
    {
      imgSrc: flutterPic,
      title: "Mobile Development",
      description: "Proficient in Flutter with expertise in TDD, Clean Architecture, Bloc state management, and Firebase integration. Built production apps with Google Auth and caching."
    },
    {
      imgSrc: fastApi,
      title: "Backend Development",
      description: "Skilled in Python (Flask, FastAPI), Go (Gin), and Node.js. Experienced with PostgreSQL, MongoDB, Firebase, and cloud platforms (AWS, GCP). Proficient in Docker and CI/CD."
    },
    {
      imgSrc: ai,
      title: "AI & Machine Learning",
      description: "Hands-on experience with Gemini API, OpenAI integration, Computer Vision (OpenCV), and ML pipelines. Built AI-powered features including recommendation systems and resume ranking."
    },
    {
      imgSrc: cp,
      title: "Competitive Programming",
      description: "Solved 1000+ problems on Codeforces and LeetCode. Strong foundation in Data Structures & Algorithms, having completed a rigorous 30+ hrs/week curriculum at A2SV."
    }
  ];

  const technologies = [
    { name: "JavaScript/TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Go", category: "Languages" },
    { name: "Rust", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "React/Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Flutter", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "GCP", category: "Cloud" }
  ];

  return (
    <div className="about-page">
      <TitleDesc
        title="What I Do"
        description="I'm a software engineer at ChromaWay with a passion for building impactful applications. 
        With expertise spanning full-stack development, mobile apps, and AI integration, I focus on 
        creating scalable solutions that make a difference. Currently exploring blockchain technology 
        with Rell while continuously expanding my skills in cloud computing and distributed systems."
      />
      
      <div className="skills-section">
        <h3 className="skills-subtitle">Core Expertise</h3>
        <div className="skill-bars">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              imgSrc={skill.imgSrc}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>

      <div className="tech-stack-section">
        <h3 className="skills-subtitle">Tech Stack</h3>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag" data-category={tech.category}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="education-section">
        <h3 className="skills-subtitle">Education & Certifications</h3>
        <div className="education-cards">
          <div className="education-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-content">
              <h4>B.Sc. in Software Engineering</h4>
              <p className="edu-place">Addis Ababa Science and Technology University</p>
              <p className="edu-details">CGPA: 3.75/4 • Very Great Distinction • Top 5%</p>
              <p className="edu-date">2021 - 2025</p>
            </div>
          </div>
          <div className="education-card">
            <div className="edu-icon">🏆</div>
            <div className="edu-content">
              <h4>Africa to Silicon Valley (A2SV)</h4>
              <p className="edu-place">Backed by Google</p>
              <p className="edu-details">Rigorous DSA curriculum • A2SVian of the Year Award</p>
              <p className="edu-date">2022 - 2023</p>
            </div>
          </div>
          <div className="education-card">
            <div className="edu-icon">🤖</div>
            <div className="edu-content">
              <h4>AI Mastery Program</h4>
              <p className="edu-place">10 Academy</p>
              <p className="edu-details">Selected from 1,300+ applicants • 1 of 17 graduates</p>
              <p className="edu-date">2024</p>
            </div>
          </div>
          <div className="education-card">
            <div className="edu-icon">☁️</div>
            <div className="edu-content">
              <h4>AWS Cloud Foundations</h4>
              <p className="edu-place">AWS Academy</p>
              <p className="edu-details">Cloud Architecture • Core Services • Pricing</p>
              <p className="edu-date">2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
