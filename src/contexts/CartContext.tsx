import { createContext, ReactNode, useContext, useState } from 'react';

export interface Coffee {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Coffee[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storagedCart = localStorage.getItem("@RocketShoes:cart");

    if (storagedCart) {      
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {



  };

  const removeProduct = (productId: number) => {


  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
  
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}