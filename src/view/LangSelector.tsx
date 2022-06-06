import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { COLORS } from '../styles/colors';
import { devices } from '../styles/responsive';



const LangSelector = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState('he');

    const changeLanguage = (event) => {
        setSelectedLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    return (
        <Box>

            <div className="custom-select" onChange={changeLanguage}>
                <Select className="a" >
                    <option value="he">HE</option>
                    <option value="ru">RU</option>
                </Select>
            </div>
        </Box>
    )
}

export default LangSelector;

const Box = styled.div`
  /* align-self: flex-end; */
  /* justify-self: flex-start; */
`;

const Select = styled.select`
  background: ${COLORS.main};
  color: white;
  height: 25px;
  padding: 0 0.5rem;
  margin: 0 2rem;

  @media ${devices.mobile} {
      margin: 0
  }

  
  /* :hover {
      background: ${COLORS.hover};
    } */

`;