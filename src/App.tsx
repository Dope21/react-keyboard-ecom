import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import './styles/index.css'
import Products from './pages/Products'

function App() {
  return (
    <main>
      <Navbar />
      <Container>
        <Router>
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={CreateAccount} />
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
      </Container>
    </main>
  )
}

export default App
