import React from 'react';
import styled from 'styled-components';
import ParagraphText from './paragraphText/ParagraphText';
import SectionTitle from './titleTexts/SectionTitle';

const NewLetterSectionStyles = styled.div`
  padding-top: 5rem;
  .newLetter__wrapper {
    background: var(--mediumSlateBlue);
    padding: 3rem 5rem;
    margin: 0 auto;
    text-align: center;
    max-width: 500px;
    border-radius: 1.2rem;
  }
  .newLetter__title {
    font-size: 4rem;
    margin-bottom: 0.2rem;
    color: var(--lightBlue_1);
  }
  .newLetter__text {
    color: var(--lightBlue_1);
    margin-bottom: 2rem;
  }
  .form__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    input {
      width: 100%;
      max-width: 300px;
      height: 40px;
      padding-left: 1rem;
      font-size: 1.6rem;
    }
    button {
      height: 40px;
      padding: 0 2rem;
      font-size: 1.6rem;
      border-radius: 5px;
      border: none;
      outline: none;
      cursor: pointer;
      color: var(--darkBlue_1);
      background-color: var(--lightBlue_1);
    }
  }
  @media screen and (max-width: 768px) {
    .newLetter__wrapper {
      padding: 3rem 2rem;
    }
    .form__wrapper {
      flex-direction: column;
    }
    input {
      font-size: 1.4rem;
    }
    button {
      font-size: 1.4rem;
    }
  }
`;
function NewLetterSection() {
  return (
    <NewLetterSectionStyles>
      <div className="container">
        <div className="newLetter__wrapper">
          <SectionTitle className="newLetter__title">
            Join Newsletter
          </SectionTitle>
          <ParagraphText className="newLetter__text">
            Get regular updates every week
          </ParagraphText>
          <form action="#" className="form__wrapper">
            <input placeholder="Enter  your email" type="text" name="letter" />
            <button type="button">Join</button>
          </form>
        </div>
      </div>
    </NewLetterSectionStyles>
  );
}

export default NewLetterSection;
