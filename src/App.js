import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import News from './pages/News';


function App() {
  return (
    <div className='bg-[rgb(34,34,34)] '>
      <Navbar />
      {/* <Hero /> */}
      <News />
    </div>
  
  );
}

export default App;
