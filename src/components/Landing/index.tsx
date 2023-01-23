import { Box, Cafe, Cart, Clock, InfoDiv, LandingContainer } from './styles';
import { Package, Timer, ShoppingCart, Coffee } from 'phosphor-react';

import coffeeImage from './../../assets/coffee.png';

export function Landing() {
  return (
    <LandingContainer>
      <InfoDiv>
        <h1>Find the perfect coffee for any time of day</h1>
        <h3>With Coffee Delivery you get your coffee wherever you are, anytime.</h3>

        <ul>
          <li>
            <Cart>
              <ShoppingCart size={24} weight="fill" />
            </Cart>
            <p>Simple and secure purchase</p>
          </li>
          <li>
            <Box>
              <Package size={24} weight="fill" />
            </Box>
            <p>Packaging keeps the coffee intact</p>
          </li>
          <li>
            <Clock>
              <Timer size={24} weight="fill" />
            </Clock>
            <p>Fast and tracked delivery</p>
          </li>
          <li>
            <Cafe>
              <Coffee size={24} weight="fill" />
            </Cafe>
            <p>Coffee arrives fresh to you</p>
          </li>
        </ul>
      </InfoDiv>
      <img src={coffeeImage} alt="Inlustration of a coffee cup with a some coffee beans" />
    </LandingContainer>
  );
}