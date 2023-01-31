import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface CartLinkProps {
  amount: number;
}

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

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`;

const baseSpan = styled(NavLink)`
  padding: 0.6rem;
  border-radius: 6px;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const LocatioLink = styled(baseSpan)`
  background: ${props => props.theme['secondary-100']};
`;

export const CartLink = styled(baseSpan)<CartLinkProps>`
  background: ${props => props.theme['primary-100']};
  color: ${props => props.theme['primary-900']};
  position: relative;

  ${props => 
    props.amount &&
    css`
    &::after {
      content: '${props.amount}';
      height: 1.30rem;
      width: 1.30rem;
      line-height: 0%;
      background: ${props => props.theme['primary-900']};
      color: ${props => props.theme.white};
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 50%;
      position: absolute;
      right: -10px;
      top: -10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    `}
`;
