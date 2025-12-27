import React, { useState } from "react";
import "./projects.css";
import TitleDesc from "../TitleDesc/titleDesc";
import ProjectCard from "../ProjectCard/projectCard";

// Images
import ai from "../../assets/ai.png";
import robot from "../../assets/robot.jfif";
import fire from "../../assets/fire_alarm.jpg";
import recipie from "../../assets/recipie.jpg";
import tele from "../../assets/tele.png";
import contest from "../../assets/contest_central.jpg";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("research");

  const projectData = {
    research: [
      {
        imgSrc: ai,
        title: "Multimodal Video Understanding for Short-Form Content",
        description:
          "Developed a multimodal feature extraction pipeline combining textual (sentiment, speech rate), audio (energy, dynamics), and visual features to predict video segment engagement. Implemented classical CV techniques with ablation studies.",
        technologies: ["Python", "Flask", "OpenCV", "FFmpeg", "faster-whisper", "scikit-learn", "Gemini API"],
        period: "May 2025 – Present",
        link: "#",
        highlights: ["7 ablation configurations", "Multimodal ML"]
      },
      {
        imgSrc: ai,
        title: "AI-Assisted Resource Administering and Allocation",
        description:
          "Applied Particle Swarm Optimization (PSO) to optimize student exam room allocation at AASTU, improving room utilization efficiency by 40%. Research conducted with Dr. Surafel with funding from IDRC and EduAI subgrant.",
        technologies: ["FastAPI", "Python", "Pandas", "NumPy", "Matplotlib"],
        period: "Jan 2024 – Jun 2024",
        link: "https://resource-administrator-and-allocator.netlify.app/",
        highlights: ["40% efficiency improvement", "PSO Algorithm"]
      },
      {
        imgSrc: tele,
        title: "Ethiopian Medical Business Data Warehouse",
        description:
          "Built an end-to-end ETL pipeline to scrape, clean, and load Telegram data into PostgreSQL warehouse, improving data analysis efficiency by 30%. Integrated YOLO object detection for image-based insights.",
        technologies: ["Python", "PostgreSQL", "YOLO", "FastAPI", "Scrapy", "Selenium", "DBT"],
        period: "Apr 2024 – May 2024",
        link: "#",
        highlights: ["30% efficiency gain", "YOLO integration"]
      },
      {
        imgSrc: ai,
        title: "Rossmann Store Sales Prediction",
        description:
          "Conducted exploratory data analysis to identify factors influencing customer purchasing behavior, leading to 10% boost in promotional effectiveness. Developed ML and deep learning models with RNNs.",
        technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn"],
        period: "Aug 2024",
        link: "#",
        highlights: ["5% accuracy increase", "Deep Learning"]
      }
    ],
    projects: [
      {
        imgSrc: robot,
        title: "AI Recruiter",
        description:
          "Improved candidate matching accuracy by 20% by integrating Gemini API to automatically rank resumes against job listings. Expanded job search reach by 30% through Adzuna API integration.",
        technologies: ["React.js", "Gemini API", "Clerk", "Adzuna API", "Calendly API", "Firebase", "Flask"],
        period: "Mar 2025 – May 2025",
        link: "https://github.com/mihretgold/AI-Recruiter/",
        highlights: ["20% matching accuracy", "30% search expansion"]
      },
      {
        imgSrc: ai,
        title: "AASTU Map",
        description:
          "Led a cross-functional team of 11, boosting delivery speed by 25% through agile sprints. Automated routine tasks to reduce manual toil and improve application resiliency and security.",
        technologies: ["Flutter", "Firebase", "Gebeta Map"],
        period: "Jul 2024 – May 2025",
        link: "#",
        highlights: ["11 team members", "25% faster delivery"]
      },
      {
        imgSrc: ai,
        title: "Litigation Tracker",
        description:
          "Increased case tracking efficiency by 20% by developing a centralized database tool for legal cases. Collaborated with diverse team of 10 on full-stack website deployment.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS", "tRPC", "Prisma", "PostgreSQL"],
        period: "Apr 2024 – Sep 2024",
        link: "#",
        highlights: ["20% efficiency gain", "T3 Stack"]
      },
      {
        imgSrc: contest,
        title: "Contest Central",
        description:
          "Developed a Flutter contest central application to analyze and manage Codeforces contest data. Implemented RESTful API integration and designed UI for contest creation and analysis.",
        technologies: ["Flutter", "TDD", "Clean Architecture", "Bloc", "fl-chart"],
        period: "Dec 2023 – Jun 2024",
        link: "#",
        highlights: ["Codeforces integration", "TDD"]
      },
      {
        imgSrc: fire,
        title: "Smart Fire Alarm System",
        description:
          "Implemented Flutter app with OpenStreetMap integration for finding nearest fire stations. Features fire safety awareness page with text-to-speech for accessibility and emergency call functions.",
        technologies: ["Flutter", "OpenStreetMap", "url_launcher", "TTS"],
        period: "Jan 2024 – Present",
        link: "https://github.com/mihretgold/Smart-Fire-Alarm-System",
        highlights: ["Map integration", "Accessibility"]
      },
      {
        imgSrc: recipie,
        title: "Recipe App",
        description:
          "Built Flutter app with Firebase authentication, CRUD functionality for recipes, bookmarking favorites, and text-to-speech integration for accessibility.",
        technologies: ["Flutter", "Firebase", "Shared Preferences", "TTS"],
        period: "Feb 2024 – Present",
        link: "https://github.com/mihretgold/Recipe_Flutter_App",
        highlights: ["Firebase Auth", "CRUD Operations"]
      }
    ]
  };

  const tabs = [
    { id: "research", label: "Research Projects", icon: "🔬" },
    { id: "projects", label: "Development Projects", icon: "🚀" }
  ];

  return (
    <div className="projects-container">
      <TitleDesc
        title="My Projects"
        description="I take pride in building impactful solutions that solve real problems. From AI-powered applications to mobile apps, each project represents a commitment to quality and innovation."
      />

      <div className="project-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`project-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="project-list">
        {projectData[activeTab].map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            period={project.period}
            highlights={project.highlights}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
