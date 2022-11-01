/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {createCraneArmMesh} from "./craneArm.js";
import {createLogoPlate} from "./craneAssets.js";
import {createCraneEndPiece} from "./craneAssets";
import {createCraneHookWires} from "./craneAssets.js";

export async function craneArmBuilder(){
	const craneArm = new THREE.Group;
	craneArm.castShadow = true;
	craneArm.receiveShadow = true;

	const barRadius = 1.5;

	//CraneStart
	const craneStartModules = 6;
	const craneStartModuleHeight = 15;
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
	const craneEndTopX = 20;
	const craneEndTopZ = 30;

	//CraneWires
	const wireLength = 400;

	let craneStart = await createCraneArmMesh(craneStartModules,craneStartTopX,craneStartBottomX,craneStartTopZ,craneStartBottomZ,craneStartModuleHeight,barRadius, "craneStart");
	let craneLowerJoint = await  createCraneArmMesh(craneLowerJointModules, craneStartTopX,craneStartTopZ,craneStartTopX,craneStartTopZ,craneLowerJointModuleHeight,barRadius, "craneLowerJoint");
	let craneCentral = await createCraneArmMesh(craneCentralModules,craneStartTopX,craneStartTopX,craneStartTopZ,craneStartTopZ,craneCentralModuleHeight, barRadius, "craneCentral");
	let craneUpperJoint = await  createCraneArmMesh(craneUpperJointModules, craneStartTopX,craneStartTopX,craneStartTopZ,craneStartTopZ,craneUpperJointModuleHeight,barRadius, "craneUpperJoint");
	let craneEnd = await createCraneArmMesh(craneEndModules,craneStartTopX,craneEndTopX,craneStartTopZ,craneEndTopZ,craneEndModuleHeight,barRadius, "craneEnd");
	let craneEndPiece = await createCraneEndPiece(craneEndTopX, craneEndTopX, craneEndTopZ, "craneEndPiece");
	let craneWires = await createCraneHookWires(0.5, wireLength, 10,10)
	let craneLogo = await createLogoPlate(60,30,1);
	let craneLogo2 = craneLogo.clone();

	craneEnd.rotation.x = Math.PI;
	craneEndPiece.rotation.x = Math.PI;

	craneArm.add(craneStart);
	craneArm.add(craneLowerJoint);
	craneLowerJoint.add(craneCentral);
	craneCentral.add(craneUpperJoint);
	craneUpperJoint.add(craneEnd);
	craneUpperJoint.add(craneLogo);
	craneUpperJoint.add(craneLogo2);
	craneEnd.add(craneEndPiece);
	craneEnd.add(craneWires);

	craneLowerJoint.position.y = craneStartModules*craneStartModuleHeight; //Move lower joint to end of start-module
	craneCentral.position.y = craneLowerJointModules*craneLowerJointModuleHeight; //Move central-module to end of lower joint
	craneUpperJoint.position.y = craneCentralModules*craneCentralModuleHeight; //Move upper joint to end of central-module
	craneEnd.position.y = (craneUpperJointModules*craneUpperJointModuleHeight)*2; //Move end-module to end of upper joint

	//Wire
	//craneWires.position.y = craneCentralModules*craneCentralModuleHeight
	craneWires.position.y = craneEndModules*craneEndModuleHeight;
	craneWires.position.y = (wireLength/2)-30;
	craneWires.position.x = 85;
	craneWires.rotation.z = -Math.PI/8;

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
