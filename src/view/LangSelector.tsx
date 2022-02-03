import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LangSelector = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState('he');

    const changeLanguage = (event) => {
        setSelectedLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    return (
        <div onChange={changeLanguage}>
            <select >
                <option value="ru">RU</option>
                <option value="he">HE</option>
            </select>
        </div>
    )
}

export default LangSelector;