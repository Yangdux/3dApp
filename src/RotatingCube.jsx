import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function RotatingCube() {
  const ref = useRef();
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[2, 1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}
