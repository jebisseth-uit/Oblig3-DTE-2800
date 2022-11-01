import '../../style.css';
//Globale variabler:
import * as THREE from "three";
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";
import {addCoordSystem} from "../../../static/lib/wfa-coord.js";
import {createUndercarriageMesh,} from "./BeltHelper.js";

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
	g_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	g_camera.position.x = 230;
	g_camera.position.y = 400;
	g_camera.position.z = 350;
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

	// Plan:
	let gPlane = new THREE.PlaneGeometry(600, 600, 10, 10);
	let mPlane = new THREE.MeshLambertMaterial({ color: 0x91aff11, side: THREE.DoubleSide, wireframe:true });
	let meshPlane = new THREE.Mesh(gPlane, mPlane);
	meshPlane.rotation.x = Math.PI / 2;
	meshPlane.receiveShadow = true;	//NB!
	g_scene.add(meshPlane);

	//
	let undercarriage = await createUndercarriageMesh();
	undercarriage.name = "undercarriage";
	undercarriage.baseRot = 0.0;
	undercarriage.joint1Rot = 0.0;
	undercarriage.joint2Rot = 0.0;
	g_scene.add(undercarriage);
}

function addLights() {
	//Retningsorientert lys (som gir skygge):
	let directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0); //farge, intensitet (1=default)
	directionalLight1.position.set(0, 300, 0);
	directionalLight1.castShadow = true;
	directionalLight1.shadow.camera.near = 0;
	directionalLight1.shadow.camera.far = 301;
	directionalLight1.shadow.camera.left = -50;
	directionalLight1.shadow.camera.right = 50;
	directionalLight1.shadow.camera.top = 250;
	directionalLight1.shadow.camera.bottom = -250;
	directionalLight1.shadow.camera.visible = true;

	//Hjelpeklasse for å vise lysets utstrekning:
	let lightCamHelper = new THREE.CameraHelper( directionalLight1.shadow.camera );
	g_scene.add( lightCamHelper );

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
	let undercarriage = g_scene.getObjectByName("undercarriage");
	undercarriage.rotation.y = undercarriage.baseRot;
	//let undercarriageAndJoint1 = undercarriage.getObjectByName('undercarriage', true);  //true = recursive...
	undercarriage.rotation.x = undercarriage.joint1Rot;

	//let undercarriageAndJoint2 = undercarriage.getObjectByName('undercarriage', true);  //true = recursive...
	//undercarriage.rotation.x = undercarriage.joint2Rot;

	//Sjekker input:
	handleKeys(delta, undercarriage);

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
function handleKeys(delta, undercarriage) {
	let rotationSpeed = (Math.PI); // Bestemmer rotasjonshastighet.

	//Roter foten:s
	if (g_currentlyPressedKeys['KeyA']) { //A
		undercarriage.baseRot = undercarriage.baseRot + (rotationSpeed * delta);
		undercarriage.baseRot %= (Math.PI * 2); // "Rull rundt" dersom undercarriage.baseRot >= 360 grader.
	}
	if (g_currentlyPressedKeys['KeyD']) {	//D
		undercarriage.baseRot = undercarriage.baseRot - (rotationSpeed * delta);
		undercarriage.baseRot %= (Math.PI * 2); // "Rull rundt" dersom undercarriage.baseRot >= 360 grader.
	}

	//Roter joint1:
	if (g_currentlyPressedKeys['KeyS']) {	//S
		undercarriage.joint1Rot = undercarriage.joint1Rot + (rotationSpeed * delta);
		undercarriage.joint1Rot %= (Math.PI * 2); // "Rull rundt" dersom undercarriage.joint1Rot >= 360 grader.
	}
	if (g_currentlyPressedKeys['KeyW']) {	//W
		undercarriage.joint1Rot = undercarriage.joint1Rot - (rotationSpeed * delta);
		undercarriage.joint1Rot %= (Math.PI * 2); // "Rull rundt" dersom undercarriage.joint1Rot >= 360 grader.
	}

	//Roter joint2:
	if (g_currentlyPressedKeys['KeyV']) { //V
		undercarriage.joint2Rot = undercarriage.joint2Rot + (rotationSpeed * delta);
		undercarriage.joint2Rot %= (Math.PI * 2); // "Rull rundt" dersom undercarriage.joint2Rot >= 360 grader.
	}
	if (g_currentlyPressedKeys['KeyB']) {	//B
		undercarriage.joint2Rot = undercarriage.joint2Rot - (rotationSpeed * delta);
		undercarriage.joint2Rot %= (Math.PI * 2); // "Rull rundt" dersom undercarriage.joint2Rot >= 360 grader.
	}
}
