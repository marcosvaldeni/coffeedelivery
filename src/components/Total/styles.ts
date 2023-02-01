import styled from "styled-components";

export const TotalContainer = styled.aside`
  width: 100%;
  max-width: 475px;
  margin-bottom: 9rem;
  flex: 1;

  > div {
    width: 100%;
    margin-top: 1rem;
    padding: 1.5rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;
  }

  @media (min-width: 575px) {
    > div {
      padding: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    width: initial;
    max-width: initial;
  }
`;

export const PBaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-top: 0.75rem;
`;

export const PContainer = styled(PBaseContainer)`
  margin-top: 1.5rem;
`;

export const PTotalContainer = styled(PBaseContainer)`
    font-size: 1rem;
    font-weight: 700;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  background: ${props => props.theme['primary-500']};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
`;
