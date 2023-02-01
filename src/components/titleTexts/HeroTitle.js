import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const TitleStyles = styled.h1`
  text-transform: capitalize;
  font-size: 5.5rem;
  font-weight: 900;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  @media screen and (max-width: 768px) {
    font-size: 4rem;
    border-color: aliceblue;
  }
`;
function HeroTitle({ children, ...rest }) {
  return <TitleStyles {...rest}>{children}</TitleStyles>;
}

export default HeroTitle;
