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
>>>>>>> 890c822c946b905c4282ed21532abcdc6c2a6a04
    </div>
  
  );
}

export default App;
