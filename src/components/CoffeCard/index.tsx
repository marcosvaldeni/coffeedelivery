import { Actions, CardContainer, CartActions, CartButton, CoffeeTag } from './styles';

import traditionalEspresso from '../../assets/imgs/traditional.png';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={traditionalEspresso} alt="Upper view of a traditional Espresso" />

      <CoffeeTag>Tradicional</CoffeeTag>

      <h3>Expresso Tradicional</h3>
      <p>Traditional coffee made with hot water and ground beans</p>

      <Actions>
        <span>R$ <strong>9,00</strong></span>

        <div>
          <CartActions>
            <Plus size={22} />
            <span>1</span>
            <Minus size={22} />
          </CartActions>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </Actions>
    </CardContainer>
  );
}