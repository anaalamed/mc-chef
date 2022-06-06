import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { Main, Container, Title } from '../../styles/reset.css';
import { useTranslation } from 'react-i18next';
import { devices } from '../../styles/responsive';
// import { photos } from "../../assets/photos";
import { snacks, main, conditory } from "../../assets/photos2";
import { COLORS } from '../../styles/colors';
import { Link } from "react-router-dom";



import '../../styles/styles.css'
import { useParams } from "react-router-dom";


const About = () => {
  let { category } = useParams();
  const { t } = useTranslation();
  const gallery = t("GALLERY", { returnObjects: true });

  let photosToShow = [];

  console.log(window.location.href.includes("gallery"))
  const arr = [gallery.main, gallery.snacks, gallery.conditory];
  console.log(arr);
  const [activeIndex, setactiveIndex] = useState(0);
  const [currentCategoryName, setcurrentCategoryName] = useState("main");


  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  switch (category) {
    case "snacks":
      photosToShow = snacks;
      break;
    case "main":
      photosToShow = main;
      break;
    case "conditory":
      photosToShow = conditory;
      break;
    default:
      photosToShow = snacks.concat(main).concat(conditory);
      break;
  }

  return (
    <Main>
      <Container>

        <Title>{gallery.title}</Title>


        <Categories>
          {arr.length !== 0 ? (arr.map((cat, index) => (
            <Category onClick={() => { setcurrentCategoryName(cat); setactiveIndex(index) }} key={index}
              className={`${index == activeIndex ? "active" : ""}`}
            >
              <Slink to={`/gallery/${cat.toLowerCase()}`}>{cat}</Slink>
            </Category>))) : null}
        </Categories>



        <Gallery photos={photosToShow} direction={"column"} margin={3} onClick={openLightbox} />;
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photosToShow.map((x, index) => ({
                  key: index,
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>


      </Container>
    </Main>
  );
};
export default About;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

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

  @media ${devices.mobile} {
    max-width: 280px;
    margin: 1rem auto;
  }
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

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  @media ${devices.mobile} {
  }
`;

const Category = styled.p`
  text-align: center;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 1rem;
  /* color: ${COLORS.main}; */
  color: #fff;
  border-radius: 1rem 3rem 1rem 3rem;
  background: ${COLORS.hover};
  font-weight: 700;

  Link {
    color: #fff;

  }

  :hover { 
    background: ${COLORS.grey};
    /* color: ${COLORS.orange}; */
    transition: 1s;
    transform: scale(1.1);
  }

  @media ${devices.mobile} {
   font-size: 1rem;
   margin: 0.5rem 0;
  }
`;

const Slink = styled(Link)`
  color: #fff;
  text-decoration: none;
  
`