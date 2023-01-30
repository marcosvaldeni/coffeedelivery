import { CoffeeCard } from "../CoffeCard";
import { CardContainer, ListContainer, Main } from "./styles";

import { coffees } from '../../service/db.json';
import { ICoffee } from "../../service/Coffee";

export function CoffeeList() {
  const listOfCoffees: ICoffee[] = coffees;

  return (
    <Main>
      <ListContainer>
        <h2>Out Coffees</h2>

        <div>
          {listOfCoffees.map(coffee => {
            return (
              <CardContainer>
                <CoffeeCard 
                  key={coffee.id} 
                  name={coffee.name} 
                  description={coffee.description}
                  tag={coffee.tag}
                  img={coffee.img}
                  id={coffee.id}  
                />
              </CardContainer>
            )
          })}
        </div>
      </ListContainer>
    </Main>
  );
}