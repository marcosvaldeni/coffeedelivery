import { useContext } from "react";
import { CoffeeCard } from "../CoffeCard";
import { CardContainer, ListContainer, Main } from "./styles";

import { coffees } from '../../service/db.json';
import { CartContext } from "../../contexts/CartContext";

export function CoffeeList() {
const { addProduct } = useContext(CartContext);

  return (
    <Main>
      <ListContainer>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map(coffee => {
            return (
              <CardContainer key={coffee.id}>
                <CoffeeCard 
                  name={coffee.name} 
                  description={coffee.description}
                  tag={coffee.tag}
                  img={coffee.img}
                  id={coffee.id}
                  addProduct={addProduct}
                />
              </CardContainer>
            )
          })}
        </div>
      </ListContainer>
    </Main>
  );
}
