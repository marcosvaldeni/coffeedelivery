import { createContext, ReactNode, useEffect, useState } from 'react';
import { ICoffee } from '../models/Coffee';
import { IPurchase } from '../models/Purchase';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  coffeesList: ICoffee[];
  purchase: IPurchase | undefined;
  addProduct: (id: string, amount: number) => void;
  removeProduct: (id: string) => void;
  clearProducts: () => void;
  addNewPurchase: (purchase: IPurchase) => void;
  increaseOneProduct: (id: string, amount: number) => void;
  decreaseOneProduct: (id: string) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartContextProvider({ children }: CartProviderProps) {
  const [purchase, setPurchase] = useState<IPurchase>();
  const [coffeesList, setCoffeesList] = useState<ICoffee[]>(() => {

    const storedStateAsJSON = localStorage.getItem(
      '@coffeedelivery:cart-state-1.0.0',
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return [];
  });

  useEffect(() => {
    const purchaseJSON = JSON.stringify(coffeesList)
  
    localStorage.setItem('@coffeedelivery:cart-state-1.0.0', purchaseJSON)
  }, [coffeesList])

  function addNewPurchase(purchase: IPurchase) {
    setPurchase(purchase);
  }

  function decreaseOneProduct(id: string) {
    setCoffeesList(
      coffeesList.map(coffee => {
        return coffee.id === id ? { id, amount: coffee.amount - 1 } : coffee;
      })
    );
  }

  function increaseOneProduct (id: string, amount: number) {
    setCoffeesList(
      coffeesList.map(coffee => {
        return coffee.id === id ? { id, amount: coffee.amount + amount } : coffee;
      })
    );
  }
  
  function addProduct(id: string, amount: number) {
    
    const coffeeAlreadOnTheList = coffeesList.find((coffee) => {
      return coffee.id === id;
    });
  
    if (coffeeAlreadOnTheList) {
      increaseOneProduct(id, amount);
      
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
      value={{
        addNewPurchase, 
        addProduct, 
        removeProduct, 
        clearProducts, 
        increaseOneProduct, 
        decreaseOneProduct, 
        coffeesList, 
        purchase
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
