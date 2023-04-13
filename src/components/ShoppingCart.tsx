import { useShoppingCart } from "./ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closecart } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-full">
          <div className="absolute top-0 right-0 h-screen w-full z-40"
            onClick={closecart}
          >
            <div className="bg-black opacity-50 w-full h-full"></div>
          </div>
          <div className="fixed top-0 right-0 h-screen w-full flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-96">
              <div className="p-6">
                <h2 className="text-lg font-medium mb-4">Your cart</h2>
                {/* Render your cart items here */}
              </div>
              <div className="p-6 flex justify-end">
                <button
                  className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded"
                  onClick={closecart}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
