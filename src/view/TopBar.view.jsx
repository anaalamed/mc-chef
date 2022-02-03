import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/root.reducer";
import LangSelector from './LangSelector'
import { COLORS } from "../styles/colors";
import { useTranslation } from "react-i18next";


const TopBar = () => {
  const { t } = useTranslation();
  const topbar = t("TOPBAR", { returnObjects: true });

  return (
    <Header>
      <SLink to="/">
        <Logo src="/assets/images/logo.jpeg" alt="logo" />
      </SLink>

      <Menu>
        <LangSelector></LangSelector>
        <SLink to="/about">{topbar.about}</SLink>
        <SLink to="/menu">{topbar.menu}</SLink>
        <SLink to="/gallery">{topbar.gallery}</SLink>
        <SLink to="/contact">{topbar.contact}</SLink>
      </Menu>
    </Header>
  );
};
export default TopBar;

const Header = styled.header`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: white;
  position: fixed;
  left: 0;
  right: 0;
  padding:  0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5em;
  z-index: 100;
`;

const SLink = styled(Link)`
  color: ${COLORS.main};
  text-decoration: none;
  margin-right: 2rem;
  font-weight: 700;
  font-size: 2.5rem;

  :hover {
    text-decoration: underline;
    color: ${COLORS.hover};
    transition: 0.5s;
  }
`;

const Logo = styled.img`
  height: 7rem;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
`;
