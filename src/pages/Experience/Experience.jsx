import React from "react";
import moment from "moment";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph, StyledTile } from "../../styles";
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
          <StyledTile key={i}>
            <StyledWorkItem>
              <StyledJobTitle>{work.position}</StyledJobTitle> 
              <div style={{ color: '#00d1b2', fontWeight: 'bold', marginBottom: '1rem' }}>
                {moment(work.startDate).format("MMM YYYY")} to{" "}
                {work.endDate
                  ? moment(work.endDate).format("MMM YYYY")
                  : "Present"}
              </div>
              
              <div>
                <StyledWorkTitle>{work.company}</StyledWorkTitle>
                <span style={{ color: '#8d8d8d' }}>, {work.location}</span>
                {work.summary && <Paragraph style={{ marginTop: '1rem', color: '#e0e0e0' }}>{work.summary}</Paragraph>}
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {work.highlights.map((highlight, i) => (
                    <StyledHighlight key={i}>
                      <span style={{ color: '#00d1b2', marginRight: '0.5rem' }}>▹</span>
                      {highlight} 
                    </StyledHighlight>
                  ))}
                </ul>
              </div>
            </StyledWorkItem>
          </StyledTile>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Experience;
