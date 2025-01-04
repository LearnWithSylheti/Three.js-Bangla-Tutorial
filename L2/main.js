let scene= new THREE.Scene();
let camera= new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,100);
camera.position.z=2;
scene.add(camera);

let box= new THREE.BoxGeometry(1,1,1);
let material= new THREE.MeshBasicMaterial({color:"red"});
let mesh= new THREE.Mesh(box,material);
scene.add(mesh);

const canvas= document.querySelector("#dd");
const renderer= new THREE.WebGLRenderer({canvas:canvas, antialias:true});
 

renderer.render(scene,camera);