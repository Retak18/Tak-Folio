"use client";

import React, { useState, useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Détection iOS spécifique
const isIOS = () => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

// Détection mobile générale
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 1024 || isIOS();
};

// Fonction simplifiée pour générer moins de points sur iOS
const generateSpherePoints = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();
    const r = Math.cbrt(Math.random()) * radius;
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  
  return positions;
};

const StarBackground = (props: any) => {
  const ref = useRef<any>();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Réduction drastique pour iOS
  const particleCount = useMemo(() => {
    if (!mounted) return 100;
    if (isIOS()) return 150; // Très peu pour iOS
    if (isMobile()) return 300; // Réduit pour mobile
    return 600; // Réduit même sur desktop
  }, [mounted]);
  
  const particleSize = useMemo(() => {
    if (isIOS()) return 0.005; // Plus gros sur iOS pour compenser le nombre
    if (isMobile()) return 0.004;
    return 0.002;
  }, []);
  
  const sphere = useMemo(() => {
    try {
      return generateSpherePoints(particleCount, 1.0); // Rayon réduit
    } catch (error) {
      console.warn('Error generating sphere points:', error);
      return new Float32Array(300); // Fallback minimal
    }
  }, [particleCount]);

  useFrame((state, delta) => {
    if (ref.current && mounted) {
      try {
        const speed = isIOS() ? 30 : 15; // Plus lent sur iOS
        ref.current.rotation.x -= delta / speed;
        ref.current.rotation.y -= delta / (speed * 1.2);
      } catch (error) {
        console.warn('Animation error:', error);
      }
    }
  });

  if (!mounted) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false} // Désactivé pour iOS
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={particleSize}
          sizeAttenuation={true}
          depthWrite={false}
          fog={false}
        />
      </Points>
    </group>
  );
};

// Composant d'erreur fallback
const StarsFallback = () => (
  <div className="w-full h-auto fixed inset-0 z-[-1] bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
);

// Wrapper avec gestion d'erreur
class StarErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn('Stars component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <StarsFallback />;
    }
    return this.props.children;
  }
}

const StarsCanvas = () => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Test de support WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // Pas de rendu pendant le test ou si WebGL non supporté
  if (webglSupported === null || !webglSupported) {
    return <StarsFallback />;
  }

  return (
    <StarErrorBoundary>
      <div className="w-full h-auto fixed inset-0 z-[-1]">
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          dpr={isIOS() ? [0.5, 1] : [1, 2]} // DPR très bas sur iOS
          performance={{ min: 0.2 }} // Très permissif
          frameloop="demand" // Animation à la demande sur iOS
          gl={{ 
            antialias: false, // Jamais d'antialiasing
            alpha: true,
            powerPreference: "low-power",
            failIfMajorPerformanceCaveat: false, // Accepte les performances dégradées
            preserveDrawingBuffer: false,
            stencil: false,
            depth: false // Pas de depth buffer
          }}
          onCreated={(state) => {
            // Configuration supplémentaire pour iOS
            if (isIOS()) {
              state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 1));
            }
          }}
        >
          <Suspense fallback={null}>
            <StarBackground />
          </Suspense>
        </Canvas>
      </div>
    </StarErrorBoundary>
  );
};

export default StarsCanvas;