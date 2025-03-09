import * as THREE from 'three';
import gsap from "gsap";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';



// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.set(0, 2, 5); // Set initial camera position

// Add ambient light for overall illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
scene.add(ambientLight);

// Add directional light for shadows and highlights
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);


// Create the WebGL renderer and attach it to the canvas
const canvas = document.querySelector("#dd");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Handle window resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const gltfloader= new GLTFLoader();
const dracoLOader= new DRACOLoader();
dracoLOader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
gltfloader.setDRACOLoader(dracoLOader);



let mixer;
console.log(gltfloader);
gltfloader.load(
  '/new/avatershakib.glb',
  // ()=>{
  //   console.log('Success');
  // },
  // ()=>{
  //   console.log('Progress');
  // },
  // ()=>{
  //   console.log('Error');
  // }

  (gltf)=>{
      console.log(gltf);
      const model= gltf.scene;
      model.position.set(0,0,3);
      model.scale.set(1,1,1);
      console.log(model);
      mixer=new THREE.AnimationMixer(model);
     const action= mixer.clipAction(gltf.animations[1]);
      action.play();
      scene.add(model);
  }

)
const geometry = new THREE.PlaneGeometry(5, 5); // Width, Height
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, side: THREE.DoubleSide, wireframe: false });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Position the plane like a floor
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;

// Positioning camera
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);
const clock= new THREE.Clock()
let previousTime=0;
// Render loop
function animate() {
  const elapsedTime= clock.getElapsedTime();
  const deltaTime= elapsedTime-previousTime;
  previousTime=elapsedTime;
  if(mixer != null){
    mixer.update(deltaTime);
  }
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();




