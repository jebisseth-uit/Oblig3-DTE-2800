/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {craneArmBuilder} from "../arm/craneArmBuilder.js";
import {createUndercarriageMesh} from "../belt/BeltHelper.js";
import {styrhus} from "../styrhus/styrhus.js";

export async function createLogoPlate(width=1, height=1, depth=1){

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/238logo.png');

	let material = new THREE.MeshPhongMaterial({map: texture});

	//Container for arm logo:
	const craneLogo = new THREE.Group;

	let logoPlate = new THREE.BoxGeometry(width,height,depth);
	let logoPlateMesh = new THREE.Mesh(logoPlate, material);
	logoPlateMesh.castShadow = true;
	logoPlateMesh.receiveShadow = true;
	logoPlate.name = "Logo";
	craneLogo.add(logoPlateMesh);

	return craneLogo;
}

export async function buildCrane(){

	const crane = new THREE.Group;
	const craneOverBelt = new THREE.Group;
	craneOverBelt.name = 'craneOverBelt'
	crane.add(craneOverBelt);

	//craneArm
	let craneArm = await craneArmBuilder();
	craneArm.scale.y = 2;
	craneArm.scale.x = 2;
	craneArm.scale.z = 2;
	craneOverBelt.add(craneArm);

	//belt
	let craneBelt = await createUndercarriageMesh();
	crane.add(craneBelt);
	craneBelt.castShadow = true;
	craneBelt.recieveShadow = true;
	craneBelt.rotation.y = Math.PI/2;

	//styrhus
	let craneStyrhus = await styrhus();
	craneStyrhus.position.y = 90;
	craneStyrhus.position.x = 150;
	craneStyrhus.scale.x = 8;
	craneStyrhus.scale.y = 8;
	craneStyrhus.scale.z = 8;
	craneOverBelt.add(craneStyrhus);

	return crane;
}