import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import './styles/index.css'

function App() {
  return (
    <main>
      <Navbar />
      <Container>
        <Router>
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={CreateAccount} />
          </Routes>
        </Router>
      </Container>
    </main>
  )
}

export default App
