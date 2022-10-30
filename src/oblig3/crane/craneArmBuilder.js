/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {createCraneArmMesh} from "./craneArm.js";
import {createLogoPlate} from "./craneAssets.js";

export async function craneArmBuilder(){
	const craneArm = new THREE.Group;

	const barRadius = 1.5;

	//CraneStart
	const craneStartModules = 6;
	const craneStartModuleHeight = 10;
	const craneStartBottomX = 10;
	const craneStartBottomZ = 15;
	const craneStartTopX = 40;
	const craneStartTopZ = 40;

	//CraneLowerJoint
	const craneLowerJointModules = 4;
	const craneLowerJointModuleHeight = 20;

	//CraneCentral
	const craneCentralModules = 6;
	const craneCentralModuleHeight = 60;

	//CraneUpperJoint
	const craneUpperJointModules = 4;
	const craneUpperJointModuleHeight = 20;

	//CraneEnd
	const craneEndModules = 4;
	const craneEndModuleHeight = 20;
	const craneEndTopX = 10;
	const craneEndTopZ = 15;

	let craneStart = await createCraneArmMesh(craneStartModules,craneStartTopX,craneStartBottomX,craneStartTopZ,craneStartBottomZ,craneStartModuleHeight,barRadius);
	let craneLowerJoint = await  createCraneArmMesh(craneLowerJointModules, craneStartTopX,craneStartTopZ,craneStartTopX,craneStartTopZ,craneLowerJointModuleHeight,barRadius);
	let craneCentral = await createCraneArmMesh(craneCentralModules,craneStartTopX,craneStartTopX,craneStartTopZ,craneStartTopZ,craneCentralModuleHeight, barRadius);
	let craneUpperJoint = await  createCraneArmMesh(craneUpperJointModules, craneStartTopX,craneStartTopX,craneStartTopZ,craneStartTopZ,craneUpperJointModuleHeight,barRadius);
	let craneEnd = await createCraneArmMesh(craneEndModules,craneEndTopX,craneStartTopX,craneEndTopZ,craneStartTopZ,craneEndModuleHeight,barRadius);
	let craneLogo = await createLogoPlate(60,30,1);
	let craneLogo2 = craneLogo.clone();


	craneArm.add(craneStart);
	craneArm.add(craneLowerJoint);
	craneLowerJoint.add(craneCentral);
	craneCentral.add(craneUpperJoint);
	craneUpperJoint.add(craneEnd);
	craneUpperJoint.add(craneLogo);
	craneUpperJoint.add(craneLogo2);

	craneLowerJoint.position.y = craneStartModules*craneStartModuleHeight; //Move lower joint to end of start-module
	craneCentral.position.y = craneLowerJointModules*craneLowerJointModuleHeight; //Move central-module to end of lower joint
	craneUpperJoint.position.y = craneCentralModules*craneCentralModuleHeight; //Move upper joint to end of central-module
	craneEnd.position.y = craneUpperJointModules*craneUpperJointModuleHeight; //Move end-module to end of upper joint

	//Logo
	craneLogo.rotation.set(0,0,Math.PI/2)
	craneLogo.position.z = craneStartTopX/2+2*barRadius;
	craneLogo.position.y = (craneUpperJointModules*craneUpperJointModuleHeight)/2

	//Logo2
	craneLogo2.rotation.set(0,0,Math.PI/2)
	craneLogo2.position.z = -craneStartTopX/2-2*barRadius;
	craneLogo2.position.y = (craneUpperJointModules*craneUpperJointModuleHeight)/2


	return craneArm;
}
