/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {createBeltPartMesh,} from "./BeltParts.js";

export async function createBeltMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');

	//Konteiner for hele belten:
	const belt = new THREE.Group();

	let material = new THREE.MeshPhongMaterial({ map: textureObject });
	let materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});


	//* BeltPieceMain
	let BeltPieceMain = new THREE.BoxGeometry(100, 20, 4, 1, 1,1);
	let meshBeltPieceMain = new THREE.Mesh(BeltPieceMain, material);
	meshBeltPieceMain.castShadow = true;
	meshBeltPieceMain.name = 'BeltPieceMain';
	meshBeltPieceMain.position.x = 0;
	meshBeltPieceMain.position.y = 50;
	meshBeltPieceMain.position.z = 100;
	belt.add(meshBeltPieceMain);

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

	return belt;
}
