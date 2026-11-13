"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Verify WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5eb, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf47735, 1.5);
    fillLight.position.set(-6, -2, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
    rimLight.position.set(0, -6, 4);
    scene.add(rimLight);

    // Root Monolith Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Bespoke Materials: Premium Matte Orange Powder-Coating & Warm Ivory Highlights
    const primaryMatteOrange = new THREE.MeshStandardMaterial({
      color: 0xe85d24,
      roughness: 0.35,
      metalness: 0.15,
    });

    const deepOrangeMatte = new THREE.MeshStandardMaterial({
      color: 0xc54a1a,
      roughness: 0.4,
      metalness: 0.1,
    });

    const highlightOrange = new THREE.MeshStandardMaterial({
      color: 0xf47735,
      roughness: 0.25,
      metalness: 0.2,
    });

    const warmIvoryMatte = new THREE.MeshStandardMaterial({
      color: 0xf3f0ea,
      roughness: 0.5,
      metalness: 0.05,
    });

    // 1. Central Architectural Monolith (V & R Intersecting Ribbons)
    const basePillarGeo = new THREE.BoxGeometry(0.75, 3.4, 0.75);
    const pillarLeft = new THREE.Mesh(basePillarGeo, primaryMatteOrange);
    pillarLeft.position.set(-0.9, 0, 0);
    pillarLeft.rotation.z = 0.22;
    rootGroup.add(pillarLeft);

    const pillarRight = new THREE.Mesh(basePillarGeo, primaryMatteOrange);
    pillarRight.position.set(0.9, 0, 0);
    pillarRight.rotation.z = -0.22;
    rootGroup.add(pillarRight);

    // 2. Interlocking Torus Cantilever (Scaling Motion)
    const ringGeo = new THREE.TorusGeometry(1.4, 0.22, 24, 64, Math.PI * 1.5);
    const ringMesh = new THREE.Mesh(ringGeo, highlightOrange);
    ringMesh.rotation.x = Math.PI / 2.3;
    ringMesh.rotation.y = -Math.PI / 6;
    ringMesh.position.set(0, 0.2, 0.3);
    rootGroup.add(ringMesh);

    // 3. Precision Engineering Octahedron Core
    const octaGeo = new THREE.OctahedronGeometry(0.65, 0);
    const octaMesh = new THREE.Mesh(octaGeo, deepOrangeMatte);
    octaMesh.position.set(0, -0.3, 0);
    rootGroup.add(octaMesh);

    // 4. Floating Minimalist Orbit Plinths (Ivory/Stone accents)
    const plinthGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 16);
    const plinth1 = new THREE.Mesh(plinthGeo, warmIvoryMatte);
    plinth1.position.set(-1.8, 1.2, -0.5);
    plinth1.rotation.z = Math.PI / 3;
    rootGroup.add(plinth1);

    const plinth2 = new THREE.Mesh(plinthGeo, warmIvoryMatte);
    plinth2.position.set(1.7, -1.1, 0.6);
    plinth2.rotation.z = -Math.PI / 4;
    rootGroup.add(plinth2);

    // Pointer Interaction Handling
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.8;
      targetRotationX = y * 0.5;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Slow continuous resting float
        rootGroup.rotation.y += 0.35 * delta;
        rootGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

        // Subtle pointer tracking interpolation
        rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;
        rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;

        // Micro motion on core
        octaMesh.rotation.y -= 0.6 * delta;
        octaMesh.rotation.x += 0.3 * delta;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      basePillarGeo.dispose();
      ringGeo.dispose();
      octaGeo.dispose();
      plinthGeo.dispose();
      primaryMatteOrange.dispose();
      deepOrangeMatte.dispose();
      highlightOrange.dispose();
      warmIvoryMatte.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[540px] flex items-center justify-center">
      {hasWebGL ? (
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          aria-label="Interactive 3D Architectural Emblem of VRK Solutions"
          role="img"
        />
      ) : (
        /* Static High-Performance SVG Fallback */
        <div className="w-full h-full flex items-center justify-center p-8">
          <svg
            viewBox="0 0 400 480"
            className="w-full max-w-sm h-auto drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="120,40 200,180 160,180 80,40" fill="#E85D24" />
            <polygon points="280,40 200,180 240,180 320,40" fill="#E85D24" />
            <polygon points="160,180 200,250 240,180 200,110" fill="#C54A1A" />
            <path
              d="M100 250 C100 350, 300 350, 300 250"
              stroke="#F47735"
              strokeWidth="24"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="200" cy="250" r="16" fill="#202322" />
          </svg>
        </div>
      )}
    </div>
  );
}
