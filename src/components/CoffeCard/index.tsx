import { Actions, CardContainer, CartActions, CartButton, CoffeeTag, TagContainer } from './styles';

import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

interface CoffeeCardProps {
  id: string;
  name: string;
  description: string;
  img: string;
  tag: string[];
  addProduct: (id: string, amount: number) => void;
}

export function CoffeeCard({ name, description, img, tag, id, addProduct}: CoffeeCardProps) {
  const [amount, setAmount] = useState(1);

  function handleAddAmount() {
    setAmount(amount + 1);
  }

  function handleReduceAmount() {
    amount > 1 ? setAmount(amount - 1) : null;
  }

  return (
    <CardContainer>
      <img src={`/src/assets/imgs/${img}.png`} alt="Upper view of a traditional Espresso" />

      <TagContainer>
        {tag.map(t => {
          return (
            <CoffeeTag key={t}>{t}</CoffeeTag>
          )
        })}
          
      </TagContainer>

      <h3>{name}</h3>

      <p>{description}</p>

      <Actions>
        <span>R$ <strong>9,00</strong></span>

        <div>
          <CartActions>
            <Plus size={22} onClick={handleAddAmount} />
            <span>{amount}</span>
            <Minus size={22} onClick={handleReduceAmount} />
          </CartActions>
          <CartButton>
            <ShoppingCart onClick={() =>{ addProduct(id, amount) }} size={22} weight="fill" />
          </CartButton>
        </div>
      </Actions>
    </CardContainer>
  );
}