import Navbar from './components/Navbar';
import './styles/index.css';
import CardGrid from './components/Showp';
import products from './components/info';
const App: React.FC = () => {
  

  return (
    <>
    <Navbar/>
    
    <div className="container mx-auto py-8 flex items-center">
      <CardGrid products={products} />
    </div>
    
    </>
  );
};



export default App
