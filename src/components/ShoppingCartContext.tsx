import { createContext, useContext, ReactNode } from 'react'
import { useState } from 'react'
import { ShoppingCart } from './ShoppingCart'
import { useLocalStorage } from './useLocalStorage'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  category: string
  quantity: number
}

type ShoppingCartContext = {
  opencart: () => void
  closecart: () => void
  getItemsQuantity: (id: number, category: string) => number
  increaseQuantity: (id: number, category: string) => void
  decreaseQuantity: (id: number, category: string) => void
  removeQuantity: (id: number, category: string) => void
  resetCartItems: () => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shoppingcart',
    []
  )
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
  const opencart = () => setIsOpen(true)
  const closecart = () => setIsOpen(false)

  function getItemsQuantity(id: number, category: string) {
    return (
      cartItems.find(item => item.id === id && item.category === category)
        ?.quantity || 0
    )
  }

  function removeQuantity(id: number, category: string) {
    setCartItems(currItems => {
      return currItems.filter(
        item => item.id !== id || item.category !== category
      )
    })
  }

  function increaseQuantity(id: number, category: string) {
    setCartItems(currItems => {
      if (
        currItems.find(item => item.id === id && item.category === category)
      ) {
        return currItems.map(item => {
          if (item.id === id && item.category === category) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...currItems, { id: id, category: category, quantity: 1 }]
      }
    })
  }

  function decreaseQuantity(id: number, category: string) {
    setCartItems(currItems => {
      const item = currItems.find(
        item => item.id === id && item.category === category
      )
      if (item && item.quantity > 1) {
        return currItems.map(item => {
          if (item.id === id && item.category === category) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      } else {
        return currItems.filter(
          item => item.id !== id || item.category !== category
        )
      }
    })
  }

  function resetCartItems() {
    setCartItems([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemsQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeQuantity,
        resetCartItems,
        cartItems,
        cartQuantity,
        opencart,
        closecart
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
