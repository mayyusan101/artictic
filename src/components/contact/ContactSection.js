import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphText/ParagraphText';
import SectionTitle from '../titleTexts/SectionTitle';
import FormField from './FormField';

const ContactSectionStyles = styled.section`
  padding: 10rem 0;
  .contact__info {
    text-align: center;
    margin-bottom: 4rem;
  }
  .contact__title {
    font-weight: 800;
    margin: 0;
  }
  .form__wrapper {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 768px) {
    .form__wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .contact__field--fullWidth {
      grid-column: span 1;
    }
  }
`;
function ContactSection() {
  return (
    <ContactSectionStyles id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <SectionTitle className="contact__title">Get In Touch</SectionTitle>
            <ParagraphText>We would love to hear from you.</ParagraphText>
          </div>
          <form action="#" className="form__wrapper">
            <FormField
              className="contact__field--fullWidth"
              type="text"
              label="name"
              name="name"
              id="name"
              required
            />
            <FormField
              type="email"
              label="Email"
              name="email"
              id="email"
              required
            />
            <FormField
              type="text"
              label="Subject"
              name="subject"
              id="subject"
              required
            />
            <FormField
              className="contact__field--fullWidth"
              label="Message"
              name="message"
              id="message"
              rows="6"
            />
          </form>
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
