import React, { useState } from "react";
import TitleDesc from "../TitleDesc/titleDesc";
import ClientsCard from "../ClientsCard/clientsCard";
import "./clients.css";

// Images
import eskalate from "../../assets/eskalate.jfif";
import gdsc from "../../assets/gdsc_aastu.jfif";
import american_spaces from "../../assets/american_spaces.jfif";
import dfg from "../../assets/dfg.jfif";
import addis_coder from "../../assets/addiscoder.jfif";

const Clients = () => {
  const [activeTab, setActiveTab] = useState("development");

  const experienceData = {
    development: [
      {
        title: "ChromaWay",
        role: "Junior Software Developer",
        location: "Stockholm, Sweden",
        period: "Aug 2025 – Present",
        description: "Improved product analytics accuracy by 18% by integrating Hotjar and internal Matomo. Resolved version-mismatch and dependency conflicts, reducing learner errors by 25%.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Rell (Blockchain)", "Jira"],
        link: "https://chromaway.com/",
        highlights: ["18% analytics improvement", "25% error reduction"]
      },
      {
        title: "ChromaWay",
        role: "Software Developer Intern",
        location: "Stockholm, Sweden",
        period: "Feb 2025 – Aug 2025",
        description: "Developed a full-stack project in 1 week while learning Rell, earning top 2% ranking. Refactored codebase improving performance by 25%. Integrated recommendation algorithm for social media platform.",
        technologies: ["Next.js", "TypeScript", "Rell", "BitBucket"],
        link: "https://chromaway.com/",
        highlights: ["Top 2% ranking", "25% performance boost"]
      },
      {
        title: "Stealth Startup",
        role: "Backend Engineer (Part-time)",
        location: "California, USA",
        period: "Sep 2024 – Feb 2025",
        description: "Deployed applications on GCP with Cloud Storage and Firestore. Reduced task classification time by 60% through multithreading. Improved function-calling accuracy by 40%.",
        technologies: ["Python", "Flask", "Gemini", "OpenAI", "GCP", "Docker"],
        link: "#",
        highlights: ["60% faster classification", "40% accuracy improvement", "35% test coverage increase"]
      },
      {
        imgSrc: eskalate,
        title: "Eskalate LLC",
        role: "Mobile Developer Intern",
        location: "Addis Ababa, Ethiopia",
        period: "Jul 2023 – Sep 2024",
        description: "Reduced loading time by 12% through cached network images and lazy loading. Designed 150+ unit tests achieving 90%+ coverage.",
        technologies: ["Flutter", "Dart", "TDD", "Clean Architecture", "Bloc"],
        link: "https://www.eskalate.io/",
        highlights: ["12% faster loading", "90%+ test coverage"]
      }
    ],
    teaching: [
      {
        imgSrc: addis_coder,
        title: "AddisCoder",
        role: "Teaching Assistant",
        location: "Addis Ababa, Ethiopia",
        period: "Jul 2025 – Aug 2025",
        description: "Delivered daily mini-lectures on DSA topics. Provided one-on-one support for struggling and advanced students. Worked with professors from UC Berkeley, UIUC, Northeastern, and Princeton.",
        technologies: ["Python", "Data Structures", "Algorithms"],
        link: "https://www.addiscoder.com/",
        highlights: ["UC Berkeley", "UIUC", "Princeton faculty"]
      },
      {
        title: "Africa to Silicon Valley (A2SV)",
        role: "Community Coordinator",
        location: "Addis Ababa, Ethiopia",
        period: "Mar 2024 – Oct 2024",
        description: "Delivered weekly lectures on beginner to advanced DSA topics. Hosted mock technical interviews, offering feedback to enhance coding accuracy and communication skills.",
        technologies: ["DSA", "Mock Interviews", "Problem Solving"],
        link: "https://a2sv.org/",
        highlights: ["Weekly lectures", "Mock interviews"]
      },
      {
        imgSrc: addis_coder,
        title: "AddisCoder",
        role: "Teaching Assistant",
        location: "Addis Ababa, Ethiopia",
        period: "Jul 2024 – Aug 2024",
        description: "Enhanced student understanding of DSA by teaching lab sessions for 23 students. Designed targeted worksheets to strengthen understanding and improve lab performance.",
        technologies: ["Python", "Data Structures", "Algorithms"],
        link: "https://www.addiscoder.com/",
        highlights: ["23 students", "Lab sessions"]
      },
      {
        imgSrc: gdsc,
        title: "Google Developers Students Club",
        role: "Lead Flutter Mentor",
        location: "Addis Ababa, Ethiopia",
        period: "Nov 2023 – Jul 2024",
        description: "Led a team of 7 Flutter mentors, coordinating efforts to engage 120+ students. Organized university hackathon. Increased student retention by 25%.",
        technologies: ["Flutter", "Dart", "Mobile Development"],
        link: "https://www.linkedin.com/company/gdsc-aastu/",
        highlights: ["7 mentors", "120+ students", "25% retention increase"]
      },
      {
        title: "She Codes AASTU",
        role: "Lead Python Mentor",
        location: "Addis Ababa, Ethiopia",
        period: "Apr 2024 – Jun 2024",
        description: "Led and managed a team of 10 Python mentors. Delivered weekly Python lectures covering fundamental and advanced concepts. Designed weekly tasks for practical application.",
        technologies: ["Python", "Teaching", "Curriculum Design"],
        link: "#",
        highlights: ["10 mentors", "Weekly lectures"]
      },
      {
        title: "Ethioware",
        role: "Flutter Mobile Development Trainer",
        location: "Addis Ababa, Ethiopia",
        period: "Feb 2024",
        description: "Conducted remote training sessions for women across African countries on Mobile Development. Designed comprehensive Flutter learning path integrating AI/ML trends.",
        technologies: ["Flutter", "Mobile Development", "AI/ML"],
        link: "#",
        highlights: ["Pan-African training", "Women in tech"]
      },
      {
        imgSrc: american_spaces,
        title: "American Spaces Volunteer Program",
        role: "Math Teacher",
        location: "Addis Ababa, Ethiopia",
        period: "Jul 2019 – Sep 2019",
        description: "Designed and implemented engaging math teaching techniques for 3rd and 4th graders. Fostered fun and interactive learning environment.",
        technologies: ["Mathematics", "Teaching", "Education"],
        link: "https://et.usembassy.gov/education-culture/american-spaces/",
        highlights: ["Elementary education", "Interactive learning"]
      }
    ],
    volunteer: [
      {
        imgSrc: dfg,
        title: "Develop for Good",
        role: "Product Lead",
        location: "California, USA",
        period: "Mar 2025 – Sep 2025",
        description: "Reviewed 4 nonprofit partner applications and 146 student engineer applications. Led a cross-functional team of 11 ensuring smooth collaboration with clients.",
        technologies: ["Product Management", "Leadership", "Team Coordination"],
        link: "https://www.developforgood.org/",
        highlights: ["11 team members", "150+ applications reviewed"]
      },
      {
        imgSrc: dfg,
        title: "Develop for Good",
        role: "Technical Manager",
        location: "California, USA",
        period: "Oct 2024 – Feb 2025",
        description: "Reduced manual mentor-matching time by 100% by implementing algorithm for CovEducation. Led team of 6 engineers developing secure software for 7,000+ K-12 students.",
        technologies: ["React.js", "Node.js", "TypeScript", "Firebase"],
        link: "https://www.developforgood.org/",
        highlights: ["100% time reduction", "7,000+ students impacted"]
      },
      {
        imgSrc: dfg,
        title: "Develop for Good",
        role: "Software Engineer",
        location: "California, USA",
        period: "Apr 2024 – Sep 2024",
        description: "Developed case-tracking tool for Human Rights First, improving efficiency by 20%. Collaborated with team of 10 on full-stack website with weekly client meetings.",
        technologies: ["T3 Stack", "TypeScript", "Next.js", "Prisma"],
        link: "https://www.developforgood.org/",
        highlights: ["20% efficiency improvement", "Human Rights First"]
      }
    ]
  };

  const tabs = [
    { id: "development", label: "Development", icon: "💻" },
    { id: "teaching", label: "Teaching & Mentorship", icon: "📚" },
    { id: "volunteer", label: "Volunteer", icon: "🤝" }
  ];

  return (
    <div className="experience-container">
      <TitleDesc
        title="Experience"
        description="My professional journey spans software development, teaching, and volunteer work. I've had the privilege of working with international teams and making an impact across different domains."
      />
      
      <div className="experience-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`experience-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="experience-list">
        {experienceData[activeTab].map((exp, index) => (
          <ClientsCard
            key={index}
            imgSrc={exp.imgSrc}
            title={exp.title}
            role={exp.role}
            location={exp.location}
            period={exp.period}
            description={exp.description}
            technologies={exp.technologies}
            highlights={exp.highlights}
            link={exp.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
