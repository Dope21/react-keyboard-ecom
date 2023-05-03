import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import './styles/index.css'
import Checkout from './pages/Checkout'
import { Products } from './pages/Showp'
import { ShoppingCartProvider } from './components/ShoppingCartContext'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <ShoppingCartProvider>
      <main>
        <Container>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<CreateAccount />} />
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products/:category" element={<Products />} />
              <Route
                path="/products/:category/:id"
                element={<ProductDetail />}
              />
            </Routes>
          </Router>
        </Container>
      </main>
    </ShoppingCartProvider>
  )
}

export default App
