import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 20rem;
  margin-top: 3.375rem;
  padding: 0 1.5rem 1.25rem 1.5rem;

  background: ${props => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.125rem;
  }

  h3 {
    margin-top: 1rem;
  }

  > p {
    height: 5.5rem;
    margin-top: 0.5rem;
    color: ${props => props.theme['base-label']};
    font-size: 0.875;
    text-align: center;
  }

  @media (min-width: 575px) {
    width: 20rem;
  }

  @media (min-width: 1200px) {
    width: 16rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
`;

export const CoffeeTag = styled.span`
  margin-top: 0.75rem;
  padding: 1px 8px;
  border-radius: 100px;
  background: ${props => props.theme['primary-100']};
  font-size: 0.625rem;
  font-weight: 800;
  height: calc(0.625rem + 13px);
  color: ${props => props.theme['primary-900']};
  text-transform: uppercase;
  display: inline-block;
`;

export const Actions = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
  }

  > span {
    margin-top: 5px;
    margin-right: 0.5rem;
    display: inline-block;

    > strong {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;
    }
  }

  @media (min-width: 1200px) {
    > span {
      font-size: 0.74rem;
      > strong {
        font-size: 1.3rem;
      }
    }
  }
`;

export const CartActions = styled.div`
  height: 2.5rem;
  margin-right: 4px;
  padding: 0 8px;
  border-radius: 8px;

  background: ${props => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const ActionButton = styled.button`
  border: none;
  background: ${props => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${props => props.theme['secondary-500']};
  }

  &:hover {
    color: ${props => props.theme['secondary-900']};
  }
  `;

export const CartButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => props.theme['secondary-900']};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all ;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  
  > svg {
    color:  ${props => props.theme.white};
  }

  &:hover {
    background: ${props => props.theme['secondary-500']};
  }
`;