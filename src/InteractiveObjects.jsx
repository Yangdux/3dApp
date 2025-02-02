import { useState } from 'react';

export default function InteractiveObjects() {
  const [active, setActive] = useState(false);

  return (
    <mesh
      position={[0, 1, 0]}
      onClick={() => setActive(!active)} // Change material color on click
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={active ? 'red' : 'blue'} />
    </mesh>
  );
}
