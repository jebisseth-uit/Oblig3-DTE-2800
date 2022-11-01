/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {radToDeg} from "three/src/math/MathUtils";
import math from "dat.gui/src/dat/color/math";
import {craneArmBuilder} from "../arm/craneArmBuilder.js";
import {createUndercarriageMesh} from "../belt/BeltHelper.js";

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

	//craneArm
	let craneArm = await craneArmBuilder();
	craneArm.scale.y = 2;
	craneArm.scale.x = 2;
	craneArm.scale.z = 2;
	crane.add(craneArm);

	//belt
	let craneBelt = await createUndercarriageMesh();
	crane.add(craneBelt);
	craneBelt.rotation.y = Math.PI/2;

	return crane;
}