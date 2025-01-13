import * as THREE from 'three';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;
scene.add(camera);

let box = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let mesh = new THREE.Mesh(box, material);
scene.add(mesh);

const canvas = document.querySelector("#dd");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', () => {

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})



const clock= new THREE.Clock();


function animate() {
  
  const time= clock.getElapsedTime();

  
   mesh.position.y= Math.cos(time);
   mesh.position.x=Math.sin(time);
   

  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();



