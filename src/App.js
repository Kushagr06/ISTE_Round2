import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import News from './pages/News';
import Auth from './pages/Auth';
import Bookmark from './pages/Bookmark';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className='bg-[rgb(34,34,34)] '>
       <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Auth />}/>
            <Route  path="/home" element={<Hero />}/>
            <Route  path="/news" element={<News />}/>
            <Route  path="/bookmark" element={<Bookmark />}/>

          </Routes>
      <Footer />
      </BrowserRouter>  
    </div>
  
  );
}

export default App;