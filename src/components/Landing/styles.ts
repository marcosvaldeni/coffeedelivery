import styled from 'styled-components';

export const LandingContainer = styled.section`
  width: 100%;
  padding: 6.5rem 0;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  img {
    width: 24rem;
  }

  @media (min-width: 575px) {
    img {
      width: 32rem;
    }
  }

  @media (min-width: 992px) {
    img {
      width: 24rem;
    }

    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1120px) {
    img {
      width: auto;
    }
  }
`;

export const InfoDiv = styled.div`
  h1 {
    margin-top: 2rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
  }

  ul {
    columns: 2;
    margin-top: 4rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li + li {
    margin-top: 1.3rem;
  }
`;

const SpanBase = styled.span`
  padding: 0.5rem;
  border-radius: 50%;
  color: ${props => props.theme.background};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cart = styled(SpanBase)`
  background: ${props => props.theme['primary-900']};
`;

export const Box = styled(SpanBase)`
  background: ${props => props.theme['primary-900']};
`;

export const Clock = styled(SpanBase)`
  background: ${props => props.theme['primary-500']};
`;

export const Cafe = styled(SpanBase)`
  background: ${props => props.theme['secondary-500']};
`;
