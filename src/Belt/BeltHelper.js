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
	 * Lager Belteseksjonen
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
	
	//* BeltPieceRoundTopRight
	const beltPieceRoundTopRight = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundTopRight = new THREE.Mesh(beltPieceRoundTopRight, materialAluminium);
	meshBeltPieceRoundTopRight.castShadow = true;
	meshBeltPieceRoundTopRight.name = 'BeltPieceRoundTopRight';
	meshBeltPieceRoundTopRight.position.x = 25;
	meshBeltPieceRoundTopRight.position.y = 15;
	meshBeltPieceRoundTopRight.position.z = 0;
	meshBeltPieceRoundTopRight.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundTopRight);

	//* BeltPieceRoundTopLeft
	const beltPieceRoundTopLeft = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundTopLeft = new THREE.Mesh(beltPieceRoundTopLeft, materialAluminium);
	meshBeltPieceRoundTopLeft.castShadow = true;
	meshBeltPieceRoundTopLeft.name = 'BeltPieceRoundTopLeft';
	meshBeltPieceRoundTopLeft.position.x = -25;
	meshBeltPieceRoundTopLeft.position.y = 15;
	meshBeltPieceRoundTopLeft.position.z = 0;
	meshBeltPieceRoundTopLeft.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundTopLeft);

	//* BeltPieceRoundTopMiddle
	const beltPieceRoundTopMiddle = new THREE.CylinderGeometry(2,2,20, 200,1,false);
	const meshBeltPieceRoundTopMiddle = new THREE.Mesh(beltPieceRoundTopMiddle, materialAluminium);
	meshBeltPieceRoundTopMiddle.castShadow = true;
	meshBeltPieceRoundTopMiddle.name = 'BeltPieceRoundTopMiddle';
	meshBeltPieceRoundTopMiddle.position.x = 0;
	meshBeltPieceRoundTopMiddle.position.y = 15;
	meshBeltPieceRoundTopMiddle.position.z = 0;
	meshBeltPieceRoundTopMiddle.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundTopMiddle);

	//* BeltPieceRoundBottomSmallLeft
	const beltPieceRoundBottomSmallLeft = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundBottomSmallLeft = new THREE.Mesh(beltPieceRoundBottomSmallLeft, materialAluminium);
	meshBeltPieceRoundBottomSmallLeft.castShadow = true;
	meshBeltPieceRoundBottomSmallLeft.name = 'BeltPieceRoundBottomSmallLeft';
	meshBeltPieceRoundBottomSmallLeft.position.x = -15;
	meshBeltPieceRoundBottomSmallLeft.position.y = -15;
	meshBeltPieceRoundBottomSmallLeft.position.z = 0;
	meshBeltPieceRoundBottomSmallLeft.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundBottomSmallLeft);

	//* BeltPieceRoundBottomSmallRight
	const beltPieceRoundBottomSmallRight = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundBottomSmallRight = new THREE.Mesh(beltPieceRoundBottomSmallRight, materialAluminium);
	meshBeltPieceRoundBottomSmallRight.castShadow = true;
	meshBeltPieceRoundBottomSmallRight.name = 'BeltPieceRoundBottomSmallRight';
	meshBeltPieceRoundBottomSmallRight.position.x = 15;
	meshBeltPieceRoundBottomSmallRight.position.y = -15;
	meshBeltPieceRoundBottomSmallRight.position.z = 0;
	meshBeltPieceRoundBottomSmallRight.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundBottomSmallRight);

	//* BeltPieceRoundBottomLargeRight
	const beltPieceRoundBottomLargeRight = new THREE.CylinderGeometry(2,2,20, 200,1,false);
	const meshBeltPieceRoundBottomLargeRight = new THREE.Mesh(beltPieceRoundBottomLargeRight, materialAluminium);
	meshBeltPieceRoundBottomLargeRight.castShadow = true;
	meshBeltPieceRoundBottomLargeRight.name = 'BeltPieceRoundBottomLargeRight';
	meshBeltPieceRoundBottomLargeRight.position.x = 40;
	meshBeltPieceRoundBottomLargeRight.position.y = -15;
	meshBeltPieceRoundBottomLargeRight.position.z = 0;
	meshBeltPieceRoundBottomLargeRight.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundBottomLargeRight);

	//* BeltPieceRoundBottomLargeLeft
	const beltPieceRoundBottomLargeLeft = new THREE.CylinderGeometry(2,2,20, 200,1,false);
	const meshBeltPieceRoundBottomLargeLeft = new THREE.Mesh(beltPieceRoundBottomLargeLeft, materialAluminium);
	meshBeltPieceRoundBottomLargeLeft.castShadow = true;
	meshBeltPieceRoundBottomLargeLeft.name = 'BeltPieceRoundBottomLargeLeft';
	meshBeltPieceRoundBottomLargeLeft.position.x = -40;
	meshBeltPieceRoundBottomLargeLeft.position.y = -15;
	meshBeltPieceRoundBottomLargeLeft.position.z = 0;
	meshBeltPieceRoundBottomLargeLeft.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundBottomLargeLeft);


	/**
	 * Setter sammen Den kurvede delen av beltet (inkluderer utgangspunkt
	*/

	const beltCurvedSection = new THREE.Group();
	belt.add(beltCurvedSection);

	//* BeltPieceMainCopy0
	const meshBeltPieceMainCopy0 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy0.castShadow = true;
	meshBeltPieceMainCopy0.name = 'BeltPieceMainCopy0';
	meshBeltPieceMainCopy0.position.x = 0;
	meshBeltPieceMainCopy0.position.y = 50;
	meshBeltPieceMainCopy0.position.z = 100;
	beltCurvedSection.add(meshBeltPieceMainCopy0);

	//* BeltPieceMainCopy1
	const meshBeltPieceMainCopy1 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy1.castShadow = true;
	meshBeltPieceMainCopy1.name = 'BeltPieceMainCopy1';
	meshBeltPieceMainCopy1.position.x = 0;
	meshBeltPieceMainCopy1.position.y = 76;
	meshBeltPieceMainCopy1.position.z = 92;
	meshBeltPieceMainCopy1.rotation.x = -Math.PI/6;
	beltCurvedSection.add(meshBeltPieceMainCopy1);

	//* BeltPieceMainCopy2
	const meshBeltPieceMainCopy2 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy2.castShadow = true;
	meshBeltPieceMainCopy2.name = 'BeltPieceMainCopy2';
	meshBeltPieceMainCopy2.position.x = 0;
	meshBeltPieceMainCopy2.position.y = 96;
	meshBeltPieceMainCopy2.position.z = 74;
	meshBeltPieceMainCopy2.rotation.x = -Math.PI/3;
	beltCurvedSection.add(meshBeltPieceMainCopy2);

	//* BeltPieceMainCopy3
	const meshBeltPieceMainCopy3 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy3.castShadow = true;
	meshBeltPieceMainCopy3.name = 'BeltPieceMainCopy3';
	meshBeltPieceMainCopy3.position.x = 0;
	meshBeltPieceMainCopy3.position.y = 106;
	meshBeltPieceMainCopy3.position.z = 50;
	meshBeltPieceMainCopy3.rotation.x = -Math.PI/2.5;
	beltCurvedSection.add(meshBeltPieceMainCopy3);

	/**
	 * kopierer den kurvede delen for andre siden
	 */

	const beltCurvedSection2 = beltCurvedSection.clone()
	beltCurvedSection2.castShadow = true;
	beltCurvedSection2.name = 'BeltCurvedSection2';
	beltCurvedSection2.position.x = 0;
	beltCurvedSection2.position.y = 0;
	beltCurvedSection2.position.z = -600;
	beltCurvedSection2.rotation.x = -Math.PI/2
	beltCurvedSection2.rotation.z = -Math.PI/0.5;
	belt.add(beltCurvedSection2);

	/**
	 * Lager et flatt parti
	 */

	const beltFlatSection = new THREE.Group();
	belt.add(beltFlatSection);


		//* BeltPieceMainCopy4
	const meshBeltPieceMainCopy4 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy4.castShadow = true;
	meshBeltPieceMainCopy4.name = 'BeltPieceMainCopy4';
	meshBeltPieceMainCopy4.position.x = 0;
	meshBeltPieceMainCopy4.position.y = 110;
	meshBeltPieceMainCopy4.position.z = -80;
	meshBeltPieceMainCopy4.rotation.x = -Math.PI/2;
	beltFlatSection.add(meshBeltPieceMainCopy4);

	//* BeltPieceMainCopy5
	const meshBeltPieceMainCopy5 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy5.castShadow = true;
	meshBeltPieceMainCopy5.name = 'BeltPieceMainCopy5';
	meshBeltPieceMainCopy5.position.x = 0;
	meshBeltPieceMainCopy5.position.y = 110;
	meshBeltPieceMainCopy5.position.z = -108;
	meshBeltPieceMainCopy5.rotation.x = -Math.PI/2;
	beltFlatSection.add(meshBeltPieceMainCopy5);

	//* BeltPieceMainCopy6
	const meshBeltPieceMainCopy6 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy6.castShadow = true;
	meshBeltPieceMainCopy6.name = 'BeltPieceMainCopy6';
	meshBeltPieceMainCopy6.position.x = 0;
	meshBeltPieceMainCopy6.position.y = 110;
	meshBeltPieceMainCopy6.position.z = -136;
	meshBeltPieceMainCopy6.rotation.x = -Math.PI/2;
	beltFlatSection.add(meshBeltPieceMainCopy6);

	//* BeltPieceMainCopy7
	const meshBeltPieceMainCopy7 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy7.castShadow = true;
	meshBeltPieceMainCopy7.name = 'BeltPieceMainCopy7';
	meshBeltPieceMainCopy7.position.x = 0;
	meshBeltPieceMainCopy7.position.y = 110;
	meshBeltPieceMainCopy7.position.z = -164;
	meshBeltPieceMainCopy7.rotation.x = -Math.PI/2;
	beltFlatSection.add(meshBeltPieceMainCopy7);

	/**
	 * Kopierer Det flate segmentet for å lage den lange flaten på toppen
	 */

	const beltFlatSection2 = beltFlatSection.clone()
	beltFlatSection2.castShadow = true;
	beltFlatSection2.name = 'BeltFlatSection2';
	beltFlatSection2.position.x = 0;
	beltFlatSection2.position.y = 0;
	beltFlatSection2.position.z = -110;
	belt.add(beltFlatSection2);

	const beltFlatSection3 = beltFlatSection.clone()
	beltFlatSection3.castShadow = true;
	beltFlatSection3.name = 'BeltFlatSection3';
	beltFlatSection3.position.x = 0;
	beltFlatSection3.position.y = 0;
	beltFlatSection3.position.z = -220;
	belt.add(beltFlatSection3);

	const beltFlatSection4 = beltFlatSection.clone()
	beltFlatSection4.castShadow = true;
	beltFlatSection4.name = 'BeltFlatSection4';
	beltFlatSection4.position.x = 0;
	beltFlatSection4.position.y = 0;
	beltFlatSection4.position.z = -330;
	belt.add(beltFlatSection4);

	/**
	 * Kopierer Det flate segmentet for å lage skrå partier
	 */












	return belt;
}
