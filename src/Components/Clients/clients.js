import React from "react";
import TitleDesc from "../TitleDesc/titleDesc";
import ClientsCard from "../ClientsCard/clientsCard";
import eskalate from "../../assets/eskalate.jfif";
import gdsc from "../../assets/gdsc_aastu.jfif";
import american_spaces from "../../assets/american_spaces.jfif";
import rtc from "../../assets/rtc.jfif";
import dfg from "../../assets/dfg.jfif";
import addis_coder from "../../assets/addiscoder.jfif";

const Clients = () => {
  const clientDetails = [
    {
      imgSrc: eskalate,
      title: "Eskalate LLC",
      role: "Mobile Developer",
      description:
        "Led a team to create Vertex, an offline-first LeetCode competitor with generative AI features. Implemented cached network images and lazy loading techniques.",
      link: "https://www.eskalate.io/",
    },
    {
      imgSrc: gdsc,
      title: "Google Developers Club (GDSC)",
      role: "Lead Flutter Mentor",
      description:
        "Led a team of 7 mentors and 120+ students, overseeing community projects and achieving a 25% increase in student retention.",
      link: "https://www.linkedin.com/company/gdsc-aastu/",
    },
    {
      imgSrc: american_spaces,
      title: "American Spaces Volunteer Program",
      role: "Math Teacher",
      description:
        "Executed effective learning hacks for 3rd and 4th graders to simplify mathematical concepts.",
      link: "https://et.usembassy.gov/education-culture/american-spaces/col-john-c-robinson-american-center/",
    },
    {
      imgSrc: rtc,
      title: "Rewriting The Code",
      role: "Student Fellow",
      description:
        "Participating as a student fellow in various programming and mentoring activities.",
      link: "https://rewritingthecode.org/",
    },
    {
      imgSrc: dfg,
      title: "Develop for Good",
      role: "Software Engineer",
      description:
        "Collaborated on designing and deploying a full-stack website with a centralized database tool to track cases against Extremist Groups.",
      link: "https://www.developforgood.org/",
    },
    {
      imgSrc: addis_coder,
      title: "AddisCoder",
      role: "Teaching Assistant",
      description:
        "Volunteered to teach an intensive 4-week course on algorithms and data structures for top students, leading lab sessions and providing support with Python notebooks.",
      link: "https://www.addiscoder.com/",
    },
  ];

  return (
    <div className="client-container">
      <TitleDesc
        title="My Clients"
        description="I have had the opportunity to work with a diverse group of companies and organizations. Some of the notable clients and roles include:"
      />
      <div className="clients-list">
        {clientDetails.map((client, index) => (
          <ClientsCard
            key={index}
            imgSrc={client.imgSrc}
            title={client.title}
            role={client.role}
            description={client.description}
            link={client.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
