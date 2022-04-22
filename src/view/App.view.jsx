import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./pages/Home.page";
import TopBar from "./TopBar.view";
import Footer from "./Footer.view";
import Newsletter from "./Newsletter.view";
import About from "./pages/About.page";
import Menu from "./pages/Menu.page";
import Contact from "./pages/Contact.page";
import Gallery from "./pages/Gallery.page";


import LangSelector from "./LangSelector";
import { COLORS } from '../styles/colors';
import { useTranslation } from "react-i18next";


const App = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  console.log(i18n.dir());
  let a = "aaaa";

  return (
    <React.Fragment>
      {/* <LangSelector></LangSelector> */}
      <Box>
        <TopBar />

        <Route path="/" exact component={Home} />
        {/* <Route path="/quotes" exact component={Joker} />/ */}
        <Route path="/about" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/gallery/:category" component={Gallery} />
        <Newsletter></Newsletter>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

{/* <React.Fragment>
<LangSelector />
<div className="app">
    <HelloWorld />
</div>
</React.Fragment> */}
export default App;

const Box = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.bg};
`;
