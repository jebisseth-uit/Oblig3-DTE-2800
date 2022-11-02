/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {BoxGeometry} from "three";

export async function createUndercarriageMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
	const textureRust = await loader.loadAsync('../../assets/textures/Seamless-Rust-Texture.jpg');


	const material = new THREE.MeshPhongMaterial({ map: textureObject });
	const materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});
	const materialRust = new THREE.MeshPhongMaterial({map: textureRust});

	//Konteiner for hele undercarriage:

	const undercarriage = new THREE.Group();

	// Belteseksjon
	const belt = new THREE.Group();
	belt.position.x = -200;
	belt.position.y = 0;
	belt.position.z = 200;
	undercarriage.add(belt);


	/**
	 * Lager Belteseksjonen
	 */

	//* BeltPieceMain
	const beltPieceMain = new THREE.BoxGeometry(100, 20, 4, 1, 1,1);
	const meshBeltPieceMain = new THREE.Mesh(beltPieceMain, materialRust);
	meshBeltPieceMain.castShadow = true;
	meshBeltPieceMain.name = 'BeltPieceMain';
	meshBeltPieceMain.position.x = 0;
	meshBeltPieceMain.position.y = 50;
	meshBeltPieceMain.position.z = 100;
	belt.add(meshBeltPieceMain);

	//* BeltPieceTopMiddle
	const beltPieceTopMiddle = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceTopMiddle = new THREE.Mesh(beltPieceTopMiddle, materialRust);
	meshBeltPieceTopMiddle.castShadow = true;
	meshBeltPieceTopMiddle.name = 'BeltPieceTopMiddle';
	meshBeltPieceTopMiddle.position.x = 0;
	meshBeltPieceTopMiddle.position.y = 10;
	meshBeltPieceTopMiddle.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopMiddle);

	//* BeltPieceTopSmallLeft
	const beltPieceTopSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceTopSmallLeft = new THREE.Mesh(beltPieceTopSmallLeft, materialRust);
	meshBeltPieceTopSmallLeft.castShadow = true;
	meshBeltPieceTopSmallLeft.name = 'BeltPieceTopSmallLeft';
	meshBeltPieceTopSmallLeft.position.x = -25;
	meshBeltPieceTopSmallLeft.position.y = 10;
	meshBeltPieceTopSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallLeft);

	//* BeltPieceTopSmallRight
	const beltPieceTopSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceTopSmallRight = new THREE.Mesh(beltPieceTopSmallRight, materialRust);
	meshBeltPieceTopSmallRight.castShadow = true;
	meshBeltPieceTopSmallRight.name = 'BeltPieceTopSmallRight';
	meshBeltPieceTopSmallRight.position.x = 25;
	meshBeltPieceTopSmallRight.position.y = 10;
	meshBeltPieceTopSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceTopSmallRight);

	//* BeltPieceBottomSmallLeft
	const beltPieceBottomSmallLeft = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceBottomSmallLeft = new THREE.Mesh(beltPieceBottomSmallLeft, materialRust);
	meshBeltPieceBottomSmallLeft.castShadow = true;
	meshBeltPieceBottomSmallLeft.name = 'BeltPieceBottomSmallLeft';
	meshBeltPieceBottomSmallLeft.position.x = -15;
	meshBeltPieceBottomSmallLeft.position.y = -10;
	meshBeltPieceBottomSmallLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallLeft);

	//* BeltPieceBottomSmallRight
	const beltPieceBottomSmallRight = new THREE.BoxGeometry(10, 10, 4, 1, 1,1);
	const meshBeltPieceBottomSmallRight = new THREE.Mesh(beltPieceBottomSmallRight, materialRust);
	meshBeltPieceBottomSmallRight.castShadow = true;
	meshBeltPieceBottomSmallRight.name = 'BeltPieceBottomSmallRight';
	meshBeltPieceBottomSmallRight.position.x = 15;
	meshBeltPieceBottomSmallRight.position.y = -10;
	meshBeltPieceBottomSmallRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomSmallRight);

	//* BeltPieceBottomBigLeft
	const beltPieceBottomBigLeft = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceBottomBigLeft = new THREE.Mesh(beltPieceBottomBigLeft, materialRust);
	meshBeltPieceBottomBigLeft.castShadow = true;
	meshBeltPieceBottomBigLeft.name = 'BeltPieceBottomBigLeft';
	meshBeltPieceBottomBigLeft.position.x = -40;
	meshBeltPieceBottomBigLeft.position.y = -10;
	meshBeltPieceBottomBigLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigLeft);

	//* BeltPieceBottomBigRight
	const beltPieceBottomBigRight = new THREE.BoxGeometry(20, 10, 4, 1, 1,1);
	const meshBeltPieceBottomBigRight = new THREE.Mesh(beltPieceBottomBigRight, materialRust);
	meshBeltPieceBottomBigRight.castShadow = true;
	meshBeltPieceBottomBigRight.name = 'BeltPieceBottomBigRight';
	meshBeltPieceBottomBigRight.position.x = 40;
	meshBeltPieceBottomBigRight.position.y = -10;
	meshBeltPieceBottomBigRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceBottomBigRight);

	//* BeltPieceSideLeft
	const beltPieceSideLeft = new THREE.BoxGeometry(30, 20, 2, 1, 1,1);
	const meshBeltPieceSideLeft = new THREE.Mesh(beltPieceSideLeft, materialRust);
	meshBeltPieceSideLeft.castShadow = true;
	meshBeltPieceSideLeft.name = 'BeltPieceSideLeft';
	meshBeltPieceSideLeft.position.x = -50;
	meshBeltPieceSideLeft.position.y = 0;
	meshBeltPieceSideLeft.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideLeft);

	//* BeltPieceSideRight
	const beltPieceSideRight = new THREE.BoxGeometry(30, 20, 2, 1, 1,1);
	const meshBeltPieceSideRight = new THREE.Mesh(beltPieceSideRight, materialRust);
	meshBeltPieceSideRight.castShadow = true;
	meshBeltPieceSideRight.name = 'BeltPieceSideRight';
	meshBeltPieceSideRight.position.x = 50;
	meshBeltPieceSideRight.position.y = 0;
	meshBeltPieceSideRight.position.z = 0;
	meshBeltPieceMain.add(meshBeltPieceSideRight);
	
	//* BeltPieceRoundTopRight
	const beltPieceRoundTopRight = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundTopRight = new THREE.Mesh(beltPieceRoundTopRight, materialRust);
	meshBeltPieceRoundTopRight.castShadow = true;
	meshBeltPieceRoundTopRight.name = 'BeltPieceRoundTopRight';
	meshBeltPieceRoundTopRight.position.x = 25;
	meshBeltPieceRoundTopRight.position.y = 15;
	meshBeltPieceRoundTopRight.position.z = 0;
	meshBeltPieceRoundTopRight.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundTopRight);

	//* BeltPieceRoundTopLeft
	const beltPieceRoundTopLeft = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundTopLeft = new THREE.Mesh(beltPieceRoundTopLeft, materialRust);
	meshBeltPieceRoundTopLeft.castShadow = true;
	meshBeltPieceRoundTopLeft.name = 'BeltPieceRoundTopLeft';
	meshBeltPieceRoundTopLeft.position.x = -25;
	meshBeltPieceRoundTopLeft.position.y = 15;
	meshBeltPieceRoundTopLeft.position.z = 0;
	meshBeltPieceRoundTopLeft.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundTopLeft);

	//* BeltPieceRoundTopMiddle
	const beltPieceRoundTopMiddle = new THREE.CylinderGeometry(2,2,20, 200,1,false);
	const meshBeltPieceRoundTopMiddle = new THREE.Mesh(beltPieceRoundTopMiddle, materialRust);
	meshBeltPieceRoundTopMiddle.castShadow = true;
	meshBeltPieceRoundTopMiddle.name = 'BeltPieceRoundTopMiddle';
	meshBeltPieceRoundTopMiddle.position.x = 0;
	meshBeltPieceRoundTopMiddle.position.y = 15;
	meshBeltPieceRoundTopMiddle.position.z = 0;
	meshBeltPieceRoundTopMiddle.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundTopMiddle);

	//* BeltPieceRoundBottomSmallLeft
	const beltPieceRoundBottomSmallLeft = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundBottomSmallLeft = new THREE.Mesh(beltPieceRoundBottomSmallLeft, materialRust);
	meshBeltPieceRoundBottomSmallLeft.castShadow = true;
	meshBeltPieceRoundBottomSmallLeft.name = 'BeltPieceRoundBottomSmallLeft';
	meshBeltPieceRoundBottomSmallLeft.position.x = -15;
	meshBeltPieceRoundBottomSmallLeft.position.y = -15;
	meshBeltPieceRoundBottomSmallLeft.position.z = 0;
	meshBeltPieceRoundBottomSmallLeft.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundBottomSmallLeft);

	//* BeltPieceRoundBottomSmallRight
	const beltPieceRoundBottomSmallRight = new THREE.CylinderGeometry(2,2,10, 200,1,false);
	const meshBeltPieceRoundBottomSmallRight = new THREE.Mesh(beltPieceRoundBottomSmallRight, materialRust);
	meshBeltPieceRoundBottomSmallRight.castShadow = true;
	meshBeltPieceRoundBottomSmallRight.name = 'BeltPieceRoundBottomSmallRight';
	meshBeltPieceRoundBottomSmallRight.position.x = 15;
	meshBeltPieceRoundBottomSmallRight.position.y = -15;
	meshBeltPieceRoundBottomSmallRight.position.z = 0;
	meshBeltPieceRoundBottomSmallRight.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundBottomSmallRight);

	//* BeltPieceRoundBottomLargeRight
	const beltPieceRoundBottomLargeRight = new THREE.CylinderGeometry(2,2,20, 200,1,false);
	const meshBeltPieceRoundBottomLargeRight = new THREE.Mesh(beltPieceRoundBottomLargeRight, materialRust);
	meshBeltPieceRoundBottomLargeRight.castShadow = true;
	meshBeltPieceRoundBottomLargeRight.name = 'BeltPieceRoundBottomLargeRight';
	meshBeltPieceRoundBottomLargeRight.position.x = 40;
	meshBeltPieceRoundBottomLargeRight.position.y = -15;
	meshBeltPieceRoundBottomLargeRight.position.z = 0;
	meshBeltPieceRoundBottomLargeRight.rotation.z = Math.PI/2;
	meshBeltPieceMain.add(meshBeltPieceRoundBottomLargeRight);

	//* BeltPieceRoundBottomLargeLeft
	const beltPieceRoundBottomLargeLeft = new THREE.CylinderGeometry(2,2,20, 200,1,false);
	const meshBeltPieceRoundBottomLargeLeft = new THREE.Mesh(beltPieceRoundBottomLargeLeft, materialRust);
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
	beltCurvedSection2.position.y = 18;
	beltCurvedSection2.position.z = -568;
	beltCurvedSection2.rotation.x = -Math.PI/1.8
	beltCurvedSection2.rotation.y = -Math.PI/0.5;
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
	meshBeltPieceMainCopy4.position.y = 130;
	meshBeltPieceMainCopy4.position.z = -82;
	2;
	meshBeltPieceMainCopy4.rotation.x = -Math.PI/2;
	beltFlatSection.add(meshBeltPieceMainCopy4);

	//* BeltPieceMainCopy5
	const meshBeltPieceMainCopy5 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy5.castShadow = true;
	meshBeltPieceMainCopy5.name = 'BeltPieceMainCopy5';
	meshBeltPieceMainCopy5.position.x = 0;
	meshBeltPieceMainCopy5.position.y = 130;
	meshBeltPieceMainCopy5.position.z = -110;
	meshBeltPieceMainCopy5.rotation.x = -Math.PI/2;
	beltFlatSection.add(meshBeltPieceMainCopy5);

	//* BeltPieceMainCopy6
	const meshBeltPieceMainCopy6 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy6.castShadow = true;
	meshBeltPieceMainCopy6.name = 'BeltPieceMainCopy6';
	meshBeltPieceMainCopy6.position.x = 0;
	meshBeltPieceMainCopy6.position.y = 130;
	meshBeltPieceMainCopy6.position.z = -138;
	meshBeltPieceMainCopy6.rotation.x = -Math.PI/2;
	beltFlatSection.add(meshBeltPieceMainCopy6);

	//* BeltPieceMainCopy7
	const meshBeltPieceMainCopy7 = meshBeltPieceMain.clone(true);
	meshBeltPieceMainCopy7.castShadow = true;
	meshBeltPieceMainCopy7.name = 'BeltPieceMainCopy7';
	meshBeltPieceMainCopy7.position.x = 0;
	meshBeltPieceMainCopy7.position.y = 130;
	meshBeltPieceMainCopy7.position.z = -166;
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
	beltFlatSection2.position.z = -112;
	belt.add(beltFlatSection2);

	const beltFlatSection3 = beltFlatSection.clone()
	beltFlatSection3.castShadow = true;
	beltFlatSection3.name = 'BeltFlatSection3';
	beltFlatSection3.position.x = 0;
	beltFlatSection3.position.y = 0;
	beltFlatSection3.position.z = -224;
	belt.add(beltFlatSection3);

	const beltFlatSection4 = beltFlatSection.clone()
	beltFlatSection4.castShadow = true;
	beltFlatSection4.name = 'BeltFlatSection4';
	beltFlatSection4.position.x = 0;
	beltFlatSection4.position.y = 0;
	beltFlatSection4.position.z = -336;
	belt.add(beltFlatSection4);

	/**
	 * Kopierer Det flate segmentet for å lage skrå partier
	 */

	const beltFlatSection5 = beltFlatSection.clone()
	beltFlatSection5.castShadow = true;
	beltFlatSection5.name = 'BeltFlatSection5';
	beltFlatSection5.position.x = 0;
	beltFlatSection5.position.y = -32;
	beltFlatSection5.position.z = 78;
	beltFlatSection5.rotation.x = 0.2;
	belt.add(beltFlatSection5);

	const beltFlatSection6 = beltFlatSection.clone()
	beltFlatSection6.castShadow = true;
	beltFlatSection6.name = 'BeltFlatSection6';
	beltFlatSection6.position.x = 0;
	beltFlatSection6.position.y = 16;
	beltFlatSection6.position.z = -424;
	beltFlatSection6.rotation.x = -0.2;
	belt.add(beltFlatSection6);

	/**
	 * Kopierer Det flate segmentet for å lage bunnen
	 */

	const beltFlatSection7 = beltFlatSection.clone()
	beltFlatSection7.castShadow = true;
	beltFlatSection7.name = 'BeltFlatSection7';
	beltFlatSection7.position.x = 0;
	beltFlatSection7.position.y = 166;
	beltFlatSection7.position.z = -80;
	beltFlatSection7.rotation.x = Math.PI/1;
	belt.add(beltFlatSection7);

	const beltFlatSection8 = beltFlatSection.clone()
	beltFlatSection8.castShadow = true;
	beltFlatSection8.name = 'BeltFlatSection8';
	beltFlatSection8.position.x = 0;
	beltFlatSection8.position.y = 166;
	beltFlatSection8.position.z = -192;
	beltFlatSection8.rotation.x = Math.PI/1;
	belt.add(beltFlatSection8);

	const beltFlatSection9 = beltFlatSection.clone()
	beltFlatSection9.castShadow = true;
	beltFlatSection9.name = 'BeltFlatSection9';
	beltFlatSection9.position.x = 0;
	beltFlatSection9.position.y = 166;
	beltFlatSection9.position.z = -304;
	beltFlatSection9.rotation.x = Math.PI/1;
	belt.add(beltFlatSection9);

	const beltFlatSection10 = beltFlatSection.clone()
	beltFlatSection10.castShadow = true;
	beltFlatSection10.name = 'BeltFlatSection10';
	beltFlatSection10.position.x = 0;
	beltFlatSection10.position.y = 166;
	beltFlatSection10.position.z = -416;
	beltFlatSection10.rotation.x = Math.PI/1;
	belt.add(beltFlatSection10);

	const beltFlatSection11 = beltFlatSection.clone()
	beltFlatSection11.castShadow = true;
	beltFlatSection11.name = 'BeltFlatSection11';
	beltFlatSection11.position.x = 0;
	beltFlatSection11.position.y = 166;
	beltFlatSection11.position.z = -528;
	beltFlatSection11.rotation.x = Math.PI/1;
	belt.add(beltFlatSection11);

	const beltFlatSection12 = beltFlatSection.clone()
	beltFlatSection12.castShadow = true;
	beltFlatSection12.name = 'BeltFlatSection12';
	beltFlatSection12.position.x = 0;
	beltFlatSection12.position.y = 166;
	beltFlatSection12.position.z = -640;
	beltFlatSection12.rotation.x = Math.PI/1;
	belt.add(beltFlatSection12);

	const beltFlatSection13 = beltFlatSection.clone()
	beltFlatSection13.castShadow = true;
	beltFlatSection13.name = 'BeltFlatSection13';
	beltFlatSection13.position.x = 0;
	beltFlatSection13.position.y = 166;
	beltFlatSection13.position.z = -752;
	beltFlatSection13.rotation.x = Math.PI/1;
	belt.add(beltFlatSection13);

	/**
	 * Lager en kopi av hele beltet
	 */

	const belt2 = belt.clone()
	belt2.castShadow = true;
	belt2.name = 'Belt2';
	belt2.position.x = 200;
	belt2.position.y = 0;
	belt2.position.z = 200;
	undercarriage.add(belt2);

	/**
	 * Lager en "kropp" til beltene samt en klone
	 */

	const beltBody = new BoxGeometry( 90, 90, 460, 10, 1,1);
	const meshBeltBody = new THREE.Mesh(beltBody, materialAluminium);
	meshBeltBody.castShadow = true;
	meshBeltBody.name = 'BeltBody';
	meshBeltBody.position.x = 200;
	meshBeltBody.position.y = 80;
	meshBeltBody.position.z = -100;
	undercarriage.add(meshBeltBody);

	const beltBodyEndPiece1 = new BoxGeometry( 90, 45, 760, 10, 1,1);
	const meshbeltBodyEndPiece1 = new THREE.Mesh(beltBodyEndPiece1, materialAluminium);
	meshbeltBodyEndPiece1.castShadow = true;
	meshbeltBodyEndPiece1.name = 'beltBodyEndPiece1';
	meshbeltBodyEndPiece1.position.x = 0;
	meshbeltBodyEndPiece1.position.y = -20;
	meshbeltBodyEndPiece1.position.z = 10;
	meshBeltBody.add(meshbeltBodyEndPiece1);
	
	
    //skrå bit i ene enden
	const beltBodyEndPiece2 = new BoxGeometry( 90, 45, 160, 10, 1,1);
	const meshbeltBodyEndPiece2 = new THREE.Mesh(beltBodyEndPiece2, materialAluminium);
	meshbeltBodyEndPiece2.castShadow = true;
	meshbeltBodyEndPiece2.name = 'beltBodyEndPiece2';
	meshbeltBodyEndPiece2.position.x = 0;
	meshbeltBodyEndPiece2.position.y = 6;
	meshbeltBodyEndPiece2.position.z = 300;
	meshbeltBodyEndPiece2.rotation.x = Math.PI/15;
	meshBeltBody.add(meshbeltBodyEndPiece2);

	const meshBeltBodyEndPiece3 = meshbeltBodyEndPiece2.clone();
	meshBeltBodyEndPiece3.castShadow = true;
	meshBeltBodyEndPiece3.name = 'beltBodyEndPiece3';
	meshBeltBodyEndPiece3.position.x = 0;
	meshBeltBodyEndPiece3.position.y = 5.5;
	meshBeltBodyEndPiece3.position.z = -290;
	meshBeltBodyEndPiece3.rotation.x = -Math.PI/13;
	meshBeltBody.add(meshBeltBodyEndPiece3);
	

    // Detaljbiter
	const beltBodyDetail1 = new BoxGeometry( 10, 50, 2, 1, 1,1);
	const meshBeltBodyDetail1 = new THREE.Mesh(beltBodyDetail1, materialAluminium);
	meshBeltBodyDetail1.castShadow = true;
	meshBeltBodyDetail1.name = 'BeltBodyDetail1';
	meshBeltBodyDetail1.position.x = 50;
	meshBeltBodyDetail1.position.y = -10;
	meshBeltBodyDetail1.position.z = 300;
	meshBeltBody.add(meshBeltBodyDetail1);

	const meshBeltBodyDetail2 = meshBeltBodyDetail1.clone();
	meshBeltBodyDetail2.castShadow = true;
	meshBeltBodyDetail2.name = 'BeltBodyDetail2';
	meshBeltBodyDetail2.position.x = 50;
	meshBeltBodyDetail2.position.y = -10;
	meshBeltBodyDetail2.position.z = -300;
	meshBeltBody.add(meshBeltBodyDetail2);

	const beltBodyDetail3 = new BoxGeometry( 10, 70, 2, 1, 1,1);
	const meshBeltBodyDetail3 = new THREE.Mesh(beltBodyDetail3, materialAluminium);
	meshBeltBodyDetail3.castShadow = true;
	meshBeltBodyDetail3.name = 'BeltBodyDetail3';
	meshBeltBodyDetail3.position.x = 50;
	meshBeltBodyDetail3.position.y = 0;
	meshBeltBodyDetail3.position.z = -100;
	meshBeltBody.add(meshBeltBodyDetail3);

	const meshBeltBodyDetail4 = meshBeltBodyDetail3.clone();
	meshBeltBodyDetail4.castShadow = true;
	meshBeltBodyDetail4.name = 'BeltBodyDetail4';
	meshBeltBodyDetail4.position.x = 50;
	meshBeltBodyDetail4.position.y = 0;
	meshBeltBodyDetail4.position.z = 100;
	meshBeltBody.add(meshBeltBodyDetail4);

	//Other side of the beltbodies

	const meshBeltBodyDetail5 = meshBeltBodyDetail3.clone();
	meshBeltBodyDetail5.castShadow = true;
	meshBeltBodyDetail5.name = 'BeltBodyDetail5';
	meshBeltBodyDetail5.position.x = -50;
	meshBeltBodyDetail5.position.y = 0;
	meshBeltBodyDetail5.position.z = 100;
	meshBeltBody.add(meshBeltBodyDetail5);

	const meshBeltBodyDetail6 = meshBeltBodyDetail3.clone();
	meshBeltBodyDetail6.castShadow = true;
	meshBeltBodyDetail6.name = 'BeltBodyDetail6';
	meshBeltBodyDetail6.position.x = -50;
	meshBeltBodyDetail6.position.y = 0;
	meshBeltBodyDetail6.position.z = -100;
	meshBeltBody.add(meshBeltBodyDetail6);

	const meshBeltBodyDetail7 = meshBeltBodyDetail1.clone();
	meshBeltBodyDetail7.castShadow = true;
	meshBeltBodyDetail7.name = 'BeltBodyDetail7';
	meshBeltBodyDetail7.position.x = -50;
	meshBeltBodyDetail7.position.y = -10;
	meshBeltBodyDetail7.position.z = -300;
	meshBeltBody.add(meshBeltBodyDetail7);

	const meshBeltBodyDetail8 = meshBeltBodyDetail1.clone();
	meshBeltBodyDetail8.castShadow = true;
	meshBeltBodyDetail8.name = 'BeltBodyDetail8';
	meshBeltBodyDetail8.position.x = -50;
	meshBeltBodyDetail8.position.y = -10;
	meshBeltBodyDetail8.position.z = 300;
	meshBeltBody.add(meshBeltBodyDetail8);



	// Klonen
	const meshBeltBody2 = meshBeltBody.clone();
	meshBeltBody2.castShadow = true;
	meshBeltBody2.name = 'BeltBody2';
	meshBeltBody2.position.x = -200;
	meshBeltBody2.position.y = 80;
	meshBeltBody2.position.z = -100;
	undercarriage.add(meshBeltBody2);


	
	
	
	
	/**
	 * Lager en hovedkropp til understellet
	 */

	const undercarriageBody = new BoxGeometry( 280, 80, 280, 10, 1,1);
	const meshUndercarriageBody = new THREE.Mesh(undercarriageBody, materialAluminium);
	meshUndercarriageBody.castShadow = true;
	meshUndercarriageBody.name = 'undercarriageBody';
	meshUndercarriageBody.position.x = 0;
	meshUndercarriageBody.position.y = 80;
	meshUndercarriageBody.position.z = -100;
	undercarriage.add(meshUndercarriageBody);


	const undercarriageCone = new THREE.ConeGeometry( 30, 50, 50);
	const meshUndercarriageCone = new THREE.Mesh(undercarriageCone, materialAluminium);
	meshUndercarriageCone.castShadow = true;
	meshUndercarriageCone.name = 'undercarriageBody';
	meshUndercarriageCone.position.x = -60;
	meshUndercarriageCone.position.y = 80;
	meshUndercarriageCone.position.z = 50;
	meshUndercarriageCone.rotation.x = Math.PI/2;
	undercarriage.add(meshUndercarriageCone);







	return undercarriage;
}
