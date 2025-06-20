import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const SpinningCube = ({ logo }) => {
  const mesh = useRef();
  const texture = useTexture(logo);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const SpinningTechIcon = ({ logo }) => (
  <div style={{ width: 100, height: 100 }}>
    <Canvas camera={{ position: [2, 2, 2], fov: 50 }} shadows>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <SpinningCube logo={logo} />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  </div>
);

export default SpinningTechIcon; 