/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";

export async function createSpotlights(width = 1, height = 1, depth = 1){

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/metal1.jpg');

	let material = new THREE.MeshPhongMaterial({map: texture});

	//Spotlight
	const spotlight = new THREE.Group;

	const base = new THREE.BoxGeometry(width*0.3, height*0.3, depth*0.3)
	const baseMesh = new THREE.Mesh(base, material);
	baseMesh.castShadow = true;
	baseMesh.receiveShadow = true;
	spotlight.add(baseMesh);

	const lightbox = new THREE.BoxGeometry(width, height, depth)
	const lightboxMesh = new THREE.Mesh(lightbox, material);
	lightboxMesh.castShadow = true;
	lightboxMesh.receiveShadow = true;
	lightboxMesh.position.y = height/2;
	lightboxMesh.position.x = 1;
	lightboxMesh.rotation.z = -Math.PI/6;
	spotlight.add(lightboxMesh);

	return spotlight;
}
