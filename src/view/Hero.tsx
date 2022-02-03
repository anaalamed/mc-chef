import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import '../assets/images/'
const Hero = () => {

  return (
    <Box>
      <HeroImg src='/assets/images/hero.jpeg'></HeroImg>

    </Box>
  );
};
export default Hero;

const Box = styled.div`
  /* height: 100vh; */
`;

const HeroImg = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  margin-bottom: 5rem;
  line-height: 1.15;
  color: #555;
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  text-align: center;
  background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
  cursor: pointer;
`;
const Description = styled.p`
  line-height: 1.15;
  text-align: center;
  font-size: 2.6rem;
  max-width: 100rem;
  color: #555;
  ${({ showQuotes }) =>
    showQuotes
      ? `
    ::before,
    ::after {
      content: '"';
      font-size: 5rem;
    }
  `
      : ""};
`;
