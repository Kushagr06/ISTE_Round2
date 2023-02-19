import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Model } from "./Scene";



export default function Blimpg(){
  return(
    <>

    <div className="flex  sm:h-80 pb-2 cursor-grab justify-center w-full h-2/3" style={{height:"30vw"}}>
    <Canvas flat linear camera={{ position:[20,-10,-90], zoom:3 ,fov:70, }}>
      <Stage>
      <Stars />
      <mesh>
        <pointLight position={[0,0,0]}/>
      <Model scale={[5,5,5]} position={[-15,-10,10]}/>
        <OrbitControls />
      </mesh>
      </Stage>
    </Canvas>
    </div>
    
    </>
  )
}