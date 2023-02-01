import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphText/ParagraphText';

const TeamMemberItemStyles = styled.div`
  .member__img {
    margin-bottom: 1.5rem;
    img {
      border-radius: 2rem;
    }
  }
  .member__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  @media only screen and (max-width: 768px) {
    .member__img {
      margin-bottom: 1rem;
      img {
        max-width: 250px;
      }
    }
  }
`;
function TeamMemberItem({ img, name, title }) {
  return (
    <TeamMemberItemStyles>
      <div className="member__img">
        <img src={img} alt="member" />
      </div>
      <ParagraphText className="member__name">{name}</ParagraphText>
      <ParagraphText className="member__title">{title}</ParagraphText>
    </TeamMemberItemStyles>
  );
}

export default TeamMemberItem;
