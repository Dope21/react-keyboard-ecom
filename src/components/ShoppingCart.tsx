import { HiShoppingCart } from 'react-icons/hi'
import { useShoppingCart } from './ShoppingCartContext'
import { Offcanvas, Stack } from 'react-bootstrap'
import { CartItem } from './CartItem'
import { formatCurrency } from './formatCurrency'
import { useState, useEffect } from 'react'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closecart, cartItems } = useShoppingCart()
  const [storeItems, setStoreItems] = useState<any[]>([])

  useEffect(() => {
    async function fetchStoreItems() {
      const response = await fetch(
        'http://127.0.0.1:8000/product/get_all_product'
      )
      const data = await response.json()
      setStoreItems(data.data)
    }
    fetchStoreItems()
  }, [])
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <section
              className="absolute inset-y-0 right-0 pl-10 sm:w-full lg:w-1/2 flex"
              aria-labelledby="slide-over-heading"
            >
              <div className="relative h-full w-full">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-heading"
                      >
                        <HiShoppingCart className="inline-block mr-2 text-2xl" />
                        Your Cart
                      </h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-gray-500"
                          onClick={closecart}
                        >
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 px-4 sm:px-6">
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
                      <Offcanvas.Body>
                        <Stack gap={3}>
                          {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                          ))}
                        </Stack>
                      </Offcanvas.Body>
                    </div>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="px-4 py-3 flex items-center justify-between sm:px-6">
                      <p className="text-lg font-medium text-gray-900">
                        <Offcanvas.Body>
                          <Stack gap={3}>
                            <div className="ms-auto fw-blod fs-5">
                              Total:{' '}
                              {formatCurrency(
                                cartItems.reduce((total, cartItems) => {
                                  const item = storeItems.find(
                                    i => i.id === cartItems.id
                                  )
                                  return (
                                    total +
                                    (item?.price || 0) * cartItems.quantity
                                  )
                                }, 0)
                              )}
                            </div>
                          </Stack>
                        </Offcanvas.Body>
                      </p>
                      <p className="text-lg font-medium text-gray-900"></p>
                    </div>
                    <div className="px-4 py-3 sm:px-6">
                      <button
                        type="button"
                        className="w-full bg-red-500 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}
