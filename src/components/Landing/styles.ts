import styled from 'styled-components';

export const LandingContainer = styled.section`
  width: 100%;
  padding: 6.5rem 0;

  display: flex;
`;

export const InfoDiv = styled.div`

  ul {
    display: flex;
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
