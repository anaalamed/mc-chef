import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { Main, Container, Title } from '../../styles/reset.css';
import { useTranslation } from 'react-i18next';
import { devices } from '../../styles/responsive';
// import { photos } from "../../assets/photos";
import { snacks, main, desserts } from "../../assets/photos2";

import '../../styles/styles.css'
import { useParams } from "react-router-dom";


const About = () => {
  let { category } = useParams();
  const { t } = useTranslation();
  const gallery = t("GALLERY", { returnObjects: true });
  let photosToShow = [];
  console.log(gallery)

  const [activeIndex, setactiveIndex] = useState(0);
  const [currentCategoryName, setcurrentCategoryName] = useState("snacks");

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(({ photo, index }, event) => {
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
    case "desserts":
      photosToShow = desserts;
      break;
    default:
      photosToShow = snacks.concat(main).concat(desserts);
      break;
  }

  return (
    <Main>
      <Container>

        <Title>{gallery.title}</Title>

        {/* <Categories>
        {gallery !== 0 ? (menu.categories.map((cat, index) => (
          <Category onClick={() => { setcurrentCategoryName(cat.id); setactiveIndex(index) }} key={index}
            className={`${index == activeIndex ? "active" : ""}`}
          >{cat.title}</Category>))) : null}
        </Categories> */}



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
