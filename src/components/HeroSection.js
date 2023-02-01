import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphText/ParagraphText';
import HeroTitle from './titleTexts/HeroTitle';
import HeroImg from '../assets/images/hero.png';

const HeroSectionStyles = styled.section`
  margin-top: 2rem;
  padding-top: calc(var(--header-height) + 1rem);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .hero--wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .hero--info {
    width: 40%;
  }
  .hero--img {
    width: 60%;
    img {
      object-fit: contain;
    }
  }
  .hero__title {
    margin-bottom: 1.5rem;
  }
  .hero--paragraph {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  @media screen and (max-width: 768px) {
    .hero--wrapper {
      flex-direction: column-reverse;
    }
    .hero--info {
      width: auto;
      max-width: 400px;
    }
    .hero--img {
      width: auto;
      max-width: 400px;
      img {
        object-fit: contain;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroSectionStyles id="hero">
      <div className="container">
        <div className="hero--wrapper">
          <div className="hero--info">
            <HeroTitle className="hero__title">
              A click of Artistic joy
            </HeroTitle>
            <ParagraphText className="hero--paragraph">
              Because every picture tells a story, let us help you tell yours.
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get in touch
            </PrimaryButton>
          </div>
          <div className="hero--img">
            <img src={HeroImg} alt="hero" />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
