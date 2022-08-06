import React from "react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Title } from '../styles/reset.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORS } from "../styles/colors";
import '../styles/styles.css'

import axios from 'axios';

const HomeAbout = () => {
  const { t } = useTranslation();
  const home = t("HOMEPAGE", { returnObjects: true });

}


return (
  <Box>
    <TitleHome>{home.about}</TitleHome>
    <Bullets>

      <Bullet>
        {/* <Icon icon={faCookie} /> */}
        <ImgWrapper><Img className='imgHover' src="assets/images/makaroni.jpeg"></Img></ImgWrapper>
        <Text>{home.conditory}</Text>
      </Bullet>

      <Bullet>
        {/* <Icon icon={faCookie} /> */}
        <ImgWrapper><Img className='imgHover' src="assets/images/taamim2.jpeg"></Img></ImgWrapper>
        <Text>{home.taamim}</Text>
      </Bullet>

      <Bullet>
        {/* <Icon icon={faCookie} /> */}
        <ImgWrapper><Img className='imgHover' src="assets/images/gurme4.jpeg"></Img></ImgWrapper>
        <Text>{home.gurme}</Text>
      </Bullet>


    </Bullets>


  </Box>
);
// };
export default HomeAbout;

const Box = styled.div`
  margin: 2rem 0 10rem;

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: #ccc;
  }
`;
const TitleHome = styled(Title)`
  /* ::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: #ccc;
    position: relative;
    top: 20px;
  } */
`;

const Bullets = styled.div`
  display: flex;
  justify-content: space-around;
`;


const Text = styled.p`
 text-align: center;
 margin: 1rem;
 color: ${COLORS.main};
 font-weight: 700;
 font-size: 4rem;
 `;

const Icon = styled(FontAwesomeIcon)`
  font-size: 70px;
  padding: 1rem;
  `;

const ImgWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 1rem 3rem 1rem 3rem;
  `;

const Img = styled.img`
  max-height: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  `

const Bullet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: ${COLORS.hover};
    /* opacity: 0.5; */
    border: 1px solid ${COLORS.grey};
    border-radius: 1rem 3rem 1rem 3rem;
  
    &:hover{
      background: ${COLORS.grey};
    }
    &:hover ${Text}{
      /* color: ${COLORS.hover}; */
    }
  `;
