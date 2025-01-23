import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robot = ({ isMobile, isXlMobile }) => {
  const computer = useGLTF("./minirobot/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 7 : 8} groundColor="black" />
      <pointLight intensity={isMobile ? 2 : 5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={isMobile ? 0.12 : 0.5}
        penumbra={1}
        intensity={isMobile ? 1 : 2.2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.02 : isXlMobile ? 0.03 : 0.04}
        position={isMobile ? [0, -1, 0] : isXlMobile ? [0, 0, 0] : [0, 0, 0]}
        rotation={[0.01, 0.2, 0.1]}
      />
    </mesh>
  );
};

const MainRobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isXlMobile, setIsXlMobile] = useState(false);

  useEffect(() => {
    const handleMediaQuery = () => {
      setIsMobile(window.matchMedia("(max-width: 780px)").matches);
      setIsXlMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    handleMediaQuery();
    window.addEventListener("resize", handleMediaQuery);

    return () => {
      window.removeEventListener("resize", handleMediaQuery);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      className=" xl:ml-[20rem] -z-10 lg:z-0"
      shadows
      camera={{ position: [2, 3, 5], fov: 80 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot isXlMobile={isXlMobile} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MainRobotCanvas;

