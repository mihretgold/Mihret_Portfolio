import signLanguage from "./assets/thumbs/sign-language.jpg";
import videoEngagement from "./assets/thumbs/video-engagement.jpg";
import steering from "./assets/thumbs/steering.jpg";
import signToLearn from "./assets/thumbs/sign-to-learn.jpg";
import manuscripts from "./assets/thumbs/manuscripts.jpg";
import shortsMemory from "./assets/thumbs/shorts-memory.jpg";
import cmuAfrica from "./assets/thumbs/cmu-africa.png";
import psoGraph from "./assets/thumbs/pso-graph.png";

export const profile = {
  name: "Mihret Agegnehu Bekele",
  tagline: "MS Engineering AI at Carnegie Mellon University Africa",
  email: "mbekele@andrew.cmu.edu",
  location: "Kigali, Rwanda",
  cv: `${process.env.PUBLIC_URL}/Mihret_Agegnehu_Bekele_CV.pdf`,
  links: {
    github: "https://github.com/mihretgold",
    linkedin: "https://www.linkedin.com/in/mihret-bekele/",
  },
  bio:
    "Mihret Agegnehu Bekele is a Master’s student in Engineering Artificial Intelligence at Carnegie Mellon University Africa (Mastercard Foundation Scholar) researching multimodal learning, Vision-Language Models (VLMs), and video understanding. Her research focuses on low-resource African writing systems and sign language accessibility, with papers accepted at top conferences including NeurIPS WiML, CVPR Demo, and ACM CHI BiAlign. She is currently seeking research-focused roles to build fair, robust, and accessible vision systems.",
};

// Newest first. Items from `visibleNews` onward are hidden until "Show all".
export const visibleNews = 10;

export const news = [
  { date: "Oct 2026", text: "Became a volunteer at the newly started **AI Safety Initiative at CMU-Africa (ASISCA)**, helping with its establishment." },
  { date: "Oct 2026", text: "Joined the **Robotics** reading group at the AI and Robotics Lab, CMU Africa." },
  { date: "Sep 2026", text: "Our paper on **continuous Ethiopian sign language recognition** was accepted to the **NeurIPS WiML** workshop." },
  { date: "Sep 2026", text: "Started as a **Research Assistant** at CMU Africa, working on OCR benchmarking for historical African manuscripts (Fidel dataset)." },
  { date: "Aug 2026", text: "Began my **MS in Engineering AI** at Carnegie Mellon University Africa as a **Mastercard Foundation Scholar**." },
  { date: "Jul 2026", text: "Attended the **Africa Computer Vision Summer School** at Google in Accra, and won **2nd place** in the hackathon on continuous Ethiopian sign language recognition." },
  { date: "Apr 2026", text: "My demo on **multimodal video understanding for short-form content engagement** was accepted to the **CVPR 2026 Demo track**." },
  { date: "Feb 2026", text: "Our paper **Steering Vision Models towards Subjective Concepts with Language** was accepted to the **ACM CHI BiAlign** workshop." },
  { date: "Jan 2026", text: "Joined the **AI Interpretability: Meaning, Methods, and Limits** graduate reading group (Berkeley AI Risk group)." },
  { date: "Dec 2025", text: "Selected for the **Computer Vision and Graphics Research Initiative**." },
  { date: "Aug 2025", text: "Promoted to **Junior Software Developer** at ChromaWay, Stockholm." },
  { date: "Jul 2025", text: "Teaching Assistant for Data Structures & Algorithms at **Addis Coder**." },
  { date: "Jun 2025", text: "Graduated from AASTU with **Very Great Distinction** (top 5% of Software Engineering)." },
  { date: "Mar 2025", text: "Became **Product Lead** at Develop for Good, directing 40+ volunteers across 4 nonprofit projects." },
  { date: "Feb 2025", text: "Joined ChromaWay as a Software Developer Intern and ranked in the **top 2%** on a one-week full-stack project in a new language (Rell)." },
  { date: "Jul 2024", text: "Completed the **10 Academy** AI Mastery program, one of 17 graduates selected from 1,300+ applicants." },
  { date: "Jun 2024", text: "Presented AI-based exam scheduling research (Particle Swarm Optimization, **40%** better room utilization) at an online research conference." },
  { date: "Dec 2023", text: "Completed the **Africa to Silicon Valley (A2SV)** coding academy after solving 1000+ Codeforces and LeetCode problems." },
];

const ME = "Mihret Agegnehu Bekele";

export const publications = [
  {
    venue: "NeurIPS WiML",
    img: signLanguage,
    year: 2026,
    title: "Continuous Ethiopian Sign Language Recognition: Video and Skeleton-Based Models with Cross-Lingual Transfer",
    authors: ["Damaris Stephanie Ndjebayi", ME, "Anteneh Yehalem Tegegne", "Yohannes Ayana Ejigu", "Tamiru Alemnew"],
    note: "Women in Machine Learning Workshop, NeurIPS 2026",
  },
  {
    venue: "CVPR Demo",
    img: videoEngagement,
    year: 2026,
    title: "Multimodal Video Understanding for Predicting and Optimizing Short-Form Content Engagement",
    authors: [ME],
    note: "Demo track, CVPR 2026",
  },
  {
    venue: "CHI BiAlign",
    img: steering, fit: "contain",
    year: 2026,
    title: "Steering Vision Models towards Subjective Concepts with Language",
    authors: [ME, "Dawit Getahun Mangistu", "Kidus Paulos Gebresadik", "Natnael Abayneh Unasho", "Amanuel Gizachew Abebe", "Simret A Gebreegziabher"],
    note: "BiAlign Workshop, ACM CHI 2026",
  },
];

export const projects = [
  {
    title: "Memory for Auto-Generating Shorts from Long Videos",
    img: shortsMemory, fit: "contain",
    date: "Sep 2026 – Present",
    point: "Finds every engaging scene of one character in hours of video and cuts it into a short, using a **Multimodal Memory Graph** and **Narrative Memory Chains**.",
  },
  {
    title: "OCR Benchmarking for Historical African Manuscripts",
    img: cmuAfrica, fit: "contain",
    org: "Carnegie Mellon University Africa",
    date: "Sep 2026 – Present",
    point: "Benchmarking and developing OCR models on the **Fidel** dataset and designing an open OCR competition for low-resource Ethiopian scripts.",
  },
  {
    title: "Sign to Learn",
    img: signToLearn,
    date: "Aug 2026 – Present",
    point: "Offline-first Flutter app that scores sign-language video responses in real time with MediaPipe keypoints and DTW.",
  },
  {
    title: "Restoring Ethiopic Manuscripts for Document Understanding",
    img: manuscripts,
    org: "Supervised by Prof. Maarten de Rijke",
    date: "May 2026 – Present",
    point: "YOLO, OCR, and vision-language models to detect and restore damaged Ge'ez manuscript pages.",
  },
  {
    title: "AI Assisted Resource Administering and Allocation",
    img: psoGraph, fit: "contain",
    org: "Addis Ababa Science and Technology University",
    date: "Jan 2024 – Jun 2024",
    point: "Exam scheduling with Particle Swarm Optimization that improved room utilization by **40%**; supervised by Dr. Surafel Tilahun.",
  },
];

export const industry = [
  {
    org: "ChromaWay",
    roles: [
      {
        role: "Junior Software Developer",
        date: "Aug 2025 – Aug 2026",
        place: "Stockholm, Sweden",
        points: [
          "Deployed the Colorpool DEX mainnet backend on **AWS** and built **clawchain.ai**, a blockchain-powered platform for AI agents; improved analytics accuracy by **18%**.",
        ],
      },
      {
        role: "Software Developer Intern",
        date: "Feb 2025 – Aug 2025",
        place: "Stockholm, Sweden",
        points: [
          "Built a full-stack project in 1 week while learning Rell (**top 2%**) and integrated a recommendation algorithm into a social media platform.",
        ],
      },
    ],
  },
  {
    org: "Stealth Startup",
    roles: [
      {
        role: "Backend Engineer (Part-time)",
        date: "Sep 2024 – Feb 2025",
        place: "California, USA",
        points: [
          "Cut task classification time by **60%** and improved function-calling accuracy by **40%** in an AI orchestration pipeline on GCP.",
        ],
      },
    ],
  },
  {
    org: "Eskalate LLC",
    roles: [
      {
        role: "Mobile Developer Intern",
        date: "Jul 2023 – Sep 2024",
        place: "Addis Ababa, Ethiopia",
        points: [
          "Reduced loading time by **12%** with cached images and lazy loading, and wrote 150+ unit tests with 90%+ coverage.",
        ],
      },
    ],
  },
];

// Newest first (by end date).
export const service = [
  { title: "Develop for Good", role: "Product Lead", date: "Mar 2025 – Feb 2026", body: "Reviewed 350+ applications and directed 40+ people across 4 nonprofit projects." },
  { title: "Addis Coder", role: "Teaching Assistant", date: "Jul – Aug 2025", body: "Data Structures & Algorithms, with professors Jelani Nelson, Daniel Kang, Huy Nguyen, and Huacheng Yu." },
  { title: "Develop for Good", role: "Technical Manager", date: "Oct 2024 – Feb 2025", body: "Led 6 engineers; built a mentor-matching algorithm for CovEducation serving 7,000+ K-12 students." },
  { title: "Africa to Silicon Valley (A2SV)", role: "Community Coordinator", date: "Mar – Oct 2024", body: "Weekly Data Structures & Algorithms lectures and mock technical interviews." },
  { title: "Addis Coder", role: "Teaching Assistant", date: "Jul – Aug 2024", body: "Taught lab sessions for 23 students and designed targeted worksheets." },
  { title: "Google Developer Students Club", role: "Lead Flutter Mentor", date: "Nov 2023 – Jul 2024", body: "Led 7 mentors engaging 120+ students; raised retention by 25%." },
  { title: "She Codes AASTU", role: "Lead Python Mentor", date: "Apr – Jun 2024", body: "Led 10 mentors and delivered weekly Python lectures." },
  { title: "Ethioware", role: "Flutter Mobile Development Trainer", date: "Feb 2024", body: "Remote training for women across African countries." },
  { title: "American Spaces Volunteer Program", role: "Math Teacher", date: "Jul – Sep 2019", body: "Taught math to 3rd and 4th graders." },
];

export const awards = [
  "**Mastercard Foundation Scholar**, Carnegie Mellon University Africa.",
  "**2nd Place**, Africa Computer Vision Summer School Hackathon (hosted at Google): continuous Ethiopian sign language recognition.",
  "**Very Great Distinction**, top 5% of the Software Engineering department, AASTU.",
  "**A2Svian of the Year**: 1st place out of 60 for Data Structures and Algorithms.",
];

export const skills = [
  ["Machine Learning & Vision", "PyTorch, OpenCV, Hugging Face Transformers, CLIP, YOLO, Faster-Whisper, scikit-learn, NumPy, Pandas, MediaPipe"],
  ["Languages", "Python, C++, Go, Java, C#, JavaScript/TypeScript, Dart"],
  ["Frameworks & Tools", "React, Flutter, Flask, Go Gin, .NET, Firebase, Docker, AWS, GCP"],
  ["Databases", "PostgreSQL, MongoDB, MySQL"],
];
