import { Cart, InfoDiv, LandingContainer } from './styles';
import { Package, Timer, ShoppingCart, Coffee } from 'phosphor-react';

import coffeeImage from './../../assets/coffee.png';

export function Landing() {
  return (
    <LandingContainer>
      <InfoDiv>
        <h1>Find the perfect coffee for any time of day</h1>
        <p>With Coffee Delivery you get your coffee wherever you are, anytime.</p>


        <ul>
          <li>
            <Cart>
              <ShoppingCart size={24} weight="fill" />
            </Cart>
            <p>Simple and secure purchase</p>
          </li>
          <li>
            <span>
              <Package size={24} weight="fill" />
            </span>
            <p>Packaging keeps the coffee intact</p>
          </li>
          <li>
            <span>
              <Timer size={24} weight="fill" />
            </span>
            <p>Fast and tracked delivery</p>
          </li>
          <li>
            <span>
              <Coffee size={24} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </li>
        </ul>
      </InfoDiv>
      <img src={coffeeImage} alt="Inlustration of a coffee cup with a some coffee beans" />
    </LandingContainer>
  );
}