/* ================================================
   PANCHRATNA — HERO-3D.JS
   Three.js scene: rotating golden mandala + spice particles + mouse parallax
   ================================================ */

'use strict';

(function initHero3D() {
  // Hide canvas on mobile
  if (window.innerWidth < 768) return;

  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // ——— Scene Setup ———
  const scene    = new THREE.Scene();
  const w        = window.innerWidth;
  const h        = window.innerHeight;
  const camera   = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.set(0, 0, 6);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // ——— Lighting ———
  const ambientLight = new THREE.AmbientLight(0xC9A84C, 0.25);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xC9A84C, 2.5, 20);
  pointLight.position.set(0, 4, 3);
  scene.add(pointLight);

  const pointLight2 = new THREE.PointLight(0xE8C96A, 1.5, 15);
  pointLight2.position.set(-3, -2, 2);
  scene.add(pointLight2);

  // RectAreaLight from below for drama
  let rectLight;
  if (THREE.RectAreaLight) {
    rectLight = new THREE.RectAreaLight(0x3B0A0A, 4, 6, 4);
    rectLight.position.set(0, -3, 2);
    rectLight.lookAt(0, 0, 0);
    scene.add(rectLight);
  }

  // ——— Mandala Geometry ———
  // Outer icosahedron wireframe
  const icoGeo    = new THREE.IcosahedronGeometry(1.8, 3);
  const icoMat    = new THREE.MeshStandardMaterial({
    color:     0xC9A84C,
    emissive:  0xC9A84C,
    emissiveIntensity: 0.3,
    metalness: 0.9,
    roughness: 0.15,
    wireframe: true,
    transparent: true,
    opacity: 0.55,
  });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  scene.add(icoMesh);

  // Inner solid icosahedron (glowing core)
  const icoGeoInner = new THREE.IcosahedronGeometry(0.8, 1);
  const icoMatInner = new THREE.MeshStandardMaterial({
    color:     0xC9A84C,
    emissive:  0xE8C96A,
    emissiveIntensity: 0.6,
    metalness: 1.0,
    roughness: 0.05,
    transparent: true,
    opacity: 0.7,
  });
  const icoMeshInner = new THREE.Mesh(icoGeoInner, icoMatInner);
  scene.add(icoMeshInner);

  // Orbiting ring
  const ringGeo = new THREE.TorusGeometry(2.2, 0.012, 8, 120);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xE8C96A,
    emissive: 0xC9A84C,
    emissiveIntensity: 0.5,
    metalness: 0.8,
    roughness: 0.2,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 3;
  scene.add(ring);

  const ring2 = ring.clone();
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.z = Math.PI / 6;
  scene.add(ring2);

  // ——— Spice Particle System ———
  const PARTICLE_COUNT = 200;
  const positions      = new Float32Array(PARTICLE_COUNT * 3);
  const velocities     = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    positions[i3]     = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 6;
    velocities.push({
      x: (Math.random() - 0.5) * 0.002,
      y:  Math.random() * 0.005 + 0.002,
      z: (Math.random() - 0.5) * 0.001,
    });
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color:       0xC9A84C,
    size:        0.04,
    transparent: true,
    opacity:     0.6,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // ——— Mouse Parallax ———
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;

  document.addEventListener('mousemove', (e) => {
    targetRotY = ((e.clientX / window.innerWidth)  - 0.5) * 0.5;
    targetRotX = ((e.clientY / window.innerHeight) - 0.5) * 0.3;
  });

  // ——— Animation Loop ———
  let frame = 0;

  function animate() {
    requestAnimationFrame(animate);
    frame++;

    // Mandala rotation
    icoMesh.rotation.y      += 0.002;
    icoMesh.rotation.x      += 0.0008;
    icoMeshInner.rotation.y -= 0.003;
    icoMeshInner.rotation.z += 0.001;
    ring.rotation.z          += 0.001;
    ring2.rotation.z         -= 0.0015;

    // Mouse parallax (lerp)
    currentRotX += (targetRotX - currentRotX) * 0.04;
    currentRotY += (targetRotY - currentRotY) * 0.04;
    camera.position.x = currentRotY * 1.2;
    camera.position.y = -currentRotX * 0.8;
    camera.lookAt(scene.position);

    // Update particle positions (float upward + drift)
    const posArr = particleGeo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      posArr[i3]     += velocities[i].x;
      posArr[i3 + 1] += velocities[i].y;
      posArr[i3 + 2] += velocities[i].z;
      // Reset if out of bounds
      if (posArr[i3 + 1] > 5.5) {
        posArr[i3 + 1] = -5.5;
        posArr[i3]     = (Math.random() - 0.5) * 10;
      }
    }
    particleGeo.attributes.position.needsUpdate = true;

    // Pulsing light
    if (pointLight) {
      pointLight.intensity = 2.5 + Math.sin(frame * 0.02) * 0.5;
    }

    renderer.render(scene, camera);
  }

  animate();

  // ——— Resize Handler ———
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      canvas.style.display = 'none';
      return;
    }
    canvas.style.display = '';
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

})();
