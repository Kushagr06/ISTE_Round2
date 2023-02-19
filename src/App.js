import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import News from './pages/News';
import Bookmark from './pages/Bookmark';

function App() {
  return (
    <div className='bg-[rgb(34,34,34)] '>
      <Navbar />
      {/* <Hero /> */}
      <Bookmark />

      {/* <Footer /> */}

    </div>
  
  );
}

export default App;