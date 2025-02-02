import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RotatingCube from './RotatingCube';
import InteractiveObjects from './InteractiveObjects';

export default function Scene() {
  return (
    <Canvas camera={{ position: [5, 3, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Objects */}
      <RotatingCube />
      <InteractiveObjects />

      <OrbitControls />
    </Canvas>
  );
}
