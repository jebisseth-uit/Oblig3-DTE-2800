/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {radToDeg} from "three/src/math/MathUtils";
import math from "dat.gui/src/dat/color/math";
import {clone} from "three/addons/utils/SkeletonUtils";

export async function createLogoPlate(width=1, height=1, depth=1){

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/238logo.png');

	let material = new THREE.MeshPhongMaterial({map: texture});

	//Container for crane logo:
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

	//Container for crane end-piece
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
	cylinderMesh.position.y = height+0.1*height;
	cylinderMesh.rotation.x = Math.PI/2;

	//Container for end-piece trapezoids
	let trapezoid = new THREE.Group;
	let trapSquare = new THREE.BoxGeometry(width*0.6, height*0.6, 1);
	let trapSquareMesh = new THREE.Mesh(trapSquare, material);

	let trapSquare2  = trapSquare.clone();
	let trapSquareMesh2 = new THREE.Mesh(trapSquare2, material);

	return endPiece;

}
