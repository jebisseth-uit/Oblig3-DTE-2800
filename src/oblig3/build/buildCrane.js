/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {craneArmBuilder} from "../arm/craneArmBuilder.js";
import {createUndercarriageMesh} from "../belt/BeltHelper.js";
import {styrhus} from "../styrhus/styrhus.js";

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

	//styrhus
	let craneStyrhus = await styrhus();
	craneStyrhus.position.y = 90;
	craneStyrhus.position.x = 150;
	craneStyrhus.scale.x = 8;
	craneStyrhus.scale.y = 8;
	craneStyrhus.scale.z = 8;
	crane.add(craneStyrhus);

	return crane;
}