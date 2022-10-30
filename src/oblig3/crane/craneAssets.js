/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {radToDeg} from "three/src/math/MathUtils";
import math from "dat.gui/src/dat/color/math";

export async function createLogoPlate(width=1, height=1, depth=1){

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/238logo.png');

	let material = new THREE.MeshPhongMaterial({map: texture});

	//Container for central crane part:
	const craneLogo = new THREE.Group;

	let logoPlate = new THREE.BoxGeometry(width,height,depth);
	let logoPlateMesh = new THREE.Mesh(logoPlate, material);
	logoPlate.name = "Logo";
	craneLogo.add(logoPlateMesh);


	return craneLogo;
}
