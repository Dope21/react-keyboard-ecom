import { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';

interface ProductInfo {
  id: string;
  image: string;
  description: string;
  price: number;
}

interface CartItem extends ProductInfo {
  quantity: number;
}

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToCart = (product: ProductInfo) => {
    // Check if the product is already in the cart
    const existingCartItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingCartItemIndex >= 0) {
      // If the product is already in the cart, update its quantity
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not yet in the cart, add it
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  return (
    <>
      <button className="text-gray-800 hover:text-gray-600 focus:outline-none" onClick={toggleCart}>
        <BsBag size={25} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Your cart</h2>
                      <button
                        className="ml-3 h-7 flex items-center justify-center rounded-md focus:outline-none"
                        onClick={toggleCart}
                      >
                        <FiX className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="px-4 sm:px-6 mt-6">
                   
                  {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                  <ul role="list" className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.id} className="py-4 flex">
                        <img className="h-10 w-10 rounded-full" src={item.image} alt={item.description} />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">{item.description}</h3>
                            <p className="text-sm text-gray-500">${item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-6 flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
                <p className="text-lg text-gray-900">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )}
</>
);
};

export default CartDrawer;