import styled, { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 75%;
  }

  @media (min-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (min-width: 992px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 100%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['primary-500']};
  }

  body {
    background: ${pros => pros.theme.background};
    background: url(${background}) no-repeat center 100px / cover;
    color: ${pros => pros.theme['base-text']}; 
		-webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
		color: ${props => props.theme['base-text']};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const Main = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
`;