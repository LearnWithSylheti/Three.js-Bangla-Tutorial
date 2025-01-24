import * as THREE from 'three';
import gsap from "gsap";

// Create the scene
let scene = new THREE.Scene();

// Set up the Perspective Camera
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;
scene.add(camera);

// Track the cursor's normalized position
const cursor={
  x:0,
  y:0
}

window.addEventListener("mousemove",(e)=>{
  
  cursor.x=e.clientX/window.innerWidth-0.5;
  cursor.y=e.clientY/window.innerWidth-0.5;
  console.log(cursor.x,cursor.y);
})

// Create a red cube
let box = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let cube = new THREE.Mesh(box, material);
scene.add(cube);

// Set up the renderer
const canvas = document.querySelector("#dd");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Handle window resizing
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
  // Smoothly update the camera's position based on the cursor
  
  camera.position.x=Math.sin(cursor.x*Math.PI*2)*2;
  camera.position.z=Math.cos(cursor.y*Math.PI*2)*2;
  camera.position.y=cursor.y*3;

  // Make the camera look at the cube
  camera.lookAt(cube.position);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
