/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {craneArmBuilder} from "../arm/craneArmBuilder.js";
import {createUndercarriageMesh} from "../belt/BeltHelper.js";
import {styrhus} from "../styrhus/styrhus.js";
import {hookComplete} from "../Hook/hook";

export async function buildCrane(){

	const crane = new THREE.Group;

	//Hook
	let hook = await hookComplete()
	hook.scale.y = 1;
	hook.scale.x = 1;
	hook.scale.z = 1;
	crane.add(hook);

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
	craneStyrhus.position.x = 350;
	craneStyrhus.scale.x = 15;
	craneStyrhus.scale.y = 15;
	craneStyrhus.scale.z = 15;
	crane.add(craneStyrhus);

	return crane;
}