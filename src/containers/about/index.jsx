import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiPython, DiNodejsSmall } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Bhargav Sable",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Nagpur, Maharashtra (INDIA)",
  },
  {
    label: "Email",
    value: "bhargavsable2002@gmail.com",
  },
  {
    label: "Mobile No.",
    value: "9322185908",
  },
];

const jobSummary =
  "I am an aspiring Software Engineer actively seeking opportunities to contribute to dynamic teams and innovative projects. Currently focused on expanding my expertise in web development, I possess a solid foundation in database management systems (DBMS) and proficiency in C++ coding. With a keen eye for problem-solving and a passion for technology, I am dedicated to continuous learning and growth. Eager to apply my skills and embark on new challenges, I am committed to making meaningful contributions while adapting quickly to evolving technologies and industry demands.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3>Software Engineer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3 className="pesonalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((items, i) => (
                <li key={i}>
                  <span className="title">{items.label}</span>
                  <span className="value">{items.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
          <div>
            <FaDev size={60} color="var(--theme-main-color)" />
          </div>
          <div>
            <DiNodejsSmall size={60} color="var(--theme-main-color)" />
          </div>
          <div>
            {" "}
            <FaDatabase size={60} color="var(--theme-main-color)" />
          </div>
          <div>
            {" "}
            <DiPython size={60} color="var(--theme-main-color)" />
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
