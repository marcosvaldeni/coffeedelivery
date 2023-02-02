import { ActionButton, Actions, CardContainer, CartActions, CartButton, CoffeeTag, TagContainer } from './styles';

import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { FormEvent, useState } from 'react';

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

  function handleAddCoffee(e: FormEvent) {
    e.preventDefault();
    addProduct(id, amount);
    setAmount(1);
  }

  return (
    <CardContainer>
      <img src={`/imgs/${img}.png`} alt="Upper view of a traditional Espresso" />

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
            <ActionButton>
              <Plus size={22} onClick={handleAddAmount} />
            </ActionButton>
            <span>{amount}</span>
            <ActionButton>
              <Minus size={22} onClick={handleReduceAmount} />
            </ActionButton>
          </CartActions>
          <CartButton type="submit">
            <ShoppingCart onClick={handleAddCoffee} size={22} weight="fill" />
          </CartButton>
        </div>
      </Actions>
    </CardContainer>
  );
}