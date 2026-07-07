"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Octahedron } from "@react-three/drei";
import * as THREE from "three";

function SpinningShape({ hovering, color }: { hovering: boolean; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const speed = hovering ? 2.2 : 0.8;
    mesh.rotation.x += delta * speed * 0.6;
    mesh.rotation.y += delta * speed;
    const target = hovering ? 1.5 : 1;
    mesh.scale.lerp(new THREE.Vector3(target, target, target), 0.18);
  });

  return (
    <Octahedron ref={meshRef} args={[0.85, 0]}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.95} />
    </Octahedron>
  );
}

export default function CursorScene({ hovering, color }: { hovering: boolean; color: string }) {
  return (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 3], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ pointerEvents: "none" }}
    >
      <SpinningShape hovering={hovering} color={color} />
    </Canvas>
  );
}
