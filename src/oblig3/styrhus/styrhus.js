import '../style.css';
//Globale variabler:
import * as THREE from "three";
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";
import {addCoordSystem} from "../../static/lib/wfa-coord.js";
import {createArmsMesh, createArmsMesh2, createBodyMesh, createBodyMesh2, createBoxMesh, createBoxMesh2, createFootMesh, createFootMesh2, createHandlesMesh, createHandlesMesh2, createRollersMesh, createStairsMesh, createStairsMesh2,} from "./oblig3Helper.js";

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
    g_camera = new THREE.PerspectiveCamera(105, window.innerWidth / window.innerHeight, 0.1, 1000);
    g_camera.position.x = -80;
    g_camera.position.y = 30;
    g_camera.position.z = 50;
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
    let body = await createBodyMesh();
    body.name = "body";
    body.baseRot = 0.0;
    body.joint1Rot = 0.0;
    body.joint2Rot = 0.0;
    g_scene.add(body);

    //
    let body2 = await createBodyMesh2();
    body2.name = "body2";
    body2.baseRot = 0.0;
    body2.joint1Rot = 0.0;
    body2.joint2Rot = 0.0;
    g_scene.add(body2);

    //
    let box = await createBoxMesh();
    box.name = "box";
    box.baseRot = 0.0;
    box.joint1Rot = 0.0;
    box.joint2Rot = 0.0;
    g_scene.add(box);

    //
    let box2 = await createBoxMesh2();
    box2.name = "box2";
    box2.baseRot = 0.0;
    box2.joint1Rot = 0.0;
    box2.joint2Rot = 0.0;
    g_scene.add(box2);

    //
    let foot = await createFootMesh();
    foot.name = "foot";
    foot.baseRot = 0.0;
    foot.joint1Rot = 0.0;
    foot.joint2Rot = 0.0;
    g_scene.add(foot);

    //
    let foot2 = await createFootMesh2();
    foot2.name = "foot2";
    foot2.baseRot = 0.0;
    foot2.joint1Rot = 0.0;
    foot2.joint2Rot = 0.0;
    g_scene.add(foot2);

    //
    let stairs = await createStairsMesh();
    stairs.name = "stairs";
    stairs.baseRot = 0.0;
    stairs.joint1Rot = 0.0;
    stairs.joint2Rot = 0.0;
    g_scene.add(stairs);

    //
    let stairs2 = await createStairsMesh2();
    stairs2.name = "stairs2";
    stairs2.baseRot = 0.0;
    stairs2.joint1Rot = 0.0;
    stairs2.joint2Rot = 0.0;
    g_scene.add(stairs2);

    //
    let handles = await createHandlesMesh();
    handles.name = "handles";
    handles.baseRot = 0.0;
    handles.joint1Rot = 0.0;
    handles.joint2Rot = 0.0;
    g_scene.add(handles);

    //
    let handles2 = await createHandlesMesh2();
    handles2.name = "handles2";
    handles2.baseRot = 0.0;
    handles2.joint1Rot = 0.0;
    handles2.joint2Rot = 0.0;
    g_scene.add(handles2);

    //
    let arms = await createArmsMesh();
    arms.name = "arms";
    arms.baseRot = 0.0;
    arms.joint1Rot = 0.0;
    arms.joint2Rot = 0.0;
    g_scene.add(arms);
    g_scene.add(handles);

    //
    let arms2 = await createArmsMesh2();
    arms2.name = "arms2";
    arms2.baseRot = 0.0;
    arms2.joint1Rot = 0.0;
    arms2.joint2Rot = 0.0;
    g_scene.add(arms2);

    //
    let rollers = await createRollersMesh();
    rollers.name = "rollers";
    rollers.baseRot = 0.0;
    rollers.joint1Rot = 0.0;
    rollers.joint2Rot = 0.0;
    g_scene.add(rollers);
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
function handleKeys(delta, arm) {
    let rotationSpeed = (Math.PI); // Bestemmer rotasjonshastighet.

    //Roter foten:s
    if (g_currentlyPressedKeys['KeyA']) { //A
        arm.baseRot = arm.baseRot + (rotationSpeed * delta);
        arm.baseRot %= (Math.PI * 2); // "Rull rundt" dersom arm.baseRot >= 360 grader.
    }
    if (g_currentlyPressedKeys['KeyD']) {	//D
        arm.baseRot = arm.baseRot - (rotationSpeed * delta);
        arm.baseRot %= (Math.PI * 2); // "Rull rundt" dersom arm.baseRot >= 360 grader.
    }

    //Roter joint1:
    if (g_currentlyPressedKeys['KeyS']) {	//S
        arm.joint1Rot = arm.joint1Rot + (rotationSpeed * delta);
        arm.joint1Rot %= (Math.PI * 2); // "Rull rundt" dersom arm.joint1Rot >= 360 grader.
    }
    if (g_currentlyPressedKeys['KeyW']) {	//W
        arm.joint1Rot = arm.joint1Rot - (rotationSpeed * delta);
        arm.joint1Rot %= (Math.PI * 2); // "Rull rundt" dersom arm.joint1Rot >= 360 grader.
    }

    //Roter joint2:
    if (g_currentlyPressedKeys['KeyV']) { //V
        arm.joint2Rot = arm.joint2Rot + (rotationSpeed * delta);
        arm.joint2Rot %= (Math.PI * 2); // "Rull rundt" dersom arm.joint2Rot >= 360 grader.
    }
    if (g_currentlyPressedKeys['KeyB']) {	//B
        arm.joint2Rot = arm.joint2Rot - (rotationSpeed * delta);
        arm.joint2Rot %= (Math.PI * 2); // "Rull rundt" dersom arm.joint2Rot >= 360 grader.
    }
}
