import styled from 'styled-components';

export const ListContainer = styled.section`
  margin-top: 2rem;

  > div {
    display: grid;
    
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-template-rows: repeat(auto-fit, auto-fit);
  }

  @media (min-width: 575px) {
    > div {
      grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    }
  }

  @media (min-width: 1200px) {
    > div {
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;