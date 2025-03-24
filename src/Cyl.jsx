import React, { useRef } from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
const Cyl = () => {
    const tex = useTexture('../src/assets/trip.png')
    let cyl = useRef(null)
    useFrame((state,delta)=>{
        cyl.current.rotation.y+=delta*0.2;
    })
  return (
    <mesh rotation={[0,1.4,0.2]} ref={cyl}>
    <cylinderGeometry args={[2.3,2.3,2.3,30,30,true]}/>
    <meshBasicMaterial  map={tex} side={THREE.DoubleSide} />        
    </mesh>
  )
}

export default Cyl