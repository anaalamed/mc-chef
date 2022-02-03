import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Title } from './../styles/reset.css';

const HomeAbout = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Title>{t("ABOUT_ME")}</Title>

    </Box>
  );
};
export default HomeAbout;

const Box = styled.div`
  /* height: 100vh; */
`;

