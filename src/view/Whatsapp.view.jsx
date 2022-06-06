import React from "react";
import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { devices } from '../styles/responsive';
import rtl from "styled-components-rtl";




const Whatsapp = () => {

  return (
    <Box className="whatsappFixed">
      <a href="https://wa.me/+972545474923" target="_blank" ><Icon icon={faWhatsapp} /></a>
    </Box >
  );
};
export default Whatsapp;

const Box = styled.div`
  width: 80px;
  height: 50px;
  background: white;
  position: fixed;
  left: 0;
  top: 250px;
  z-index: 9999999;
  border-radius: 0 45% 45% 0;
  border: 1px solid grey;
  box-shadow: 2px 2px #888888;

  a {
    width: auto;
    height: auto;
    position: relative;

    svg {
    }
  }

  @media ${devices.mobile} {
    width: 50px;
    top: auto;
    bottom: 100px;

    a svg {
      left: 5px;
      top: 4px;
    }
  }

`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin: 0 auto;
  color: green;

  position: absolute;
  left: 20px;
  top: 4px;
  margin: auto;


  ${rtl`
    right: 20px;
  `}
`;
