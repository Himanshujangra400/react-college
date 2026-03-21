import { useEffect } from "react";
import * as THREE from "three";

function Free() {
  useEffect(() => {
    let scene;
    let camera;
    let renderer;
    let points;
    let animationFrameId;
    const particleCount = 25000;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouse = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 100;
      mouseY = (e.clientY - window.innerHeight / 2) / 100;
    };

    document.addEventListener("mousemove", handleMouse);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    const container = document.getElementById("canvas-container");
    if (!container) {
      return () => document.removeEventListener("mousemove", handleMouse);
    }

    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    const targets = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

      targets[i * 3] = (i % 50) - 25;
      targets[i * 3 + 1] = (Math.floor(i / 50) % 50) - 25;
      targets[i * 3 + 2] = Math.floor(i / 2500) - 5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geometry.setAttribute("target", new THREE.BufferAttribute(targets, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x0066b1,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const positionAttr = points.geometry.attributes.position;
      const targetAttr = points.geometry.attributes.target;

      for (let i = 0; i < particleCount; i += 1) {
        positionAttr.array[i * 3] +=
          (targetAttr.array[i * 3] * mouseX * 0.1 - positionAttr.array[i * 3]) *
          0.02;
        positionAttr.array[i * 3 + 1] +=
          (targetAttr.array[i * 3 + 1] * mouseY * 0.1 -
            positionAttr.array[i * 3 + 1]) *
          0.02;
        positionAttr.array[i * 3 + 2] += Math.sin(Date.now() * 0.001 + i) * 0.01;
      }

      positionAttr.needsUpdate = true;
      points.rotation.y += 0.002;

      renderer.render(scene, camera);

      const stream = document.getElementById("stream");
      if (stream) {
        stream.innerText =
          "CORE_PROCESS_ACTIVE: " + Math.random().toString(16).slice(2, 15);
      }
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-sm tracking-[15px] text-blue-500">
          ADVANCED ENGINEERING
        </p>
        <h1 className="bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-[8vw] font-black text-transparent">
          BCA
        </h1>
      </div>

      <div
        id="stream"
        className="absolute bottom-10 left-10 font-mono text-xs text-blue-500"
      ></div>

      <div id="canvas-container" className="absolute top-0 h-full w-full"></div>
    </div>
  );
}

export default Free;
