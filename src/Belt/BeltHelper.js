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
	let gFoot = new THREE.CylinderGeometry(20, 30, 10, 20, 5, false);
	let meshFoot = new THREE.Mesh(gFoot, material);
	meshFoot.name = 'foot';
	meshFoot.position.x = 0;
	meshFoot.position.y = 5;
	meshFoot.position.z = 0;
	arm.add(meshFoot);

	//LowerArm:
	let gLowerArm = new THREE.CylinderGeometry(4, 4, 100, 8, 1, false);
	let meshLowerArm = new THREE.Mesh(gLowerArm, materialAluminium);
	meshLowerArm.name = 'LowerArm';
	meshLowerArm.position.x = 0;
	meshLowerArm.position.y = 60;	//Flytter opp 50 (halvparten av sylinderens høyde) + 10 (høyde på foten)
	meshLowerArm.position.z = 0;
	meshFoot.add(meshLowerArm);

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
	meshLowerArm.add(armAndJoint1);

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



	//* BeltPieceMain
	let BeltPieceMain = new THREE.BoxGeometry(100, 20, 4, 1, 1,1);
	let meshBeltPieceMain = new THREE.Mesh(BeltPieceMain, material);
	meshBeltPieceMain.castShadow = true;
	meshBeltPieceMain.name = 'BeltPieceMain';
	meshBeltPieceMain.position.x = 0;
	meshBeltPieceMain.position.y = 50;
	meshBeltPieceMain.position.z = 100;
	armAndJoint1.add(meshBeltPieceMain);

	//* BeltPieceTopMiddle
	let BeltPieceTopMiddle = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	let meshBeltPieceTopMiddle = new THREE.Mesh(BeltPieceTopMiddle, materialAluminium);
	meshBeltPieceTopMiddle.castShadow = true;
	meshBeltPieceTopMiddle.name = 'BeltPieceTopMiddle';
	meshBeltPieceTopMiddle.position.x = 0;
	meshBeltPieceTopMiddle.position.y = 10;
	meshBeltPieceTopMiddle.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopMiddle);

	//* BeltPieceTopSmallLeft
	let BeltPieceTopSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	let meshBeltPieceTopSmallLeft = new THREE.Mesh(BeltPieceTopSmallLeft, materialAluminium);
	meshBeltPieceTopSmallLeft.castShadow = true;
	meshBeltPieceTopSmallLeft.name = 'BeltPieceTopSmallLeft';
	meshBeltPieceTopSmallLeft.position.x = -25;
	meshBeltPieceTopSmallLeft.position.y = 10;
	meshBeltPieceTopSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallLeft);

	//* BeltPieceTopSmallRight
	let BeltPieceTopSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	let meshBeltPieceTopSmallRight = new THREE.Mesh(BeltPieceTopSmallRight, materialAluminium);
	meshBeltPieceTopSmallRight.castShadow = true;
	meshBeltPieceTopSmallRight.name = 'BeltPieceTopSmallRight';
	meshBeltPieceTopSmallRight.position.x = 25;
	meshBeltPieceTopSmallRight.position.y = 10;
	meshBeltPieceTopSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallRight);

	//* BeltPieceBottomSmallLeft
	let BeltPieceBottomSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	let meshBeltPieceBottomSmallLeft = new THREE.Mesh(BeltPieceBottomSmallLeft, materialAluminium);
	meshBeltPieceBottomSmallLeft.castShadow = true;
	meshBeltPieceBottomSmallLeft.name = 'BeltPieceBottomSmallLeft';
	meshBeltPieceBottomSmallLeft.position.x = -15;
	meshBeltPieceBottomSmallLeft.position.y = -10;
	meshBeltPieceBottomSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallLeft);

	//* BeltPieceBottomSmallRight
	let BeltPieceBottomSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	let meshBeltPieceBottomSmallRight = new THREE.Mesh(BeltPieceBottomSmallRight, materialAluminium);
	meshBeltPieceBottomSmallRight.castShadow = true;
	meshBeltPieceBottomSmallRight.name = 'BeltPieceBottomSmallRight';
	meshBeltPieceBottomSmallRight.position.x = 15;
	meshBeltPieceBottomSmallRight.position.y = -10;
	meshBeltPieceBottomSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallRight);

	//* BeltPieceBottomBigLeft
	let BeltPieceBottomBigLeft = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	let meshBeltPieceBottomBigLeft = new THREE.Mesh(BeltPieceBottomBigLeft, materialAluminium);
	meshBeltPieceBottomBigLeft.castShadow = true;
	meshBeltPieceBottomBigLeft.name = 'BeltPieceBottomBigLeft';
	meshBeltPieceBottomBigLeft.position.x = -40;
	meshBeltPieceBottomBigLeft.position.y = -10;
	meshBeltPieceBottomBigLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigLeft);

	//* BeltPieceBottomBigRight
	let BeltPieceBottomBigRight = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	let meshBeltPieceBottomBigRight = new THREE.Mesh(BeltPieceBottomBigRight, materialAluminium);
	meshBeltPieceBottomBigRight.castShadow = true;
	meshBeltPieceBottomBigRight.name = 'BeltPieceBottomBigRight';
	meshBeltPieceBottomBigRight.position.x = 40;
	meshBeltPieceBottomBigRight.position.y = -10;
	meshBeltPieceBottomBigRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigRight);

	//* BeltPieceSideLeft
	let BeltPieceSideLeft = new THREE.BoxGeometry(10, 20, 2, 1, 1,1);
	let meshBeltPieceSideLeft = new THREE.Mesh(BeltPieceSideLeft, material);
	meshBeltPieceSideLeft.castShadow = true;
	meshBeltPieceSideLeft.name = 'BeltPieceSideLeft';
	meshBeltPieceSideLeft.position.x = -50;
	meshBeltPieceSideLeft.position.y = 0;
	meshBeltPieceSideLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideLeft);

	//* BeltPieceSideRight
	let BeltPieceSideRight = new THREE.BoxGeometry(10, 20, 2, 1, 1,1);
	let meshBeltPieceSideRight = new THREE.Mesh(BeltPieceSideRight, material);
	meshBeltPieceSideRight.castShadow = true;
	meshBeltPieceSideRight.name = 'BeltPieceSideRight';
	meshBeltPieceSideRight.position.x = 50;
	meshBeltPieceSideRight.position.y = 0;
	meshBeltPieceSideRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideRight);

	return arm;
}
