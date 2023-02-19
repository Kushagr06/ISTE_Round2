import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Model } from "./Scene";



export default function Blimpg(){
  return(
    <>

    <div className="flex w-full sm:h-80 h-96 pb-2 cursor-grab mt-5 justify-center">
    <Canvas camera={{ position:[20,0,-30], zoom:3 ,fov:30, }}>
      <Stage>
      <Stars />
      <mesh>
        <pointLight position={[0,0,0]}/>
      <Model scale={[0.2,0.2,0.2]} />
        <OrbitControls />
      </mesh>
      </Stage>
    </Canvas>
    </div>
    
    </>
  )
}