import { createContext,useContext,useState,ReactNode } from 'react';
import { BsBag } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';

type ShoppingCartProviderProps = {
  children: ReactNode
}
const ShoppingCartContext = createContext({})
export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
  return (<ShoppingCartContext.Provider value={{}}>
    {children}
    </ShoppingCartContext.Provider>)

}

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="relative inline-flex">
        <button className="text-gray-800 hover:text-gray-600 focus:outline-none w-7 h-7" onClick={toggleCart}>
          <BsBag size={25} />
        </button>
        <div className="w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center absolute bottom-0 right-0 text-xs shadow text-white"></div>
      </div>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src="https://i.ibb.co/N9jDpvF/2.png" className="w-8 h-8 mr-2" />
                        <p className="text-lg font-medium text-gray-900">Dummy Item</p>
                      </div>
                      <div className="flex items-center">
                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleSubtract}>
                          -
                        </button>
                        <span className="mx-2 text-gray-700">{quantity}</span>
                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleAdd}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 sm:px-6 mt-6">
                    <p className="text-lg font-medium text-gray-900">Total: $0.00</p>
                  </div>
                  <div className="px-4 sm:px-6 mt-6">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Checkout
                    </button>
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