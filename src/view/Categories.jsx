import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Title } from '../styles/reset.css';
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORS } from "../styles/colors";
import '../styles/styles.css'

const Categories = () => {
  const { t } = useTranslation();
  const categories = t("GALLERY", { returnObjects: true });

  return (
    <Box>
      <TitleHome>{categories.title}</TitleHome>
      <Bullets>


        <Bullet>
          <Link to="/gallery/main">
            <ImgWrapper><Img className='imgHover' src="https://firebasestorage.googleapis.com/v0/b/mc-taameyolam.appspot.com/o/main%2FWhatsApp%20Image%202022-02-04%20at%2018.49.31%20(21).jpeg?alt=media&token=086c6d80-7a69-4316-adf3-066e3564751e"></Img></ImgWrapper>
            <Text>{categories.main}</Text>
          </Link>
        </Bullet>

        <Bullet>
          <Link to="/gallery/snacks">
            <ImgWrapper><Img className='imgHover' src="https://firebasestorage.googleapis.com/v0/b/mc-taameyolam.appspot.com/o/salads%2FWhatsApp%20Image%202022-02-04%20at%2018.38.35.jpeg?alt=media&token=3b04fa9d-5810-490f-8e2a-ae884ec80c44"></Img></ImgWrapper>
            <Text>{categories.snacks}</Text>
          </Link>
        </Bullet>

        <Bullet className="catDesserts">
          <Link to="/gallery/desserts">
            <ImgWrapper><Img className='imgHover' src="https://firebasestorage.googleapis.com/v0/b/mc-taameyolam.appspot.com/o/desserts%2FWhatsApp%20Image%202022-02-04%20at%2018.40.44%20(1).jpeg?alt=media&token=53bce8f0-48ad-4830-9780-047d57bfe121"></Img></ImgWrapper>
            <Text>{categories.desserts}</Text>
          </Link>
        </Bullet>

      </Bullets>


    </Box>
  );
};
export default Categories;

const Box = styled.div`
  margin: 2rem 0 10rem;
`;

const TitleHome = styled(Title)`
`;

const Bullets = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;


const Text = styled.p`
 text-align: center;
 color: ${COLORS.main};
 font-weight: 700;
 font-size: 4rem;
 height: 50px;
 line-height: 50px;
 position: absolute;
 left: 0;
 right: 0;
 background: rgba(155,155, 155,0.8);
 bottom: 0;
 `;


const ImgWrapper = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 400px;
  width: 100%;
  height: auto;
  /* border-radius: 1rem 3rem 0 0; */
  `;

const Img = styled.img`
  margin: 0 auto;
  width: 100%;
  height: auto;
  `

const Bullet = styled.div`
    width: 49.9%;
    position: relative;
    margin-bottom: 5px;
  
    &:hover ${Text}{
      /* background: rgba(55,55, 55,0.8); */
      color: ${COLORS.grey};
    }
    

  `;
