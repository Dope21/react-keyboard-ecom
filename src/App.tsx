import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import './styles/index.css'
<<<<<<< HEAD
import CardGrid from './pages/Showp'
import Checkout from './pages/Checkout'

=======
import { Products } from './pages/Showp'
import { ShoppingCartProvider } from './components/ShoppingCartContext'
import ProductDetail from './pages/ProductDetail'
>>>>>>> 698d30bf9aa427dec90084d1ffebc7b99667298b
function App() {
  return (
    <ShoppingCartProvider>
    <main>
      <Navbar />
      <Container>
        <Router>
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={CreateAccount} />
            <Route path="/" Component={Home} />
<<<<<<< HEAD
            <Route path="/products" Component={CardGrid} />
            <Route path="/checkout" Component={Checkout} />
=======
            <Route path="/products" Component={Products} />
            
            <Route path="/products/:id" Component={ProductDetail} />
>>>>>>> 698d30bf9aa427dec90084d1ffebc7b99667298b
          </Routes>
        </Router>
      </Container>
    </main>
    </ShoppingCartProvider>
  )
}

export default App
