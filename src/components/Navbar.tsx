import { BsBag } from 'react-icons/bs'
import { TfiSearch, TfiUser } from 'react-icons/tfi'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <>
      <header>
        <div className="bg-black text-white text-center py-1 px-5 text-sm md:text-base">
          All the products will be shipped within 4 business days.
        </div>
        <nav className="fixed w-full z-50 bg-white">
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
              <button>
                <BsBag size={25} />
              </button>
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
