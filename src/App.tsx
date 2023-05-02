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
import { useState } from 'react'

function App() {
  // const [category, setCategory] = useState('All products')
  // const linkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   const newCate = e.currentTarget.getAttribute('data-category') || ''
  //   setCategory(newCate)
  // }
  return (
    <ShoppingCartProvider>
      <main>
        <Container>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={CreateAccount} />
              <Route path="/" Component={Home} />
              <Route path="/checkout" Component={Checkout} />
              <Route path="/products/:category" element={<Products />} />
              <Route path="/products/:category/:id" Component={ProductDetail} />
            </Routes>
          </Router>
        </Container>
      </main>
    </ShoppingCartProvider>
  )
}

export default App
