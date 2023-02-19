import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
<<<<<<< HEAD
function App() {
  return (
    <div className='bg-[rgb(34,34,34)] overflow-hidden'>
      <Navbar/>
=======
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
