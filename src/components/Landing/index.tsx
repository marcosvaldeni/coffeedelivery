import { Box, Cafe, Cart, Clock, InfoDiv, LandingContainer, Main } from './styles';
import { Package, Timer, ShoppingCart, Coffee } from 'phosphor-react';

import coffeeImage from './../../assets/coffee.png';

export function Landing() {
  return (
    <Main>
      <LandingContainer>
        <InfoDiv>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>

          <ul>
            <li>
              <Cart>
                <ShoppingCart size={24} weight="fill" />
              </Cart>
              <p>Compra simples e segura</p>
            </li>
            <li>
              <Clock>
                <Timer size={24} weight="fill" />
              </Clock>
              <p>Entrega rápida e rastreada</p>
            </li>
            <li>
              <Box>
                <Package size={24} weight="fill" />
              </Box>
              <p>Embalagem mantém o café intacto</p>
            </li>
            <li>
              <Cafe>
                <Coffee size={24} weight="fill" />
              </Cafe>
              <p>O café chega fresquinho até você</p>
            </li>
          </ul>
        </InfoDiv>
        <img src={coffeeImage} alt="Inlustration of a coffee cup with a some coffee beans" />
      </LandingContainer>
    </Main>
  );
}