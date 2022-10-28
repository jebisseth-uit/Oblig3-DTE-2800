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

	const material = new THREE.MeshPhongMaterial({ map: textureObject });
	const materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});


	//* beltPieceWhole
	const beltPieceWhole = new THREE.Group();
	beltPieceWhole.position.x = 1;
	beltPieceWhole.position.y = 1;
	beltPieceWhole.position.z = 1;
	beltPieceWhole.name = 'beltPieceWhole';
	belt.add(beltPieceWhole);


	//* BeltPieceMain
	const BeltPieceMain = new THREE.BoxGeometry(100, 20, 4, 1, 1,1);
	const meshBeltPieceMain = new THREE.Mesh(BeltPieceMain, material);
	meshBeltPieceMain.castShadow = true;
	meshBeltPieceMain.name = 'BeltPieceMain';
	meshBeltPieceMain.position.x = 0;
	meshBeltPieceMain.position.y = 50;
	meshBeltPieceMain.position.z = 100;
	beltPieceWhole.add(meshBeltPieceMain);

	//* BeltPieceTopMiddle
	const BeltPieceTopMiddle = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceTopMiddle = new THREE.Mesh(BeltPieceTopMiddle, materialAluminium);
	meshBeltPieceTopMiddle.castShadow = true;
	meshBeltPieceTopMiddle.name = 'BeltPieceTopMiddle';
	meshBeltPieceTopMiddle.position.x = 0;
	meshBeltPieceTopMiddle.position.y = 10;
	meshBeltPieceTopMiddle.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopMiddle);

	//* BeltPieceTopSmallLeft
	const BeltPieceTopSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceTopSmallLeft = new THREE.Mesh(BeltPieceTopSmallLeft, materialAluminium);
	meshBeltPieceTopSmallLeft.castShadow = true;
	meshBeltPieceTopSmallLeft.name = 'BeltPieceTopSmallLeft';
	meshBeltPieceTopSmallLeft.position.x = -25;
	meshBeltPieceTopSmallLeft.position.y = 10;
	meshBeltPieceTopSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallLeft);

	//* BeltPieceTopSmallRight
	const BeltPieceTopSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceTopSmallRight = new THREE.Mesh(BeltPieceTopSmallRight, materialAluminium);
	meshBeltPieceTopSmallRight.castShadow = true;
	meshBeltPieceTopSmallRight.name = 'BeltPieceTopSmallRight';
	meshBeltPieceTopSmallRight.position.x = 25;
	meshBeltPieceTopSmallRight.position.y = 10;
	meshBeltPieceTopSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallRight);

	//* BeltPieceBottomSmallLeft
	const BeltPieceBottomSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceBottomSmallLeft = new THREE.Mesh(BeltPieceBottomSmallLeft, materialAluminium);
	meshBeltPieceBottomSmallLeft.castShadow = true;
	meshBeltPieceBottomSmallLeft.name = 'BeltPieceBottomSmallLeft';
	meshBeltPieceBottomSmallLeft.position.x = -15;
	meshBeltPieceBottomSmallLeft.position.y = -10;
	meshBeltPieceBottomSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallLeft);

	//* BeltPieceBottomSmallRight
	const BeltPieceBottomSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceBottomSmallRight = new THREE.Mesh(BeltPieceBottomSmallRight, materialAluminium);
	meshBeltPieceBottomSmallRight.castShadow = true;
	meshBeltPieceBottomSmallRight.name = 'BeltPieceBottomSmallRight';
	meshBeltPieceBottomSmallRight.position.x = 15;
	meshBeltPieceBottomSmallRight.position.y = -10;
	meshBeltPieceBottomSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallRight);

	//* BeltPieceBottomBigLeft
	const BeltPieceBottomBigLeft = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceBottomBigLeft = new THREE.Mesh(BeltPieceBottomBigLeft, materialAluminium);
	meshBeltPieceBottomBigLeft.castShadow = true;
	meshBeltPieceBottomBigLeft.name = 'BeltPieceBottomBigLeft';
	meshBeltPieceBottomBigLeft.position.x = -40;
	meshBeltPieceBottomBigLeft.position.y = -10;
	meshBeltPieceBottomBigLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigLeft);

	//* BeltPieceBottomBigRight
	const BeltPieceBottomBigRight = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceBottomBigRight = new THREE.Mesh(BeltPieceBottomBigRight, materialAluminium);
	meshBeltPieceBottomBigRight.castShadow = true;
	meshBeltPieceBottomBigRight.name = 'BeltPieceBottomBigRight';
	meshBeltPieceBottomBigRight.position.x = 40;
	meshBeltPieceBottomBigRight.position.y = -10;
	meshBeltPieceBottomBigRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigRight);

	//* BeltPieceSideLeft
	const BeltPieceSideLeft = new THREE.BoxGeometry(30, 20, 2, 1, 1,1);
	const meshBeltPieceSideLeft = new THREE.Mesh(BeltPieceSideLeft, material);
	meshBeltPieceSideLeft.castShadow = true;
	meshBeltPieceSideLeft.name = 'BeltPieceSideLeft';
	meshBeltPieceSideLeft.position.x = -50;
	meshBeltPieceSideLeft.position.y = 0;
	meshBeltPieceSideLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideLeft);

	//* BeltPieceSideRight
	const BeltPieceSideRight = new THREE.BoxGeometry(30, 20, 2, 1, 1,1);
	const meshBeltPieceSideRight = new THREE.Mesh(BeltPieceSideRight, material);
	meshBeltPieceSideRight.castShadow = true;
	meshBeltPieceSideRight.name = 'BeltPieceSideRight';
	meshBeltPieceSideRight.position.x = 50;
	meshBeltPieceSideRight.position.y = 0;
	meshBeltPieceSideRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideRight);

	/** clonedBeltPieceWhole1
	const clonedbeltPieceWhole1 = new beltPieceWhole.clone();
	clonedBeltPieceWhole1.position.x = 3;
	clonedBeltPieceWhole1.position.y = 3;
	clonedBeltPieceWhole1.position.z = 3;
	clonedBeltPieceWhole1.name = 'clonedBeltPieceWhole1';
	belt.add(clonedBeltPieceWhole1);
*/




	return belt;
}
