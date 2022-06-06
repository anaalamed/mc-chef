import React, { useState } from "react";
import styled from "styled-components";
import { Main, Container, Title } from '../../styles/reset.css';
import { devices } from '../../styles/responsive';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../styles/colors';
import rtl from "styled-components-rtl";


const Menu = () => {
  const { t } = useTranslation();
  const menu = t("MENU", { returnObjects: true });

  const [activeIndex, setactiveIndex] = useState(0);
  const [currentCategoryName, setcurrentCategoryName] = useState("salats");

  const curCategory = menu.categories.find(obj => obj.id === currentCategoryName);
  return (
    <Main>
      <Container style={{ position: "relative" }} >

        <Title>{menu.title}</Title>
        <Categories>
          {menu.categories.length !== 0 ? (menu.categories.map((cat, index) => (
            <Category onClick={() => { setcurrentCategoryName(cat.id); setactiveIndex(index) }} key={index}
              className={`${index == activeIndex ? "active" : ""}`}
            >{cat.title}</Category>))) : null}
        </Categories>

        {curCategory.description ? (<div>{curCategory.description}</div>) : null}

        <MenuBox>
          {curCategory.items.length !== 0 ? (
            curCategory.items.map((item, index) => (
              <Item key={index}>
                <div>
                  <ItemTitle>{item.title} </ItemTitle>
                  {item.description ? (<ItemDescription> {item.description}</ItemDescription>) : null}
                </div>
                <ItemPrice>{item.price}</ItemPrice>
              </Item>
            ))
          ) : (null)}
        </MenuBox>

      </Container>
    </Main >
  );
};
export default Menu;



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

const MenuBox = styled.div`
  padding-bottom: 5rem;

  ::after {
    /* content: "";
    display: block;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/mc-taameyolam.appspot.com/o/icons%2Fknifes_icon.svg?alt=media&token=1993efae-d746-40a1-a0fb-ab1d3a29e0e4");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    margin-left: auto;
    position: absolute;
    right: 0;
    left: auto;
    bottom: 0px; */

    /* ${rtl`
      left: 0;
      right: auto;
    `} */
  }
`;

const ItemTitle = styled.span`
  font-size: 2rem;
  color: ${COLORS.main};
  font-weight: bold;
`;

const ItemDescription = styled.span`
  text-align: center;
  font-size: 1.5rem;
  /* padding: 0 2rem; */
`;

const ItemPrice = styled.span`
  font-size: 2rem;
  color: ${COLORS.main};
  font-weight: bold;
  margin-left: 10px;
  margin-right: 0;

  ${rtl`
    margin-right: 10px;   
    margin-left: 0;
  `}
`;

const Item = styled.div`
  margin: 1.3rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  
  :hover {
    /* background: ${COLORS.hover}; */
    background: rgba(	88,	126,	118, 0.3);
    border-radius: 1rem 3rem 1rem 3rem;
  }
  :hover ${ItemTitle},  :hover ${ItemDescription} {
    color: #fff;
  }
`;




