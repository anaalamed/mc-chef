import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
// import { Title } from "../styles/reset.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <Box>
      <Title1>טעמי עולם MC </Title1>
      {/* <Title2>Contact me at: </Title2> */}
      <Icons>
        <a href="https://wa.me/+972545474923" target="_blank" ><Icon icon={faWhatsapp} /></a>
        <a href="https://www.facebook.com/anaalamed1/" target="_blank"><Icon icon={faFacebook} /></a>
        <a href="https://www.facebook.com/anaalamed1/" target="_blank"><Icon icon={faInstagram} /></a>
        <a href="mailto:anaalamed@gmail.com" target="_blank" ><Icon icon={faEnvelope} /></a>
      </Icons>

      <p style={{ textAlign: "center" }}>Copyright © 2022 MC TaameyOlam. All Rights Reserved</p>
    </Box>
  );
};
export default Footer;

const Box = styled.footer`
  width: 100%;
  /* height: 100px; */
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
  background: #fff;
  position: relative;
  bottom: 0;
  padding: 2rem 0 2rem;
`;

const Title1 = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: ${COLORS.main};
  margin: 1rem;
`;

const Icons = styled.div`
  display: flex;
  margin: 0 auto 1rem;

  a {
    color: ${COLORS.hover};

    :hover {
      color: ${COLORS.grey}
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  padding: 1rem;
`;