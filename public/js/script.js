import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.136.0/build/three.module.js";

function createCube(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(200, 200);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(5, 5, 5);

  const blueMaterial = new THREE.MeshStandardMaterial({
    color: 0x005bbb,
  });
  const yellowMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd700,
  });

  const cube = new THREE.Mesh(geometry, [
    yellowMaterial, // front
    yellowMaterial, // back
    blueMaterial, // top
    blueMaterial, // bottom
    yellowMaterial, // right
    yellowMaterial, // left
  ]);

  scene.add(cube);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.012;
    cube.rotation.y += 0.012;

    renderer.render(scene, camera);
  }

  animate();
}

function create3DModel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(200, 200);
  container.appendChild(renderer.domElement);

  const serverGeometry = new THREE.BoxGeometry(3, 5, 3);
  const serverMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333, // dark grey
    roughness: 0.6,
  });
  const server = new THREE.Mesh(serverGeometry, serverMaterial);
  scene.add(server);

  const diskGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
  const diskMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6600, // orange
    emissive: 0xff6600,
    emissiveIntensity: 0.3,
  });
  const disk = new THREE.Mesh(diskGeometry, diskMaterial);
  disk.rotation.x = Math.PI / 2;
  disk.position.y = 1.5;
  server.add(disk);

  const cableMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
  const cablePoints = [
    new THREE.Vector3(-2, 2.5, 0),
    new THREE.Vector3(-5, 5, 0),
  ];
  const cableGeometry = new THREE.BufferGeometry().setFromPoints(cablePoints);
  const cable = new THREE.Line(cableGeometry, cableMaterial);
  scene.add(cable);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);

    server.rotation.y += 0.01; // Rotate the server
    disk.rotation.z += 0.05; // Make the disk spin inside the server
    cable.rotation.z += 0.01; // Rotate the cable

    renderer.render(scene, camera);
  }

  animate();
}

createCube("three-js-html");
createCube("three-js-js");
create3DModel("three-js-node");
create3DModel("three-js-post");
create3DModel("three-js-express");
create3DModel("three-js-prisma");
create3DModel("three-js-vercel");

//burger

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
