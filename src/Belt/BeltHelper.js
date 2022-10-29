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

/**
	//* beltPieceWhole
	const beltPieceWhole = new THREE.Group();
	beltPieceWhole.position.x = 1;
	beltPieceWhole.position.y = 1;
	beltPieceWhole.position.z = 1;
	beltPieceWhole.name = 'beltPieceWhole';
	belt.add(beltPieceWhole);
 */


	//* BeltPieceMain
	const beltPieceMain = new THREE.BoxGeometry(100, 20, 4, 1, 1,1);
	const meshBeltPieceMain = new THREE.Mesh(beltPieceMain, material);
	meshBeltPieceMain.castShadow = true;
	meshBeltPieceMain.name = 'BeltPieceMain';
	meshBeltPieceMain.position.x = 0;
	meshBeltPieceMain.position.y = 50;
	meshBeltPieceMain.position.z = 100;
	belt.add(meshBeltPieceMain);

	//* BeltPieceTopMiddle
	const beltPieceTopMiddle = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceTopMiddle = new THREE.Mesh(beltPieceTopMiddle, materialAluminium);
	meshBeltPieceTopMiddle.castShadow = true;
	meshBeltPieceTopMiddle.name = 'BeltPieceTopMiddle';
	meshBeltPieceTopMiddle.position.x = 0;
	meshBeltPieceTopMiddle.position.y = 10;
	meshBeltPieceTopMiddle.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopMiddle);

	//* BeltPieceTopSmallLeft
	const beltPieceTopSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceTopSmallLeft = new THREE.Mesh(beltPieceTopSmallLeft, materialAluminium);
	meshBeltPieceTopSmallLeft.castShadow = true;
	meshBeltPieceTopSmallLeft.name = 'BeltPieceTopSmallLeft';
	meshBeltPieceTopSmallLeft.position.x = -25;
	meshBeltPieceTopSmallLeft.position.y = 10;
	meshBeltPieceTopSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallLeft);

	//* BeltPieceTopSmallRight
	const beltPieceTopSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceTopSmallRight = new THREE.Mesh(beltPieceTopSmallRight, materialAluminium);
	meshBeltPieceTopSmallRight.castShadow = true;
	meshBeltPieceTopSmallRight.name = 'BeltPieceTopSmallRight';
	meshBeltPieceTopSmallRight.position.x = 25;
	meshBeltPieceTopSmallRight.position.y = 10;
	meshBeltPieceTopSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallRight);

	//* BeltPieceBottomSmallLeft
	const beltPieceBottomSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceBottomSmallLeft = new THREE.Mesh(beltPieceBottomSmallLeft, materialAluminium);
	meshBeltPieceBottomSmallLeft.castShadow = true;
	meshBeltPieceBottomSmallLeft.name = 'BeltPieceBottomSmallLeft';
	meshBeltPieceBottomSmallLeft.position.x = -15;
	meshBeltPieceBottomSmallLeft.position.y = -10;
	meshBeltPieceBottomSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallLeft);

	//* BeltPieceBottomSmallRight
	const beltPieceBottomSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceBottomSmallRight = new THREE.Mesh(beltPieceBottomSmallRight, materialAluminium);
	meshBeltPieceBottomSmallRight.castShadow = true;
	meshBeltPieceBottomSmallRight.name = 'BeltPieceBottomSmallRight';
	meshBeltPieceBottomSmallRight.position.x = 15;
	meshBeltPieceBottomSmallRight.position.y = -10;
	meshBeltPieceBottomSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallRight);

	//* BeltPieceBottomBigLeft
	const beltPieceBottomBigLeft = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceBottomBigLeft = new THREE.Mesh(beltPieceBottomBigLeft, materialAluminium);
	meshBeltPieceBottomBigLeft.castShadow = true;
	meshBeltPieceBottomBigLeft.name = 'BeltPieceBottomBigLeft';
	meshBeltPieceBottomBigLeft.position.x = -40;
	meshBeltPieceBottomBigLeft.position.y = -10;
	meshBeltPieceBottomBigLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigLeft);

	//* BeltPieceBottomBigRight
	const beltPieceBottomBigRight = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceBottomBigRight = new THREE.Mesh(beltPieceBottomBigRight, materialAluminium);
	meshBeltPieceBottomBigRight.castShadow = true;
	meshBeltPieceBottomBigRight.name = 'BeltPieceBottomBigRight';
	meshBeltPieceBottomBigRight.position.x = 40;
	meshBeltPieceBottomBigRight.position.y = -10;
	meshBeltPieceBottomBigRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigRight);

	//* BeltPieceSideLeft
	const beltPieceSideLeft = new THREE.BoxGeometry(30, 20, 2, 1, 1,1);
	const meshBeltPieceSideLeft = new THREE.Mesh(beltPieceSideLeft, material);
	meshBeltPieceSideLeft.castShadow = true;
	meshBeltPieceSideLeft.name = 'BeltPieceSideLeft';
	meshBeltPieceSideLeft.position.x = -50;
	meshBeltPieceSideLeft.position.y = 0;
	meshBeltPieceSideLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideLeft);

	//* BeltPieceSideRight
	const beltPieceSideRight = new THREE.BoxGeometry(30, 20, 2, 1, 1,1);
	const meshBeltPieceSideRight = new THREE.Mesh(beltPieceSideRight, material);
	meshBeltPieceSideRight.castShadow = true;
	meshBeltPieceSideRight.name = 'BeltPieceSideRight';
	meshBeltPieceSideRight.position.x = 50;
	meshBeltPieceSideRight.position.y = 0;
	meshBeltPieceSideRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideRight);
	
	//* BeltPieceRound1
	const beltPieceRound1 = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRound1 = new THREE.Mesh(beltPieceRound1, materialAluminium);
	meshBeltPieceRound1.castShadow = true;
	meshBeltPieceRound1.name = 'BeltPieceRound1';
	meshBeltPieceRound1.position.x = 25;
	meshBeltPieceRound1.position.y = 15;
	meshBeltPieceRound1.position.z = 0;
	meshBeltPieceRound1.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRound1);

	//* BeltPieceRound1
	const beltPieceRound2 = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRound2 = new THREE.Mesh(beltPieceRound2, materialAluminium);
	meshBeltPieceRound2.castShadow = true;
	meshBeltPieceRound2.name = 'BeltPieceRound1';
	meshBeltPieceRound2.position.x = -25;
	meshBeltPieceRound2.position.y = 15;
	meshBeltPieceRound2.position.z = 0;
	meshBeltPieceRound2.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRound2);


	/**
	 * Setter sammen beltet av alle bitene:
	*/

		//* BeltPieceMainCopy1
	const meshBeltPieceMainCopy1 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy1.castShadow = true;
	meshBeltPieceMainCopy1.name = 'BeltPieceMainCopy1';
	meshBeltPieceMainCopy1.position.x = 0;
	meshBeltPieceMainCopy1.position.y = 75;
	meshBeltPieceMainCopy1.position.z = 100;
	belt.add(meshBeltPieceMainCopy1);

	//* BeltPieceMainCopy2
	const meshBeltPieceMainCopy2 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy2.castShadow = true;
	meshBeltPieceMainCopy2.name = 'BeltPieceMainCopy2';
	meshBeltPieceMainCopy2.position.x = 0;
	meshBeltPieceMainCopy2.position.y = 101;
	meshBeltPieceMainCopy2.position.z = 100;
	meshBeltPieceMainCopy2.rotation.x = -0.1;
	belt.add(meshBeltPieceMainCopy2);

	//* BeltPieceMainCopy3
	const meshBeltPieceMainCopy3 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy3.castShadow = true;
	meshBeltPieceMainCopy3.name = 'BeltPieceMainCopy3';
	meshBeltPieceMainCopy3.position.x = 0;
	meshBeltPieceMainCopy3.position.y = 150;
	meshBeltPieceMainCopy3.position.z = 100;
	meshBeltPieceMainCopy3.rotation.x = -0.1;
	belt.add(meshBeltPieceMainCopy3);



	return belt;
}
