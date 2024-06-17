import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="resume__image">
        <iframe
          src="/myresume.pdf"
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="My Resume"
        />
      </div>
    </section>
  );
};

export default Resume;
