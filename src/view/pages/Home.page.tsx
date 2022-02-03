import React from "react";
import styled from "styled-components";
import Hero from "../Hero";
import HomeAbout from "../HomeAbout";
// import { Box } from '../../styles/reset.css';


const Home = () => {
  return (
    <Main>
      <Hero></Hero>
      <HomeAbout></HomeAbout>
    </Main>
  );
};
export default Home;

const Main = styled.main`
  height: 100%;
  margin-top: 5em;
  /* padding: 5rem 0; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

