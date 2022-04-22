import React from "react";
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { COLORS } from "../styles/colors";

const Hero = () => {

  return (
    <Box>

      {/* <Row>
        <ImgWrapper><Img src="assets/images/2.jpeg"></Img></ImgWrapper>
        <Title>MC  </Title>
      </Row>
      <Title style={{ transform: "none" }}>מתוך האש</Title>
      <Row>
        <RowTitle>  באור ובאש</RowTitle>
        <ImgWrapper><Img src="assets/images/5.jpeg"></Img></ImgWrapper>
        <ImgWrapper><Img style={{ maxHeight: "600px" }} src="assets/images/1.jpeg"></Img></ImgWrapper>
      </Row> */}

      <AliceCarousel
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        // autoHeight={true}
        // autoWidth={true}
        autoPlayStrategy="action"
      >
        <img src="https://firebasestorage.googleapis.com/v0/b/mc-taameyolam.appspot.com/o/icons%2FWhatsApp%20Image%202022-01-28%20at%2017.54.24.jpeg?alt=media&token=fae68b51-135f-4f19-8eae-beae4d2c2f43" className="sliderimg" />
        <img src="assets/images/2.jpeg" className="sliderimg" />
        <img src="assets/images/5.jpeg" className="sliderimg" />
      </AliceCarousel>
    </Box >
  );
};
export default Hero;

const Box = styled.div`
  /* height: 100vh; */
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Row = styled.div`
  /* height: 100vh; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ImgWrapper = styled.div`
  border-radius: 5rem;
  /* max-height: 400px; */

`;

const Img = styled.img`
  border-radius: 5rem;
`;

const Title = styled.h1`
  /* margin-bottom: 5rem; */
  /* line-height: 1.15; */
  color: ${COLORS.main};
  font-size: 25rem;
  font-family: sans-serif;
  font-weight: normal;
  text-align: center;
  padding: 2.2rem 4.4rem;
  cursor: pointer;
  font-family: 'Brush Script MT', cursive;
  text-align: center;
  transform: rotate(-30deg);
`;

const RowTitle = styled.h1`
  /* margin-bottom: 5rem; */
  /* line-height: 1.15; */
  color: ${COLORS.main};
  font-size: 10rem;
  font-family: sans-serif;
  font-weight: normal;
  text-align: center;
  padding: 2.2rem 4.4rem;
  cursor: pointer;
  font-family: 'Brush Script MT', cursive;
  text-align: center;
  transform: rotate(-30deg);
`;

const Description = styled.p`
  line-height: 1.15;
  text-align: center;
  font-size: 2.6rem;
  max-width: 100rem;
  color: #555;

`;
