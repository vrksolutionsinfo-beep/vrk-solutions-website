'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import type { Group } from 'three';
function Object3D() {
  const ref = useRef<Group>(null);
  useFrame(({ pointer }) => {
    if (ref.current) {
      ref.current.rotation.y +=
        (pointer.x * 0.16 - ref.current.rotation.y) * 0.03;
      ref.current.rotation.x +=
        (-pointer.y * 0.08 - ref.current.rotation.x) * 0.03;
    }
  });
  return (
    <group ref={ref} rotation={[0, 0, -0.3]}>
      {[-1, 0, 1].map((n) => (
        <group
          key={n}
          position={[n * 0.94, n * 0.35, 0]}
          rotation={[0, 0, -0.28]}
        >
          <mesh castShadow position={[-0.31, 0, 0]} rotation={[0, 0, 0.28]}>
            <boxGeometry args={[0.33, 2.5, 0.65]} />
            <meshStandardMaterial
              color="#e85d24"
              roughness={0.3}
              metalness={0.22}
            />
          </mesh>
          <mesh castShadow position={[0.32, 0, 0]} rotation={[0, 0, -0.28]}>
            <boxGeometry args={[0.33, 2.5, 0.65]} />
            <meshStandardMaterial
              color="#ed6828"
              roughness={0.3}
              metalness={0.22}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
export default function Sculpture() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const id = requestAnimationFrame(() =>
      setReady(
        !media.matches &&
          innerWidth > 760 &&
          !!document.createElement('canvas').getContext('webgl2'),
      ),
    );
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      className="sculpture"
      role="img"
      aria-label="Orange architectural structure inspired by interconnected letterforms"
    >
      <div className="sculpture-fallback" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      {ready && (
        <Canvas
          shadows
          camera={{ position: [4, 3, 7], fov: 36 }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <color attach="background" args={['#f3f0ea']} />
          <ambientLight intensity={1.4} />
          <directionalLight position={[3, 7, 5]} intensity={4} castShadow />
          <Suspense fallback={null}>
            <Object3D />

            <ContactShadows
              position={[0, -1.9, 0]}
              opacity={0.3}
              scale={12}
              blur={3}
            />
          </Suspense>
        </Canvas>
      )}
      <span className="object-label">FIG. 01 / ENGINEERED FOR MOMENTUM</span>
    </div>
  );
}
