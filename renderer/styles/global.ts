import styled, { createGlobalStyle } from "styled-components";

import { createTheme } from "@material-ui/core/styles";
import { shade } from "polished";

export default createGlobalStyle`
  :root {
    --white: #ffffff;
    --primary: #FFAABA;
    --secondary: #FDC4CE;
    --yellow: #FDC800;
    --gray: #DDDDDD;
    --background: #F7F7F7;
    --textHeader: #6D6D6D;
    --text: #414143;
    --textSecondary: #717171;
    --green: #53A875;
    --blue: #2e5de8;
    --orange: #f29a4e;
  }

  html {
    scroll-behavior: smooth;
  }

  :-moz-selection { /* Code for Firefox */
    position: relative;
    background: var(--white);
    /* height: 100vh;
    width: 100vw; */
    overflow: auto;
    overflow-x: hidden;

    font-family: Montserrat, Arial, Helvetica Neue, sans-serif;
    color: var(--text);
  }
  ::selection {
    color: #ffffff;
    background: #FFAABA;
  }

  body {
    position: relative;
    /* height: 100vh;
    width: 100vw; */
    overflow: auto;
    overflow-x: hidden;

    font-family: Montserrat, Arial, Helvetica Neue, sans-serif;
    color: var(--text);
  }

  h2 {
    color: var(--textSecondary);
  }

  a {
    cursor: pointer;

    display: block;
    text-decoration: none;
  }

  span.focusRed {
    font-weight: bold;
    color: red;
  }

  button {
    cursor: pointer;

    background: none;
    border: 0;
  }

  input, textarea, button {
    font-family: "Montserrat", Arial, Helvetica Neue, sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
  
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }

  .divisor {
    background: var(--white);
    width: 15rem;
    height: .01rem;
  }

  .leftSpacing {
    margin-left: 2rem;
  }

  .circle {
    height: 1.5rem;
    width: 1.5rem;

    border-radius: 50%;
  }

  .green {
    background: var(--green);
  }

  .orange {
    background: var(--orange);
  }

  .yellow {
    background: var(--yellow);
  }

  .blue {
    background: var(--blue);
  }
`;

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#FFAABA",
      contrastText: "#ffff",
    },
    secondary: {
      light: "#FDC4CE",
      main: "#FFAABA",
      contrastText: "#FDC800",
    },
    contrastThreshold: 2,
    tonalOffset: 0.1,
  },
});

export const ButtonBack = styled.button`
  position: absolute;
  top: 1.4rem;
  left: 1rem;

  border-radius: 0.2rem;

  color: var(--primary);

  transition: color 0.2s;

  &:hover {
    color: ${shade(0.1, "#FFAABA")};
  }

  svg {
    font-size: 1.6rem;
  }
`;

export const ButtonTop = styled.a`
  position: fixed;
  bottom: 1.4rem;
  right: 1.4rem;

  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: var(--white);
  background: var(--primary);

  transition: color 0.2s;

  &:hover {
    color: ${shade(0.1, "#FFAABA")};
  }

  svg {
    font-size: 1.6rem;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 30rem;
`;
