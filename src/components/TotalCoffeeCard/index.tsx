import { Minus, Plus, Trash } from "phosphor-react";
import { CoffeeTatalCardActions, CoffeeTotalCard } from "./styles";

interface TotalCoffeeCardProps {
  id: string;
  name: string;
  img: string;
}

export function TotalCoffeeCard({ id, name, img }: TotalCoffeeCardProps) {
  return (
    <CoffeeTotalCard>
      <img src={`/src/assets/imgs/${img}.png`} alt={`Upper view of a ${name}`}/>
      <CoffeeTatalCardActions>
        <p>{name}</p>
        <div>
          <div>
            <Minus size={20} />
            <span>1</span>
            <Plus size={20} />
          </div>

          <span>
            <Trash size={20} />
            REMOVER
          </span>
        </div>
      </CoffeeTatalCardActions>
      <p>R$ 9,90</p>
    </CoffeeTotalCard>
  );
}
