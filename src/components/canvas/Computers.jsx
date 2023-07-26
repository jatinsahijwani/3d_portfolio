import { Suspense, useEffect, useState } from "react"
import { Canvas, events } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'
import { PointLight, HemisphereLight } from "three"
import { motion } from "framer-motion"


const Computers = (props) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor='white' />
      <pointLight intensity={1} position={[0,-1.95,0]} castShadow/>
      <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive 
        object={computer.scene}
        scale={props.isMobile? 0.35 : 0.75}
        position={props.isMobile? [0,-2,-0.55] : [0,-3.5,-1.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = (props) => {
  
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera = {{position: [20,3,5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
         enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={props.isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas