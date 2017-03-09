/* Tutorial: https://aerotwist.com/tutorials/creating-particles-with-three-js/ */

var camera;
var controls;
var scene;
var renderer;
var particles;
var particleCount;

const VIEW_ANGLE = 45;
const ASPECT = window.innerWidth / window.innerHeight;
const NEAR = 0.1;
const FAR = 10000;

function init() {
  renderer = new THREE.WebGLRenderer();
  camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
  );
  scene = new THREE.Scene();
  scene.add(camera);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  createParticleSystem();
}


function createParticleSystem() {
  particleCount = 1800;
  particles = new THREE.Geometry();
  particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 20
  });
  for (var p = 0; p < particleCount; p++) {
    var pX = Math.random() * 500 - 250;
    var pY = Math.random() * 500 - 250;
    var pZ = Math.random() * 500 - 250;

    particle = new THREE.Vector3(pX, pY, pZ);
    particles.vertices.push(particle);
  }

  var particleSystem = new THREE.Points(
    particles,
    particleMaterial
  );
  scene.add(particleSystem);

}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}


if (Detector.webgl) {
    init();
    render();
} else {
    var warning = Detector.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}