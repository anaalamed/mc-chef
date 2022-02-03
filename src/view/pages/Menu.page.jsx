import React, { useState } from "react";
import styled from "styled-components";
import { Main, Container, Title } from '../../styles/reset.css';
import { devices } from '../../styles/responsive';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../styles/colors';

const Menu = () => {
  const { t } = useTranslation();
  const menu = t("MENU", { returnObjects: true });
  console.log(menu);

  const [currentCategory, setcurrentCategory] = useState("snacks")

  return (
    <Main>
      <Container>

        <Title>{menu.title}</Title>
        <Categories>
          <Category onClick={() => setcurrentCategory("snacks")}>{menu.snacks.title}</Category>
          <Category onClick={() => setcurrentCategory("soups")}>{menu.soups.title}</Category>
        </Categories>


        {menu[currentCategory].items.length !== 0 ? (
          menu[currentCategory].items.map(item => (
            <Item>
              <ItemTitle>{item.title} - </ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          ))
        ) : (null)}

      </Container>
    </Main >
  );
};
export default Menu;



const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media ${devices.mobile} {
  }
`;

const Category = styled.p`
  text-align: center;
  font-size: 2rem;
  padding: 2.2rem 4.4rem;
  color: ${COLORS.main};
  border-radius: 1rem 3rem 1rem 3rem;

  :hover { 
    background: ${COLORS.main};
    color: ${COLORS.hover};
    transition: 1s;
    transform: scale(1.1);
  }
`;

const Item = styled.p`
  margin: 1.3rem 0;
`;

const ItemTitle = styled.span`
  font-size: 1.7rem;
  color: red;
  font-weight: bold;
`;

const ItemDescription = styled.span`
  text-align: center;
  font-size: 1.3rem;
  padding: 0 2rem;
`;
