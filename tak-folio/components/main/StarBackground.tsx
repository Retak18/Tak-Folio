"use client";

import React, { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Fonction pour générer des points aléatoirement dans une sphère
const generateSpherePoints = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    // Méthode de rejection sampling pour une distribution uniforme dans une sphère
    let x, y, z;
    do {
      x = (Math.random() - 0.5) * 2;
      y = (Math.random() - 0.5) * 2;
      z = (Math.random() - 0.5) * 2;
    } while (x * x + y * y + z * z > 1);
    
    // Appliquer le rayon
    positions[i * 3] = x * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = z * radius;
  }
  
  return positions;
};

// Détection de device mobile
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const StarBackground = (props: any) => {
  const ref = useRef<any>();
  
  // Réduire le nombre de particules sur mobile pour les performances
  const particleCount = useMemo(() => isMobile() ? 400 : 800, []);
  const particleSize = useMemo(() => isMobile() ? 0.003 : 0.002, []);
  
  const sphere = useMemo(() => generateSpherePoints(particleCount, 1.2), [particleCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotation plus lente sur mobile pour économiser la batterie
      const rotationSpeed = isMobile() ? 20 : 10;
      ref.current.rotation.x -= delta / rotationSpeed;
      ref.current.rotation.y -= delta / (rotationSpeed * 1.5);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={particleSize}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Limite le pixel ratio pour les performances
        performance={{ min: 0.5 }} // Réduit automatiquement les FPS si nécessaire
        gl={{ 
          antialias: !isMobile(), // Antialiasing seulement sur desktop
          alpha: true,
          powerPreference: isMobile() ? "low-power" : "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;