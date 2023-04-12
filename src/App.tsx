import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import './styles/index.css'
import { Products } from './pages/Showp'
import { ShoppingCartProvider } from './components/ShoppingCartContext'

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
            <Route path="/products" Component={Products} />
          </Routes>
        </Router>
      </Container>
    </main>
    </ShoppingCartProvider>
  )
}

export default App
