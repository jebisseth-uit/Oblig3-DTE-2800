/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";

export async function createLogoPlate(width=1, height=1, depth=1){

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/238logo.png');

	let material = new THREE.MeshPhongMaterial({map: texture});

	//Container for arm logo:
	const craneLogo = new THREE.Group;

	let logoPlate = new THREE.BoxGeometry(width,height,depth);
	let logoPlateMesh = new THREE.Mesh(logoPlate, material);
	logoPlateMesh.castShadow = true;
	logoPlateMesh.receiveShadow = true;
	logoPlate.name = "Logo";
	craneLogo.add(logoPlateMesh);

	return craneLogo;
}

export async function createCraneEndPiece(width = 1, height = 1, depth = 1){

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/metal1.jpg');

	let material = new THREE.MeshPhongMaterial({map: texture});

	//Container for arm end-piece
	const endPiece = new THREE.Group;

	//Box
	let base = new THREE.BoxGeometry(width, height, depth);
	let baseMesh = new THREE.Mesh(base, material);
	baseMesh.castShadow = true;
	baseMesh.receiveShadow = true;
	endPiece.add(baseMesh);

	//Cylinder
	let cylinder = new THREE.CylinderGeometry(width*0.3, width*0.3, depth*0.98)
	let cylinderMesh = new THREE.Mesh(cylinder, material);
	cylinderMesh.castShadow = true;
	cylinderMesh.receiveShadow = true;
	baseMesh.add(cylinderMesh);
	cylinderMesh.position.y = height/2;
	cylinderMesh.position.x = width/2;
	cylinderMesh.rotation.x = Math.PI/2;


	//Container for end-piece trapezoids
	let trapezoid = new THREE.Group;
	let trapSquare = new THREE.BoxGeometry(width*0.6, height*0.6, 1);
	let trapSquareMesh = new THREE.Mesh(trapSquare, material);

	let trapSquare2  = trapSquare.clone();
	let trapSquareMesh2 = new THREE.Mesh(trapSquare2, material);

	return endPiece;
}

export async function createCraneHookWires(radius = 1, length = 100, widthX_top = 10, widthZ_top = 10, widthX_bottom = 10, widthZ_bottom = 10){
	const wires = new THREE.Group;

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/aluminium.jpg');

	let material = new THREE.MeshPhongMaterial({map: texture});

	let wire1 = new THREE.CylinderGeometry(radius,radius,length)
	let wire1Mesh = new THREE.Mesh(wire1, material);
	wire1Mesh.castShadow = true;
	wire1Mesh.receiveShadow = true;
	wire1Mesh.position.x = widthX_top/2;
	wire1Mesh.position.z = widthZ_top/2;
	wires.add(wire1Mesh);

	let wire2 = wire1.clone();
	let wire2Mesh = new THREE.Mesh(wire2, material);
	wire2Mesh.castShadow = true;
	wire2Mesh.receiveShadow = true;
	wire2Mesh.position.x = widthX_top/2;
	wire2Mesh.position.z = -widthZ_top/2;
	wires.add(wire2Mesh);

	let wire3 = wire1.clone();
	let wire3Mesh = new THREE.Mesh(wire3, material);
	wire3Mesh.castShadow = true;
	wire3Mesh.receiveShadow = true;
	wire3Mesh.position.x = -widthX_top/2;
	wire3Mesh.position.z = -widthZ_top/2;
	wires.add(wire3Mesh);
	

	return wires;
}

export async function createCraneHookBackWires(radius = 1, length = 100, widthX_top = 10, widthZ_top = 10, widthX_bottom = 10, widthZ_bottom = 10) {
	const wiresBack = new THREE.Group;

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/aluminium.jpg');

	let material = new THREE.MeshPhongMaterial({map: texture});

	let wire10 = new THREE.CylinderGeometry(radius, radius, length)
	let wire10Mesh = new THREE.Mesh(wire10, material);
	wire10Mesh.castShadow = true;
	wire10Mesh.receiveShadow = true;
	wiresBack.add(wire10Mesh);

	let wire5 = wire10.clone();
	let wire5Mesh = new THREE.Mesh(wire5, material);
	wire5Mesh.castShadow = true;
	wire5Mesh.receiveShadow = true;
	wire5Mesh.position.z = -widthZ_top / 2;
	wiresBack.add(wire5Mesh);

	let wire6 = wire10.clone();
	let wire6Mesh = new THREE.Mesh(wire6, material);
	wire6Mesh.castShadow = true;
	wire6Mesh.receiveShadow = true;
	wire6Mesh.position.z = widthZ_top / 2;
	wiresBack.add(wire6Mesh);

	return wiresBack
}