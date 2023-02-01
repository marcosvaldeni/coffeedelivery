import { createContext, ReactNode, useState } from 'react';
import { ICoffee } from '../service/Coffee';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  coffeesList: ICoffee[];
  addProduct: (id: string, amount: number) => void;
  removeProduct: (id: string) => void;
  clearProducts: () => void;
}

interface Address {

}

interface Purchase {
  id: string;
  coffeesList: ICoffee[];
  payment: string;
  address: Address;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartContextProvider({ children }: CartProviderProps) {
  const [purchase, setPurchase] = useState<Purchase>();
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
      
      setCoffeesList([...coffeesList, { id, amount }]);
    }
  }

  const removeProduct = (id: string) => {
    setCoffeesList(
      coffeesList.filter(coffee => coffee.id !== id)
    );
  };

  const clearProducts = () => {
    setCoffeesList([]);
  };

  return (
    <CartContext.Provider
      value={{addProduct, removeProduct, clearProducts, coffeesList}}
    >
      {children}
    </CartContext.Provider>
  );
}
