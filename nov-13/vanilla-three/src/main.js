import './style.css';
import * as THREE from 'three';

// create the scene
const scene = new THREE.Scene();

// create the camera
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.01, 1000);

// create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create lights for the scene
const ambientLight = new THREE.AmbientLight(0xfffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.x = 10;
directionalLight.position.y = 20;
scene.add(directionalLight);

// create a box to put in the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.rotateX(0.5);
cube.rotateY(0.5);

scene.add(cube);

// set camera position
camera.position.z = 5;

// create render loop
function render() {
  cube.rotateX(0.05);
  cube.rotateY(0.05);

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(render);
