import { CoffeeCard } from "../CoffeCard";
import { CardContainer, ListContainer } from "./styles";

export function CoffeeList() {
  return (
    <ListContainer>
      <h2>Out Coffees</h2>

      <div>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>
        <CardContainer>
          <CoffeeCard />
        </CardContainer>

      </div>
    </ListContainer>
  );
}