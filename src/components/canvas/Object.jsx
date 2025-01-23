import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Object = () => {
  const earth = useGLTF("/object/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={5} color="white" groundColor="black" />
      <pointLight intensity={2} />
      <primitive
        object={earth.scene}
        scale={1.5}

      />
    </mesh>
  )
}

const ObjectCanvas = () => {
  return (
    <Canvas
      shadows
      className="  -z-10 lg:z-0"
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.2,
        far: 250,
        position: [4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />} />
      <OrbitControls
        autoRotate
        enableZoom={false}
      />

      <Object />
      <Preload all />
    </Canvas>
  )
}

export default ObjectCanvas 
