// import React, { useState } from 'react';
import {
  Grid, Column,
  // Search
} from '@carbon/react';
import {
  Catalog,
  // Idea, Light, Growth, Car, Chemistry, Finance
} from '@carbon/icons-react';
import styled from 'styled-components';
import {
  Container, SectionHeader, theme,
  // StyledTile,
  // TechPill
} from '../../styles';
// import { treasureBoxData, treasureCategories } from '../../data/treasureBoxData';

const TreasureHero = styled.div`
  padding: 0 0 3rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 3rem;
`;

// const FilterBar = styled.div`
//   display: flex;
//   gap: 0.75rem;
//   margin-bottom: 2.5rem;
//   overflow-x: auto;
//   padding-bottom: 1rem;

//   &::-webkit-scrollbar {
//     display: none;
//   }
//   scrollbar-width: none;
// `;

// const FilterChip = styled.button`
//   background: ${props => props.$active ? `${theme.colors.primary}20` : theme.colors.surface};
//   color: ${props => props.$active ? theme.colors.primary : theme.colors.textMuted};
//   border: 1px solid ${props => props.$active ? theme.colors.primary : theme.colors.border};
//   padding: 0.6rem 1.5rem;
//   border-radius: 30px;
//   font-family: ${theme.fonts.technical};
//   font-size: 0.85rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   white-space: nowrap;

//   &:hover {
//     background: ${props => props.$active ? `${theme.colors.primary}30` : theme.colors.surfaceTonal};
//     border-color: ${props => props.$active ? theme.colors.primary : theme.colors.textMuted};
//     transform: translateY(-2px);
//   }
// `;

// const TreasureCard = styled(StyledTile)`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 4px;
//     height: 100%;
//     background: ${props => props.$categoryColor || theme.colors.primary};
//     opacity: 0.8;
//   }

//   .meta {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 1rem;
//     font-size: 0.75rem;
//     font-family: ${theme.fonts.technical};
//     color: ${theme.colors.textMuted};
//     text-transform: uppercase;
//   }

//   h3 {
//     font-size: 1.4rem;
//     margin-bottom: 1rem;
//     line-height: 1.3;
//   }

//   p {
//     color: ${theme.colors.textMuted};
//     line-height: 1.6;
//     font-size: 0.95rem;
//     margin-bottom: 1.5rem;
//     flex-grow: 1;
//   }

//   .tags {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 0.5rem;
//   }
// `;

// const categoryMeta = {
//   Technical: { color: "#0F62FE", icon: <Idea size={24} /> },
//   Life: { color: "#24A148", icon: <Growth size={24} /> },
//   Financial: { color: "#F1C21B", icon: <Finance size={24} /> },
//   Cars: { color: "#DA1E28", icon: <Car size={24} /> },
//   Cooking: { color: "#FF832B", icon: <Chemistry size={24} /> },
//   "Internet Gem": { color: "#8A3FFC", icon: <Light size={24} /> },
//   default: { color: "#393939", icon: <Catalog size={24} /> }
// };

const TreasureBox = () => {
  return (
    <Container className="fade-in">
      <TreasureHero>
        <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>Treasure Box</SectionHeader>
        <p style={{ fontSize: '1.25rem', color: theme.colors.textMuted, maxWidth: '700px', lineHeight: '1.6' }}>
          A digital garden of my learnings, insights, and discoveries across software, life, finance, and everything in between.
        </p>
      </TreasureHero>

      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ textAlign: 'center', padding: '6rem 0', color: theme.colors.textMuted }}>
            <Catalog size={64} style={{ opacity: 0.2, marginBottom: '1.5rem', color: theme.colors.primary }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: theme.colors.text }}>The Vault is locked.</h3>
            <p style={{ fontSize: '1.1rem' }}>I am currently migrating my digital journal here. Check back soon for the keys.</p>
          </div>
        </Column>
      </Grid>
    </Container>
  );
};

export default TreasureBox;
