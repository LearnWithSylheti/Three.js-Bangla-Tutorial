import * as THREE from 'three';

let scene= new THREE.Scene();
let camera= new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,100);
camera.position.z=2;
scene.add(camera);

const group= new THREE.Group();
scene.add(group);
group.position.y=0;
group.rotation.z=Math.PI/2;
let box= new THREE.BoxGeometry(1,1,1);
let material= new THREE.MeshBasicMaterial({color:"red"});
let mesh= new THREE.Mesh(box,material);
mesh.position.x=1;
group.add(mesh);

let box1= new THREE.BoxGeometry(1,1,1);
let material1= new THREE.MeshBasicMaterial({color:"blue"});
let mesh1= new THREE.Mesh(box1,material1);
mesh1.position.x=-1;
group.add(mesh1);
// mesh.position.x=0;
// mesh.position.y=0;
// mesh.position.z=-1.5;
// mesh.position.set(0.1,0.1,0.1);
//  mesh.scale.x=5;
//  mesh.scale.y=5;
//  mesh.scale.z=5;
// mesh.scale.set(5,5,5);
// mesh.rotation.x=-5;
// mesh.rotation.y=-5;
// mesh.rotation.z=-5;
// mesh.rotation.set(-5,-5,-5);



const canvas= document.querySelector("#dd");
const renderer= new THREE.WebGLRenderer({canvas:canvas, antialias:true});
 
renderer.setSize(window.innerWidth,window.innerHeight);
window.addEventListener('resize',()=>{
  
renderer.setSize(window.innerWidth,window.innerHeight);
camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
})

function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

animate();


