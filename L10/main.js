import * as THREE from 'three';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Calculate aspect ratio
const aspectRadio=window.innerWidth/window.innerHeight;

// Create the scene
const scene = new THREE.Scene();

// Set up the Orthographic Camera
const camera = new THREE.OrthographicCamera(
  -aspectRadio, aspectRadio, 1, -1, 0.1, 100
);
camera.position.z = 2;
scene.add(camera);

// Create the WebGL renderer and attach it to the canvas
const canvas = document.querySelector("#dd");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Handle window resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.left = -window.innerWidth / window.innerHeight;
  camera.right = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Add a red cube to the scene
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Start the animation
animate();

// Optional: Add GSAP animation to move the cube
gsap.to(cube.position, {
  x: 1,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
