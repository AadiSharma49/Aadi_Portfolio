"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function useMousePointer() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return pointer;
}

function WireframeIcosahedron({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointer = useMousePointer();

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.y += delta * 0.09;
    mesh.rotation.x += delta * 0.035;
    const targetX = mesh.rotation.x + pointer.current.y * 0.12;
    const targetY = mesh.rotation.y + pointer.current.x * 0.18;
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetX, 0.04);
    mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetY, 0.04);
  });

  return (
    <Icosahedron ref={meshRef} args={[1.7, 1]}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.32} />
    </Icosahedron>
  );
}

function ParticleField({ color }: { color: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 600;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.6 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y -= delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.018}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene({
  isActive = true,
  color = "#fafafa",
}: {
  isActive?: boolean;
  color?: string;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop={isActive ? "always" : "never"}
    >
      <WireframeIcosahedron color={color} />
      <ParticleField color={color} />
    </Canvas>
  );
}
