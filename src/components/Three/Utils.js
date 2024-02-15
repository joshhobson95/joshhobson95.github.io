
import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

import newtexture from '../../assets/Other/lunar.png';

const Sphere = ({ scrollY }) => {
  const rotationAngle = (scrollY / window.innerHeight) * Math.PI * 2;
  const oscillatingX = Math.sin(scrollY * 0.002) * 2;
  const oscillatingY = Math.cos(scrollY * 0.002) * 2;


  const [texture] = useLoader(THREE.TextureLoader, [newtexture]);

  return (
    <mesh rotation={[30, 0, 20 + rotationAngle]} position={[oscillatingX, oscillatingY +2, -2]}>
      <sphereGeometry args={[1, 32, 32]} /> 
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Sphere;
