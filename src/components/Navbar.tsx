import { TfiSearch, TfiUser } from 'react-icons/tfi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsBag } from 'react-icons/bs';
import { useShoppingCart } from './ShoppingCartContext';
const Navbar = () => {
  const { opencart,cartQuantity} = useShoppingCart()
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="bg-black text-white text-center py-1 px-5 text-sm md:text-base">
          All the products will be shipped within 4 business days.
        </div>
        <nav className="bg-white border-b">
          <div className="px-4 md:px-10 mx-auto max-w-7xl flex items-center justify-between py-4 md:py-8">
            <div className="w-20 md:w-auto">
              <img
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/files/keychron-logo-transparent-1_e481c26f-93a1-4c14-80c9-4d80ad096f3a_160x.png?v=1614760292"
                alt="banner-icon"
              />
            </div>
            <div className="hidden md:block">
              <ul className="flex">
                <li className="px-4 text-lg">
                  <a href="/">All products</a>
                </li>
                <li className="px-4 text-lg">
                  <a href="/">Keyboard</a>
                </li>
                <li className="px-4 text-lg">
                  <a href="/">Keycap</a>
                </li>
                <li className="px-4 text-lg">
                  <a href="/">Switch</a>
                </li>
                <li className="px-4 text-lg">
                  <a href="/">Mouse</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 md:gap-8">
              <a href="/">
                <TfiUser size={25} />
              </a>
              <button>
                <TfiSearch size={25} />
              </button>
              <div className="relative inline-flex" onClick={opencart}>
               <button className="text-gray-800 hover:text-gray-600 focus:outline-none w-7 h-7">
                <BsBag size={25} />
                </button>
                <div  className="w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center absolute bottom-0 right-0 text-xs shadow text-white"> {cartQuantity}</div>
                </div>
              <button className="md:hidden">
                <RxHamburgerMenu size={25} />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
