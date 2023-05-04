import Container from '../components/Container'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="absolute left-0 top-12 z-10">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0059/0630/1017/files/K1-PRO--1_1944x.jpg?v=1678929896"
            alt="banner"
          />
        </div>
        <div className="mt-[-11rem] md:mt-[-19rem]">
          <Container>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb:mb-4">
                Keychron K1 Pro
              </h2>
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-lg md:text-2xl font-semibold text-white">
                QMK | LOW | PROFILE | 80% LAYOUT
              </p>
              <Link to="/products">
              <div className="group text-base md:text-lg text-white border-2 border-white px-5 py-3 font-bold tracking-wider transition-all flex items-center gap-4 hover:text-black hover:bg-white ">
                Shop Now
                <div className="group-hover:inline-block group-hover:opacity-100 group-hover:ml-0 opacity-0 transition-all duration-500 ml-[-2rem]">
                  <HiArrowLongRight />
                </div>
              </div>
              </Link>
            </div>
          </Container>
        </div>
      </section>
    </div>
  )
}

export default Home
