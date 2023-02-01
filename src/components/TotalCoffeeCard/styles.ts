import styled from "styled-components";

export const CoffeeTatalCardActions = styled.div`
  svg {
    color: ${props => props.theme['secondary-500']};
    cursor: pointer;
  }
  
  svg:hover {
    color: ${props => props.theme['secondary-900']};
  }

  > div {
    margin-top: 0.875rem;
    display: flex;
    gap: 0.25rem;

    > div {
      padding: 0.5rem;
      background: ${props => props.theme['base-button']};
      border-radius: 6px;
      line-height: 70%;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    > span {
      padding: 0 0.5rem;
      border-radius: 6px;
      background: ${props => props.theme['base-button']};
      font-size: 0.75rem;
      line-height: 70%;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    > span:hover {
      > svg {
        color: ${props => props.theme['secondary-900']};
      }
    }
  }

  @media (min-width: 992px) {
    margin-right: 8%;
  }
`;

export const CoffeeTotalCard = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};
  display: flex;
  justify-content: space-between;
  gap: 1ren;

  > img {
    margin-left: -1rem;
    height: 4rem;
  }

  > p {
    font-weight: 700;
  }

  & + & {
    padding-top: 1.5rem;
  } 
`;