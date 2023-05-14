import styled, { createGlobalStyle } from 'styled-components';

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    font-weight: normal;
    font-size: 16px;
    background-color: rgb(27,27,29);
    color:rgb(218,221,225);
  }
  
  html, body {
    width: 100%;
    height: 100%;
  }
    
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  
  .padding{
    padding-bottom: 1rem;
  }
  .link{
    display: block;
    color:rgb(218,221,225);
    padding-bottom: 1rem;
    font-weight: normal;
    font-size: 1.1rem;
  }
  
`;