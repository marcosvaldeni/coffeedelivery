import { CartLink, HeaderContainer, LocatioLink, Main } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export function Header() {
  const { coffeesList } = useContext(CartContext);
  
  return (
    <Main >
      <HeaderContainer>

        <Link to="/">
          <img src={logo} alt="Logo Coffee Delivery" />
        </Link>

        <nav>
          <LocatioLink to="/">
            <MapPin size={24} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocatioLink>
          <CartLink amount={coffeesList.reduce((acc, n) => acc + n.amount, 0)} to="/checkout">
            <ShoppingCart size={24} weight="fill" />
          </CartLink>
        </nav>
      </HeaderContainer>
    </Main>
  )
}
