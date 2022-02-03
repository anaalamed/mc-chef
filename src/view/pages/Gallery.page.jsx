import React from "react";
import styled from "styled-components";
import { Main, Container, Title } from '../../styles/reset.css';
import { devices } from '../../styles/responsive';
import { useTranslation } from 'react-i18next';

// import Example from '../Example'

const About = () => {
    const { t } = useTranslation();
    const gallery = t("GALLERY", { returnObjects: true });

    return (
        <Main>
            <Container>

                <Title>{gallery.title}</Title>
                <Box>
                    <ImgWrapper><Img src="assets/images/chef.jpeg"></Img></ImgWrapper>
                    <ImgWrapper><Img src="assets/images/1.jpeg"></Img></ImgWrapper>
                    <ImgWrapper><Img src="assets/images/2.jpeg"></Img></ImgWrapper>
                    <ImgWrapper><Img src="assets/images/hero.jpeg"></Img></ImgWrapper>

                    <ImgWrapper><Img src="assets/images/1.jpeg"></Img></ImgWrapper>
                    <ImgWrapper><Img src="assets/images/hero.jpeg"></Img></ImgWrapper>
                    <ImgWrapper><Img src="assets/images/2.jpeg"></Img></ImgWrapper>
                    <ImgWrapper><Img src="assets/images/chef.jpeg"></Img></ImgWrapper>

                </Box>
            </Container>
        </Main>
    );
};
export default About;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* justify-content: center;
  align-items: center; */

  @media ${devices.mobile} {
  flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 3rem;
  max-width: 400px;
  height: 300px;
  margin: 1rem;
`;

const Img = styled.img`
  border-radius: 0.6rem;
  transform: scale(1);
  transition: 1s;
  max-height: 300px;

  :hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.6rem;
  padding: 0 2rem;
  width: 50%;
`;
