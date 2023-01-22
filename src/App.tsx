import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle, Main } from './styles/global';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Main>
          <Router />      
        </Main>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
