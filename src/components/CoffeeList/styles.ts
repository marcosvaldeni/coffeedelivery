import styled from 'styled-components';

export const Main = styled.div`
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

export const ListContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 9rem;

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