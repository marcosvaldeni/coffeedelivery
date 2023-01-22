import { CartLink, HeaderContainer, LocatioLink } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Coffee Delivery" />

      <nav>
        <LocatioLink to="/">
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocatioLink>
        <CartLink to="/checkout">
          <ShoppingCart size={24} weight="fill" />
        </CartLink>
      </nav>
    </HeaderContainer>
  )
}
