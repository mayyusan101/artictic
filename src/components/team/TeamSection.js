import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphText/ParagraphText';
import SectionTitle from '../titleTexts/SectionTitle';
import TeamMemberItem from './TeamMemberItem';
// team member images
import teamMember1 from '../../assets/images/team1.png';
import teamMember2 from '../../assets/images/team2.png';
import teamMember3 from '../../assets/images/team3.png';

const TeamSectionStyles = styled.section`
  padding-bottom: 6rem;
  .team_text {
    color: var(--mediumSlateBlue);
    font-weight: 600;
  }
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__title {
    max-width: 250px;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media screen and (max-width: 768px) {
    .team__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
    .team__title {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
      text-align: center;
    }
  }
`;
function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__title">
            <ParagraphText className="team_text">Team Members</ParagraphText>
            <SectionTitle>The best team available</SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem
              img={teamMember1}
              name="Rasu"
              title="Photo Editor"
            />
            <TeamMemberItem
              img={teamMember2}
              name="Shaif Arfan"
              title="Photographer"
            />
            <TeamMemberItem
              img={teamMember3}
              name="Ayan Bilai"
              title="Photographer"
            />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
