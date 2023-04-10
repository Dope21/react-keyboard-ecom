import Navbar from './components/Navbar'
import Container from './components/Container'
import Login from './pages/login'
import './styles/index.css'

function App() {
  return (
    <main>
      <Navbar />
      <Container>
        <Login />
      </Container>
    </main>
  )
}

export default App
