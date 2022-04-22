import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Main } from "../../styles/reset.css";
import Hero from "../Hero";
import HomeAbout from "../HomeAbout";
import Categories from "../Categories";



const Home = () => {
  const { t } = useTranslation();
  const home = t("HOMEPAGE", { returnObjects: true });

  return (
    <Main>
      <Hero></Hero>
      <Categories></Categories>
      {/* <HomeAbout></HomeAbout> */}
    </Main>
  );
};
export default Home;



