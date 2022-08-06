import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Main } from "../../styles/reset.css";
import Hero from "../Hero";
import HomeAbout from "../HomeAbout";
import Categories from "../Categories";
// import {writeJsonFile} from 'write-json-file';



const Home = () => {
  const { t } = useTranslation();
  const home = t("HOMEPAGE", { returnObjects: true });

  let myData;

  // useEffect(() => {
  //   console.log("fetch");

  //   fetch("https://api.airtable.com/v0/appj7djjCiW3MPlDD/menuRu?api_key=keyJ4NAnNssOD6noi")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setRecipes(data.records);
  //       myData = data.records;
  //       console.log(myData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });


  return (
    <Main>
      <Hero></Hero>
      <Categories></Categories>
      {/* <HomeAbout></HomeAbout> */}
    </Main>
  );
};
export default Home;



