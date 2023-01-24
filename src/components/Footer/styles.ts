import styled from 'styled-components';

export const Main = styled.div`
  background: linear-gradient(280.18deg, #8047F8 -107.85%, #4B2995 151.75%);
`;

export const FooterContainer = styled.footer`
  height: 15rem;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;

  @media (min-width: 575px) {
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;