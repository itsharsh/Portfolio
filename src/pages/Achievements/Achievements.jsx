import React from "react";
import { ArrowRight16 } from "@carbon/icons-react";

import Layout from "../../components/Layout";

import { SectionTitle, Paragraph } from "../../styles";
import {
  StyledAchievementItem,
  StyledTitle,
  StyledIssuer,
  StyledSummary,
  StyledLink,
} from "./styles";

const Achievements = ({ user }) => (
  <Layout user={user}>
    <SectionTitle>Publications</SectionTitle>
    <ul>
      {user.publications.map((publication, i) => (
        <StyledAchievementItem key={i}>
          <StyledTitle>
            {publication.name}
            <StyledLink
              href={publication.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              View <ArrowRight16 />
            </StyledLink>
          </StyledTitle>
          <StyledIssuer>{publication.publisher}</StyledIssuer>
          <Paragraph>{publication.releaseDate}</Paragraph>
          <StyledSummary>{publication.summary}</StyledSummary>
        </StyledAchievementItem>
      ))}
    </ul>
    <SectionTitle>Awards</SectionTitle>
    <ul>
      {user.awards.map((award, i) => (
        <StyledAchievementItem key={i}>
          <StyledTitle>{award.title}</StyledTitle>
          <StyledIssuer>{award.awarder}</StyledIssuer>
          <Paragraph>{award.date}</Paragraph>
          <StyledSummary>{award.summary}</StyledSummary>
        </StyledAchievementItem>
      ))}
    </ul>
  </Layout>
);

export default Achievements;
