import React from 'react'
import { Canvas } from 'react-three-fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Cyl from './Cyl'
const App = () => {
  return (
    <>
      <h1 className="text-green-500 font-bold fixed left-[50%] translate-x-[-50%] text-5xl flex-nowrap top-[4%] underline">Glimpses of Bhimbetika Trip</h1>
      <Canvas camera={{ fov: 60 }} className="canvas mt-[6.5vh]">
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Cyl />
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App