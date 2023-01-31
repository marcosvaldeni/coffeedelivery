import { Actions, CardContainer, CartActions, CartButton, CoffeeTag, TagContainer } from './styles';

import traditionalEspresso from '../../assets/imgs/traditional.png';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { ICoffee } from '../../service/Coffee';

export function CoffeeCard({ name, description, img, tag}: ICoffee) {
  return (
    <CardContainer>
      <img src={`/src/assets/imgs/${img}.png`} alt="Upper view of a traditional Espresso" />

      <TagContainer>
        {tag.map(t => {
          return (
            <CoffeeTag>{t}</CoffeeTag>
          )
        })}
          
      </TagContainer>


      <h3>{name}</h3>

      <p>{description}</p>

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