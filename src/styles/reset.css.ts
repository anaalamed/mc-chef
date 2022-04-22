import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";
import { COLORS } from "./colors";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,body,#root{min-height:100%}
  html{font-size:10px;}
  body{
    /* direction: rtl; */
    /* border:deeppink 1px solid; */
    font-size:1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;


export const Main = styled.main`
  min-height: 76vh;
  margin-top: 5em;
  width: 100%;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  max-width: 30rem;
  margin: 1rem auto;
  line-height: 1.15;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  /* background-color: white; */
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  color: ${COLORS.main};
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);

  ::before {
    content: "";
    display: block;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/mc-taameyolam.appspot.com/o/icons%2Fknifes_icon.svg?alt=media&token=1993efae-d746-40a1-a0fb-ab1d3a29e0e4");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`;