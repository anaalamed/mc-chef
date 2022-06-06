import React from "react";
import styled from "styled-components";
import { Container, Main, Title } from '../../styles/reset.css';
import { devices } from '../../styles/responsive';
import { useTranslation } from 'react-i18next';
import { COLORS } from "../../styles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import rtl from "styled-components-rtl";
import ContactForm from '../ContactForm';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  const { t } = useTranslation();
  const contact = t("CONTACT", { returnObjects: true });


  return (
    <Main>
      <Title>{contact.title}</Title>

      <Box>
        <DetailsBox>
          <TitleText>{contact.meTitle}</TitleText>
          <Icons>
            <a href="https://www.facebook.com/anaalamed1/" target="_blank"><Icon icon={faFacebook} /></a>
            <a href="https://www.facebook.com/anaalamed1/" target="_blank"><Icon icon={faInstagram} /></a>
          </Icons>
          <a href="mailto:anaalamed@gmail.com" target="_blank" ><Icon icon={faEnvelope} /><Text>anaalamed@gmail.com</Text></a>
          <a href="tel:0542308919" target="_blank" ><Icon icon={faPhone} /><Text>054-2308919</Text></a>

        </DetailsBox>

        <ContactForm></ContactForm>
      </Box>
    </Main>
  );
};
export default About;



const Box = styled(Container)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 70%;
  color: ${COLORS.main};

  @media ${devices.mobile} {
    flex-direction: column;
  }

`;

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  /* padding: 0 20rem 0 ; */
  width: 50%;
  color: ${COLORS.main};
  /* background: red; */
  border: 3px solid ${COLORS.main};
  border-radius:  50px 10px 50px 10px;
  height: 400px;
  box-shadow: 10px 5px 5px grey;

 
  @media ${devices.mobile} {
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;

    ::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: #ccc;
        margin: 3rem;
    }
  }

`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin:  2rem 0;
  width: 40%;
  /* background: red; */


  a {
    color: ${COLORS.grey};
    /* color: #bababa; */
    text-decoration: none;

  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
  padding:  0 1rem;
  color: ${COLORS.hover};
  /* color: ${COLORS.orange}; */
:hover {
  color: ${COLORS.grey}
}
`;

const Text = styled.span`
  height: 60px;
  line-height: 60px;
  color: ${COLORS.main};
  text-decoration: none;
`;

const TitleText = styled.p`
font-size: 2rem;
text-align: center;
padding: 2.2rem 4.4rem;
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 3rem;
  position: absolute;
  bottom: 17rem;
  /* max-width: 100px; */
  /* max-height: 100px; */
  width: 300px;
  height: 200px;

  right: 5rem;

  /* ${rtl`
    left: 5rem;
  `} */

`;

const Img = styled.img`
  border-radius: 0.6rem;
  transform: scale(1);
  transition: 1s;
  /* max-height: 70vh; */
  width: 300px;

  :hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;