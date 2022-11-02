import '../style.css';
//Globale variabler:
import * as THREE from "three";
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";
import {addCoordSystem} from "../../static/lib/wfa-coord.js";
import {buildCrane} from "./build/buildCrane.js";

//Globale variabler:
let g_scene, g_renderer, g_camera, g_clock, g_controls, g_currentlyPressedKeys = [];
let g_propellerAngle = 0;

//STARTER!
await main();

export async function main() {
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);

	// Renderer:
	g_renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	g_renderer.setSize(window.innerWidth, window.innerHeight);
	g_renderer.setClearColor(0xBFD104, 0xff);  //farge, alphaverdi.
	g_renderer.shadowMap.enabled = true; //NB!
	g_renderer.shadowMapSoft = true;
	g_renderer.shadowMap.type = THREE.PCFSoftShadowMap; //THREE.BasicShadowMap;

	// Scene
	g_scene = new THREE.Scene();
	g_scene.background = new THREE.Color( 0xdddddd );
	// Sceneobjekter
	await addSceneObjects();
	addLights();

	// Kamera:
	g_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
	g_camera.position.x = 50;
	g_camera.position.y = 300;
	g_camera.position.z = 300;
	g_camera.up = new THREE.Vector3(0, 1, 0);
	let target = new THREE.Vector3(0.0, 0.0, 0.0);
	g_camera.lookAt(target);

	// TrackballControls:
	g_controls = new TrackballControls(g_camera, g_renderer.domElement);
	g_controls.addEventListener( 'change', renderScene);

	// Klokke for animasjon
	g_clock = new THREE.Clock();

	//Håndterer endring av vindusstørrelse:
	window.addEventListener('resize', onWindowResize, false);
	//Input - standard Javascript / WebGL:
	document.addEventListener('keyup', handleKeyUp, false);
	document.addEventListener('keydown', handleKeyDown, false);

	// Start animasjonsløkka:
	animate(0);
}

function handleKeyUp(event) {
	g_currentlyPressedKeys[event.code] = false;
}

function handleKeyDown(event) {
	g_currentlyPressedKeys[event.code] = true;
}

async function addSceneObjects() {
	addCoordSystem(g_scene);

	//Texture
	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/dirtground.jpg');

	// Plan:
	let gPlane = new THREE.PlaneGeometry(6000, 6000, 40, 40);
	//let mPlane = new THREE.MeshLambertMaterial({ color: 0x91aff11, side: THREE.DoubleSide, wireframe:false });
	//let mPlane = new THREE.Mesh(gPlane, materialBlue);
	let mPlane = new THREE.MeshPhongMaterial({map: texture});
	let meshPlane = new THREE.Mesh(gPlane, mPlane);
	meshPlane.rotation.x = Math.PI / -2;
	meshPlane.receiveShadow = true;	//NB!
	g_scene.add(meshPlane);

	//
	//let crane = await createcraneMesh();

	//g_scene.add(crane);

	//let crane = await  createCranecraneMesh();
	//g_scene.add(crane);

	//let crane = await cranecraneBuilder()
	let crane = await buildCrane();
	crane.name = "crane";
	crane.baseRot = 0.0;
	crane.joint1Rot = 0.0;
	crane.joint2Rot = 0.0;
	g_scene.add(crane);

}

function addLights() {
	//Retningsorientert lys (som gir skygge):
	let directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0); //farge, intensitet (1=default)
	directionalLight1.position.set(0, 300, 300);
	directionalLight1.shadow.mapSize.width = 1024;
	directionalLight1.shadow.mapSize.height = 1024;
	directionalLight1.castShadow = true;
	directionalLight1.shadow.camera.near = -800;
	directionalLight1.shadow.camera.far = 2000;
	directionalLight1.shadow.camera.left = -800;
	directionalLight1.shadow.camera.right = 1200;
	directionalLight1.shadow.camera.top = 2000;
	directionalLight1.shadow.camera.bottom = -400;
	directionalLight1.shadow.camera.visible = true;

	let ambientLight1 = new THREE.AmbientLight(0xffffff,0.2)
	g_scene.add(ambientLight1);

	//Hjelpeklasse for å vise lysets utstrekning:
	let lightCamHelper = new THREE.CameraHelper( directionalLight1.shadow.camera );
	//g_scene.add( lightCamHelper );

	g_scene.add(directionalLight1);
}

function animate(currentTime) {
	window.requestAnimationFrame((currentTime) => {
		animate(currentTime);
	});

	let delta = g_clock.getDelta();

	//Oppdater trackball-kontrollen:
	g_controls.update();

	//Roterer heile skjiten:
	let crane = g_scene.getObjectByName("crane");
	crane.rotation.y = crane.baseRot;
	let craneOverBelt = crane.getObjectByName('craneOverBelt', true);  //true = recursive...
	craneOverBelt.rotation.y = crane.joint1Rot;

	//let craneArm= crane.getObjectByName('craneArm', true);  //true = recursive...
	//craneArm.rotation.x = crane.joint2Rot;

	//Sjekker input:
	handleKeys(delta, crane);

	//Tegner scenen med gitt kamera:
	renderScene();
}

function renderScene()
{
	g_renderer.render(g_scene, g_camera);
}


function onWindowResize() {
	g_camera.aspect = window.innerWidth / window.innerHeight;
	g_camera.updateProjectionMatrix();
	g_renderer.setSize(window.innerWidth, window.innerHeight);
	g_controls.handleResize();
	renderScene();
}

//Sjekker tastaturet:
function handleKeys(delta, crane) {
	let rotationSpeed = (Math.PI); // Bestemmer rotasjonshastighet.

	//Roter foten:s
	if (g_currentlyPressedKeys['KeyA']) { //A
		crane.baseRot = crane.baseRot + (rotationSpeed * delta);
		crane.baseRot %= (Math.PI * 2); // "Rull rundt" dersom crane.baseRot >= 360 grader.
	}
	if (g_currentlyPressedKeys['KeyD']) {	//D
		crane.baseRot = crane.baseRot - (rotationSpeed * delta);
		crane.baseRot %= (Math.PI * 2); // "Rull rundt" dersom crane.baseRot >= 360 grader.
	}

	//Roter joint1:
	if (g_currentlyPressedKeys['KeyS']) {	//S
		crane.joint1Rot = crane.joint1Rot + (rotationSpeed * delta);
		crane.joint1Rot %= (Math.PI * 2); // "Rull rundt" dersom crane.joint1Rot >= 360 grader.
	}
	if (g_currentlyPressedKeys['KeyW']) {	//W
		crane.joint1Rot = crane.joint1Rot - (rotationSpeed * delta);
		crane.joint1Rot %= (Math.PI * 2); // "Rull rundt" dersom crane.joint1Rot >= 360 grader.
	}

	//Roter joint2:
	if (g_currentlyPressedKeys['KeyV']) { //V
		crane.joint2Rot = crane.joint2Rot + (rotationSpeed * delta);
		crane.joint2Rot %= (Math.PI * 2); // "Rull rundt" dersom crane.joint2Rot >= 360 grader.
	}
	if (g_currentlyPressedKeys['KeyB']) {	//B
		crane.joint2Rot = crane.joint2Rot - (rotationSpeed * delta);
		crane.joint2Rot %= (Math.PI * 2); // "Rull rundt" dersom crane.joint2Rot >= 360 grader.
	}
}