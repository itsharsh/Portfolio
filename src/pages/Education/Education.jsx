import React from "react";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph } from "../../styles";
import { StyledEducationItem, StyledInstitute, StyledDegree } from "./styles";

const Education = ({ user }) => (
  <Layout user={user}>
    <SectionTitle>Education</SectionTitle>
    <ul>
      {user.education.map((education, i) => (
        <StyledEducationItem key={i}>
          <StyledInstitute>{education.position}</StyledInstitute>
          <div>
            <StyledDegree>
              {education.studyType}, {education.area}
            </StyledDegree>{" "}
            <span>&sdot;</span>
            <span>
              {education.start.year} to {education.end.year}
            </span>
          </div>
          <Paragraph>{education.description.replace("\n\n", "\n")}</Paragraph>
        </StyledEducationItem>
      ))}
    </ul>
  </Layout>
);

export default Education;
