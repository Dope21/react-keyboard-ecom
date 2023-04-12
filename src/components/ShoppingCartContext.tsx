import { createContext, useContext, ReactNode } from 'react';
import { useState } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  title: string
  quantity: number
}

type ShoppingCartContext = {
  opencart: () => void
  closecart: () => void
  getItemsQuantity: (title: string) => number
  increaseQuantity: (title: string) => void
  removeQuantity: (title: string) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const cartQuantity = cartItems.reduce((quantity,item) => item.quantity + quantity, 0)
  const opencart = () => setIsOpen(true)
  const closecart = () => setIsOpen(false)
  function getItemsQuantity(title: string) {
    return cartItems.find(item => item.title === title)?.quantity || 0
  }
  function removeQuantity(title: string){
    setCartItems(currItems => {
        return currItems.filter(item => item.title != title)

    })
  }
  function increaseQuantity(title: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.title === title) == null) {
        return [...currItems, { title, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.title === title) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemsQuantity, increaseQuantity,removeQuantity,cartItems,cartQuantity,opencart,closecart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}