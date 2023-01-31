import { createContext, ReactNode, useContext, useState } from 'react';
import { ICoffee } from '../service/Coffee';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  addProduct: (id: string, amount: number) => void;
  removeProduct: (id: string) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartContextProvider({ children }: CartProviderProps) {
  const [coffeesList, setCoffeesList] = useState<ICoffee[]>(() => {

    const storedStateAsJSON = localStorage.getItem(
      '@coffeedelivery:cart-state-1.0.0',
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return [];
  });
  
  function addProduct(id: string, amount: number) {
    
    const coffeeAlreadOnTheList = coffeesList.find((coffee) => {
      return coffee.id === id;
    });
  
    if (coffeeAlreadOnTheList) {
      setCoffeesList(
        coffeesList.map(coffee => {
          return coffee.id === id ? { id, amount: coffee.amount + amount } : coffee;
        })
      )
      
    } else {
      
      console.log([...coffeesList, { id, amount }]);
      setCoffeesList([...coffeesList, { id, amount }]);
    }
  }

  const removeProduct = (id: string) => {

  };

  return (
    <CartContext.Provider
      value={{addProduct, removeProduct}}
    >
      {children}
    </CartContext.Provider>
  );
}