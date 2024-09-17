import "./projects.css";
import TitleDesc from "../TitleDesc/titleDesc";
import ProjectCard from "../ProjectCard/projectCard";
import ai from "../../assets/ai.png";
import robot from "../../assets/robot.jfif";
import fire from "../../assets/fire_alarm.jpg";
import recipie from "../../assets/recipie.jpg";
import tele from "../../assets/tele.png";
import course from "../../assets/course.jfif";
import blog from "../../assets/blog.png";

// Array of project details
const projectDetails = [
  {
    imgSrc: ai,
    title: "AI-assisted Resource Administering and Allocation",
    description:
      "Conducted research with Dr. Surafel with funding from IDRC and EduAI subgrant. Implemented Particle Swarm Optimization for student allocation, improving accessibility and reducing time spent on tasks by 70%.",
    link: "https://resource-administrator-and-allocator.netlify.app/",
  },
  {
    imgSrc: robot,
    title: "AI-Recruiter",
    description:
      "Integrated the Gemini API to automatically rank resumes based on job listings and rank jobs based on candidate resumes, improving candidate matching accuracy by 30%",
    link: "https://github.com/mihretgold/AI-Recruiter/",
  },
  {
    imgSrc: fire,
    title: "Smart Fire Alarm System",
    description:
      "Implemented a Flutter app with OpenStreetMap and fire safety awareness features, including text-to-speech for accessibility and emergency call functions using the Twilio API.",
    link: "https://github.com/mihretgold/Smart-Fire-Alarm-System",
  },
  {
    imgSrc: recipie,
    title: "Recipe App",
    description:
      "Built a Flutter app with Firebase authentication, CRUD functionality, bookmarking, and text-to-speech integration for accessibility.",
    link: "https://github.com/mihretgold/Recipe_Flutter_App",
  },
  // {
  //   imgSrc: blog,
  //   title: "Blog App",
  //   description:
  //     "Collaborated with a team to develop a mobile app using Flutter and Dart, featuring BLoC state management and asynchronous operations.",
  // },
  {
    imgSrc: course,
    title: "Course Management System",
    description:
      "Led a team to develop a Java-based course management system with MySQL database integration and a Swing GUI.",
    link: "https://github.com/mihretgold/JavaPractice/tree/master/CourseManagementJava",
  },
  {
    imgSrc: tele,
    title: "TellCo Profit Analysis",
    description:
      "Conducted data analysis on user behavior for TellCo, using K-means clustering to segment users and provide insights for investment decisions.",
    link: "https://github.com/mihretgold/Tellco-Profit-Analysis",
  },
];

// Project component that maps through projectDetails
const Projects = () => {
  return (
    <div className="projects-container">
      <TitleDesc
        title="My Projects"
        description="I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence."
      />
      <div className="project-list">
        {projectDetails.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
