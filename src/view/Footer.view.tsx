import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
// import { Title } from "../styles/reset.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <Box>
      <Title1>טעמי עולם MC </Title1>
      {/* <Title2>Contact me at: </Title2> */}
      <Icons>
        <a href="https://www.facebook.com/anaalamed1/" target="_blank"><Icon icon={faFacebook} /></a>
        <a href="https://www.facebook.com/anaalamed1/" target="_blank"><Icon icon={faInstagram} /></a>
        <a href="mailto:anaalamed@gmail.com" target="_blank" ><Icon icon={faEnvelope} /></a>
      </Icons>

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
`;

const Title1 = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: ${COLORS.main};
  margin: 1rem;
`;

const Title2 = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${COLORS.main};
`;

const Icons = styled.div`
  display: flex;

  a {
    color: ${COLORS.grey};
    /* color: #bababa; */

    :hover {
      color: ${COLORS.main}
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  padding: 1rem;
`;