import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { TotalCoffeeCard } from "../TotalCoffeeCard";
import { 
  Button,
  PBaseContainer, 
  PContainer, 
  PTotalContainer, 
  TotalContainer 
} from "./styles";

import { coffees } from '../../service/db.json';
import { formatPrice } from "../../util/format";

export function Total() {
  const { coffeesList } = useContext(CartContext);

  return (
    <TotalContainer>
      <h3>Selected coffees</h3>

      <div>
        {coffeesList && 
          coffeesList.map((coffee) => {
            const foundCoffee = coffees.find(c => c.id === coffee.id);
            return (
              <TotalCoffeeCard
                key={coffee.id}
                id={coffee.id}
                img={foundCoffee!.img}
                name={foundCoffee!.name}
              />
            );
          })
        }

        <PContainer>
          <p>Total de itens:</p>
          <p>
            {coffeesList && 
              formatPrice(Number((coffeesList.reduce((acc, coffee) => acc + coffee.amount, 0) * 9.9).toFixed(2)))
            }
          </p>
        </PContainer>
        <PBaseContainer>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </PBaseContainer>
        <PTotalContainer>
          <p>Total</p>
          <p>
            {coffeesList && 
              formatPrice(Number((coffeesList.reduce((acc, coffee) => acc + coffee.amount, 0) * 9.9 + 3.5).toFixed(2)))
            }
            </p>
        </PTotalContainer>

      <Button type="submit">Confirm order</Button>
    </div>

  </TotalContainer>
  );
}
