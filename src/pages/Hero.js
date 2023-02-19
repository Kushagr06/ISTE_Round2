import React from 'react'
import Blimpg from '../components/Blimps'
import '../components/Hero.css'
import { Stars } from "@react-three/drei";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";



function Hero() {
  return (
    
      <div  id="hero_main" className=' pb-2 '>
     <div className=" align-middle h-auto text-center z-2 mt-2 mb-10 pb-6 bg-[rgb(34,34,34)]">
      <Blimpg />
    <div className='m-2'>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <h1  id="title_hero" className='pb-5 pt-10 mb-5'> Welcome Explorers! </h1>
      </button>
     

  </div>
    </div>
    </div>
    
   
  )
}

export default Hero
