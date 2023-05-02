import { createContext, useContext, ReactNode } from 'react';
import { useState } from 'react';
import { ShoppingCart } from './ShoppingCart';
import { useLocalStorage } from './useLocalStorage';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  opencart: () => void;
  closecart: () => void;
  getItemsQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoppingcart', []);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  const opencart = () => setIsOpen(true);
  const closecart = () => setIsOpen(false);

  function getItemsQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function removeQuantity(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function increaseQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id: id, quantity: 1 }];
      }
    });
  }

  function decreaseQuantity(id: number) {
    setCartItems((currItems) => {
      const item = currItems.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      } else {
        return currItems.filter((item) => item.id !== id);
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemsQuantity, increaseQuantity, decreaseQuantity, removeQuantity, cartItems, cartQuantity, opencart, closecart }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
