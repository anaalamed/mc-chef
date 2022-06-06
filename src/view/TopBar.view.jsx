import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/root.reducer";
import LangSelector from './LangSelector'
import { COLORS } from "../styles/colors";
import { useTranslation } from "react-i18next";
import { Container } from "../styles/reset.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { devices } from '../styles/responsive';


const TopBar = () => {
  const { t } = useTranslation();
  const topbar = t("TOPBAR", { returnObjects: true });
  const [dropVisible, setdropVisible] = useState(false);
  console.log(dropVisible);

  return (
    <Header>
      <Box>
        <MenuWrapper>
          <LangSelector style={{}} ></LangSelector>

          <Icon icon={faBars} onClick={() => setdropVisible(!dropVisible)} />

          <Menu>
            <SLink to="/about">{topbar.about}</SLink>
            <SLink to="/menu">{topbar.menu}</SLink>
            <SLink to="/gallery/main">{topbar.gallery}</SLink>
            <SLink to="/contact">{topbar.contact}</SLink>
          </Menu>

        </MenuWrapper>

        <SLink to="/">
          <Logo src="/assets/images/logo.jpeg" alt="logo" />
        </SLink>

        <MenuDrop visible={dropVisible} onClick={() => setdropVisible(false)}>
          <SLink to="/about">{topbar.about}</SLink>
          <SLink to="/menu">{topbar.menu}</SLink>
          <SLink to="/gallery">{topbar.gallery}</SLink>
          <SLink to="/contact">{topbar.contact}</SLink>
        </MenuDrop>
      </Box>
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
  height: 5em;
  z-index: 100;
`;

const Box = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.mobile} {
    width: 100%;
  }
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

  @media ${devices.mobile} {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 7rem;
  cursor: pointer;
`;
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    display: none;
  }
`;

const MenuDrop = styled.div`
  background: ${COLORS.bg};
  border: 1px solid #ccc;
  /* height: 300px; */
  width: 100%;
  display: none;
  position: absolute;
  flex-direction: column;
  top: 8rem;
  right: 0;
  box-shadow: 10px 5px 5px grey;

  @media ${devices.mobile} {
    display: ${props => props.visible ? "flex" : "none"};
  }
`;


const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  padding: 1rem;
  color: ${COLORS.main};
  display: none;

  @media ${devices.mobile} {
    display: block;
  }
`;