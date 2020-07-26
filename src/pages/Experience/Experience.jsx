import React from "react";
import moment from "moment";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph } from "../../styles";
import {
  StyledWorkItem,
  StyledJobTitle,
  StyledWorkTitle,
  StyledHighlight,
} from "./styles";

const Experience = ({ user }) => (
  <Layout user={user}>
    <div>
      <SectionTitle>Experience</SectionTitle>
      <ul>
        {user.work.map((work, i) => (
          <StyledWorkItem key={i}>
            <StyledJobTitle>{work.position}</StyledJobTitle> ({" "}
            {moment(work.startDate).format("MMM, YYYY")} to{" "}
            {moment(work.endDate).format("MMM, YYYY")})
            <div>
              <StyledWorkTitle>{work.company}</StyledWorkTitle>
              <span>, {work.location}</span>
              {work.summary && <Paragraph>{work.summary}</Paragraph>}
            </div>
            <div>
              <ul>
                {work.highlights.map((highlight, i) => (
                  <StyledHighlight key={i}>{highlight} </StyledHighlight>
                ))}
              </ul>
            </div>
          </StyledWorkItem>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Experience;
