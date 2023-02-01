import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphText/ParagraphText';

const ServiceItemStyles = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 12px;
  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    background-color: var(--mediumSlateBlue);
    width: fit-content;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--white);
    svg {
      width: 60%;
    }
  }
  .title {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5em;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  &:hover {
    background-color: var(--mediumSlateBlue);
    .icon {
      background-color: var(--lightBlue_1);
      color: var(--mediumSlateBlue);
    }
    .title {
      color: var(--lightBlue_1);
    }
    .desc {
      color: var(--lightBlue_1);
    }
  }
  @media only screen and (max-width: 768px) {
    background-color: var(--mediumSlateBlue);
    .icon {
      background-color: var(--lightBlue_1);
      color: var(--mediumSlateBlue);
    }
    .title {
      color: var(--lightBlue_1);
    }
    .desc {
      color: var(--lightBlue_1);
    }
    .title {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }
`;
function ServiceItem({ icon, title, desc }) {
  return (
    <ServiceItemStyles>
      <div className="icon">{icon}</div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="desc">
        <ParagraphText>{desc}</ParagraphText>
      </div>
    </ServiceItemStyles>
  );
}

export default ServiceItem;
