import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CoffeeTatalCardActions, CoffeeTotalCard } from "./styles";

interface TotalCoffeeCardProps {
  id: string;
  name: string;
  img: string;
  amount: number;
}

export function TotalCoffeeCard({ id, name, img, amount }: TotalCoffeeCardProps) {
  const { removeProduct, increaseOneProduct, decreaseOneProduct } = useContext(CartContext);

  function handleReduceAmount() {
    amount > 1 ? decreaseOneProduct(id) : null;
  }

  return (
    <CoffeeTotalCard>
      <img src={`/assets/imgs/${img}.png`} alt={`Upper view of a ${name}`}/>
      <CoffeeTatalCardActions>
        <p>{name}</p>
        <div>
          <div>
            <Minus size={20} onClick={handleReduceAmount}/>
            <span>{amount}</span>
            <Plus size={20} onClick={() => increaseOneProduct(id, 1)} />
          </div>

          <span onClick={() => removeProduct(id)}>
            <Trash size={20} />
            REMOVER
          </span>
        </div>
      </CoffeeTatalCardActions>
      <p>R$ 9,90</p>
    </CoffeeTotalCard>
  );
}
