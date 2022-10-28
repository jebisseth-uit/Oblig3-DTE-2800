/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";

export async function createCraneArmMesh(modules=1, offset_Y = 0, length_X = 80, length_Z = 100, length_Y = 80, barRadius = 2) {

	const zLength = length_Z;
	const xLength = length_X;
	const yLength = length_Y;
	const radius = barRadius;
	const diagXYLength = Math.sqrt((xLength*xLength)+(yLength*yLength)); // Length of XY diagonal bar
	const diagXYTheta = Math.atan(yLength/xLength); // Angle of XY diagonal bar
	const diagZYLength = Math.sqrt((zLength*zLength)+(yLength*yLength)); // Length of ZY diagonal bar
	const diagZYTheta = Math.atan(yLength/zLength); // Angle of ZY diagonal bar

	let offsetY = offset_Y;

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/Seamless-Rust-Texture.jpg');

	//Container for central crane part:
	const craneCentral = new THREE.Group;

	let materialAluminium = new THREE.MeshPhongMaterial({map: texture});

	for(let i = 1; i <= modules; i++){
		// X1
		let gElementBarX1 = new THREE.CylinderGeometry(radius, radius, xLength, 10, 5, false);
		let meshElementBarX1 = new THREE.Mesh(gElementBarX1, materialAluminium);
		meshElementBarX1.name = 'X1';
		meshElementBarX1.position.y = offsetY + yLength;
		meshElementBarX1.position.z = zLength/2;
		meshElementBarX1.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX1);

		// X2
		let gElementBarX2 = gElementBarX1.clone();
		let meshElementBarX2 = new THREE.Mesh(gElementBarX2, materialAluminium);
		meshElementBarX2.name = "X2";
		meshElementBarX2.position.y = offsetY + yLength;
		meshElementBarX2.position.z = -zLength/2;
		meshElementBarX2.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX2);

		// Z1
		let gElementBarZ1 = new THREE.CylinderGeometry(radius, radius, zLength,10,5,false);
		let meshElementBarZ1 = new THREE.Mesh(gElementBarZ1, materialAluminium);
		meshElementBarZ1.name = "Z1";
		meshElementBarZ1.position.y = offsetY + yLength;
		meshElementBarZ1.position.x = xLength/2;
		meshElementBarZ1.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ1)

		// Z2
		let gElementBarZ2 = gElementBarZ1.clone();
		let meshElementBarZ2 = new THREE.Mesh(gElementBarZ2, materialAluminium);
		meshElementBarZ2.name = "Z2";
		meshElementBarZ2.position.y = offsetY + yLength;
		meshElementBarZ2.position.x = -xLength/2;
		meshElementBarZ2.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ2)

		// Y1
		let gElementBarY1 = new THREE.CylinderGeometry(radius, radius, yLength,10,5,false);
		let meshElementBarY1 = new THREE.Mesh(gElementBarY1, materialAluminium);
		meshElementBarY1.name = "Y1";
		meshElementBarY1.position.x = xLength/2;
		meshElementBarY1.position.z = -zLength/2;
		meshElementBarY1.position.y = offsetY + yLength/2;
		craneCentral.add(meshElementBarY1);

		// Y2
		let gElementBarY2 = gElementBarY1.clone();
		let meshElementBarY2 = new THREE.Mesh(gElementBarY2, materialAluminium);
		meshElementBarY2.name = "Y1";
		meshElementBarY2.position.x = -xLength/2;
		meshElementBarY2.position.z = -zLength/2;
		meshElementBarY2.position.y = offsetY + yLength/2;
		craneCentral.add(meshElementBarY2);

		// Y3
		let gElementBarY3 = gElementBarY1.clone();
		let meshElementBarY3 = new THREE.Mesh(gElementBarY3, materialAluminium);
		meshElementBarY3.name = "Y3";
		meshElementBarY3.position.x = -xLength/2;
		meshElementBarY3.position.z = zLength/2;
		meshElementBarY3.position.y = offsetY + yLength/2;
		craneCentral.add(meshElementBarY3);

		// Y4
		let gElementBarY4 = gElementBarY1.clone();
		let meshElementBarY4 = new THREE.Mesh(gElementBarY4, materialAluminium);
		meshElementBarY4.name = "Y4";
		meshElementBarY4.position.x = xLength/2;
		meshElementBarY4.position.z = zLength/2;
		meshElementBarY4.position.y = offsetY + yLength/2;
		craneCentral.add(meshElementBarY4);

		// XY1
		let gElementBarXY1 = new THREE.CylinderGeometry(radius, radius, diagXYLength, 10,5, false);
		let meshElementBarXY1 = new THREE.Mesh(gElementBarXY1, materialAluminium);
		meshElementBarXY1.name = "XY1";
		meshElementBarXY1.position.z = zLength/2;
		meshElementBarXY1.position.y = offsetY + yLength/2;
		meshElementBarXY1.rotation.z = -diagXYTheta;
		craneCentral.add(meshElementBarXY1);

		// XY2
		let gElementBarXY2 = gElementBarXY1.clone();
		let meshElementBarXY2 = new THREE.Mesh(gElementBarXY2, materialAluminium);
		meshElementBarXY2.name = "XY1";
		meshElementBarXY2.position.z = -zLength/2;
		meshElementBarXY2.position.y = offsetY + yLength/2;
		meshElementBarXY2.rotation.z = -diagXYTheta;
		craneCentral.add(meshElementBarXY2);

		// ZY1
		let gElementBarZY1 = new THREE.CylinderGeometry(radius,radius,diagZYLength,10,5,false)
		let meshElementBarZY1 = new THREE.Mesh(gElementBarZY1, materialAluminium);
		meshElementBarZY1.name = "ZY1";
		meshElementBarZY1.position.x = -xLength/2;
		meshElementBarZY1.position.y = offsetY + yLength/2;
		meshElementBarZY1.rotation.x = diagZYTheta;
		craneCentral.add(meshElementBarZY1);

		// ZY2
		let gElementBarZY2 = gElementBarZY1.clone();
		let meshElementBarZY2 = new THREE.Mesh(gElementBarZY2, materialAluminium);
		meshElementBarZY2.name = "ZY2";
		meshElementBarZY2.position.x = xLength/2;
		meshElementBarZY2.position.y = offsetY + yLength/2;
		meshElementBarZY2.rotation.x = diagZYTheta;
		craneCentral.add(meshElementBarZY2);

	offsetY = offsetY + yLength;

	}

	return craneCentral;
}
