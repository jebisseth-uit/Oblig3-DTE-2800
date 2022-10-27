/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";

export async function createArmMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');

	//Konteiner for hele armen:
	const arm = new THREE.Group();

	let material = new THREE.MeshPhongMaterial({ map: textureObject });
	let materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});
	let sFoot = new THREE.BoxGeometry(20, 1, 5, 20, 5,);
	let meshFoot = new THREE.Mesh(sFoot, material);
	meshFoot.name = 'styrhusfoot1';
	meshFoot.position.x = 16;
	meshFoot.position.y = 0;
	meshFoot.position.z = 10;
	arm.add(meshFoot);

	//styrhusbody1:
	let styrhusbody1 = new THREE.BoxGeometry(19, 20, 20, 8, 1,);
	let meshstyrhusbody1 = new THREE.Mesh(styrhusbody1, materialAluminium);
	meshstyrhusbody1.name = 'styrhusbody1';
	meshstyrhusbody1.position.x = 0;
	meshstyrhusbody1.position.y = 8;	//Flytter opp 50 (halvparten av sylinderens høyde) + 10 (høyde på foten)
	meshstyrhusbody1.position.z = -10;
	meshFoot.add(meshstyrhusbody1);



	let sFoot2 = new THREE.BoxGeometry(20, 1, 5, 20, 5,);
	let meshFoot2 = new THREE.Mesh(sFoot2, material);
	meshFoot2.name = 'styrhusfoot2';
	meshFoot2.position.x = 16;
	meshFoot2.position.y = 0;
	meshFoot2.position.z = -10;
	arm.add(meshFoot2);

	const arm2 = new THREE.Group();

	//styrhusbody1:
	let styrhusbody2 = new THREE.BoxGeometry(19, 20, 20, 8, 1,);
	let meshstyrhusbody2 = new THREE.Mesh(styrhusbody1, materialAluminium);
	meshstyrhusbody2.name = 'styrhusbody2';
	meshstyrhusbody2.position.x = 0;
	meshstyrhusbody2.position.y = 118;	//Flytter opp 50 (halvparten av sylinderens høyde) + 10 (høyde på foten)
	meshstyrhusbody2.position.z = 10;
	arm2.add(meshstyrhusbody2);



	//** ArmAndJoint1:
	let armAndJoint1 = new THREE.Group();
	armAndJoint1.position.x = 0;
	armAndJoint1.position.y = 50;
	armAndJoint1.position.z = 0;
	armAndJoint1.name = 'armAndJoint1';





	//* joint1:
	let gJoint1 = new THREE.SphereGeometry(10, 8, 6);					//radius, widthSegments, heightSegments,
	let meshJoint1 = new THREE.Mesh(gJoint1, materialAluminium);
	meshJoint1.castShadow = true;
	meshJoint1.name = 'joint1';
	armAndJoint1.add(meshJoint1);
	//* arm1:
	let gMidArm = new THREE.CylinderGeometry(4, 4, 100, 8, 1, false);
	let meshMidArm = new THREE.Mesh(gMidArm, materialAluminium);
	meshMidArm.castShadow = true;
	meshMidArm.name = 'MidArm';
	meshMidArm.position.x = 0;
	meshMidArm.position.y = 50;
	meshMidArm.position.z = 0;
	armAndJoint1.add(meshMidArm);

	// Legg til parent:
	meshstyrhusbody1.add(armAndJoint1);

	//** ArmAndJoint2:
	let armAndJoint2 = new THREE.Group();
	armAndJoint2.position.x = 0;
	armAndJoint2.position.y = 100;
	armAndJoint2.position.z = 0;
	armAndJoint2.name = 'armAndJoint2';
	//* joint2:
	let gJoint2 = new THREE.SphereGeometry(10, 8, 6);					//radius, widthSegments, heightSegments,
	let meshJoint2 = new THREE.Mesh(gJoint2, materialAluminium);
	meshJoint2.name = 'joint2';
	meshJoint2.castShadow = true;
	armAndJoint2.add(meshJoint2);
	//* arm2:
	let gUpperArm = new THREE.CylinderGeometry(4, 4, 100, 8, 1, false);
	let meshUpperArm = new THREE.Mesh(gUpperArm, materialAluminium);
	meshUpperArm.castShadow = true;
	meshUpperArm.name = 'UpperArm';
	meshUpperArm.position.x = 0;
	meshUpperArm.position.y = 50;
	meshUpperArm.position.z = 0;
	armAndJoint2.add(meshUpperArm);

	// Legg til parent:
	armAndJoint1.add(armAndJoint2);

	return arm;
}
