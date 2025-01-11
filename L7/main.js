import * as THREE from 'three';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
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


// let time= Date.now();
// const clock= new THREE.Clock();
let clock= new THREE.Clock();

function animate() {
  // mesh.position.x +=0.01;
  // mesh.rotation.y+=0.01;
  // mesh.scale.x+=0.01;
  // console.log(clock);
  // const time= clock.getElapsedTime();
  // console.log(time);
  // mesh.rotation.z=time*Math.PI*2;
  
  const delta= clock.getDelta();
  console.log(delta);
  mesh.rotation.y+=2*delta;




//  const currenTime=Date.now();
//  const deltaTime= currenTime-time;
//  time=currenTime;
//  mesh.rotation.y+=0.001*deltaTime;
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();



