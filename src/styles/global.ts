import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;

    --text-body: #969CB3;
    --text-title: #363F5F;

    --background: #F0F2F5;
    --shape: #FFFFFF
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }
`;
