/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";

export async function createCraneArmMesh(
	modules=4,
	module_length_top = 100, module_length_bottom = 50,
	module_width_top = 100, module_width_bottom = 50,
	module_height = 50, barRadius = 2) {

	const zLength_top = module_width_top;
	const zLength_bottom = module_width_bottom;
	const xLength_top = module_length_top;
	const xLength_bottom = module_length_bottom;
	const radius = barRadius;

	// Calculate increment of X and Z for every segment
	const x_increment = (xLength_top-xLength_bottom)/modules;
	const z_increment = (zLength_top-zLength_bottom)/modules;

	// Calculate angle of Y in XZ plane for every segment
	const x_oblique_angle = Math.atan((xLength_top/2-xLength_bottom/2)/(module_height*modules));
	const z_oblique_angle = Math.atan((zLength_top/2-zLength_bottom/2)/(module_height*modules));

	// Calculate angle of diagonals in XZ plane for every segment
	const z_diag_angle = Math.atan((xLength_bottom+x_increment)/z_increment);
	const x_diag_angle = Math.atan((xLength_bottom+x_increment)/module_height);

	let x_length = xLength_bottom;
	let z_length = zLength_bottom;
	let y_length = 0;
	let offsetY = 0;

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/Seamless-Rust-Texture.jpg');

	//Container for central crane part:
	const craneCentral = new THREE.Group;

	let meterial = new THREE.MeshPhongMaterial({map: texture});


	for(let i = 0; i <= modules; i++){

		// Increment X and Z
		x_length = x_length + x_increment;
		z_length = z_length + z_increment;

		// Calculate length of Y
		let y_deltaXZ = Math.sqrt((x_increment*x_increment) + (z_increment*z_increment))
		y_length = Math.sqrt((y_deltaXZ*y_deltaXZ) + (module_height*module_height))

		//Diagonal bars
		const diagXYLength = Math.sqrt((x_length*x_length)+(y_length*y_length)); // Length of XY diagonal bar
		const diagXYTheta = Math.atan(y_length/x_length); // Angle of XY diagonal bar
		const diagZYLength = Math.sqrt((z_length*z_length)+(y_length*y_length)); // Length of ZY diagonal bar
		const diagZYTheta = Math.atan(y_length/z_length); // Angle of ZY diagonal bar

		// X1
		let gElementBarX1 = new THREE.CylinderGeometry(radius, radius, x_length, 10, 5, false);
		let meshElementBarX1 = new THREE.Mesh(gElementBarX1, meterial);
		meshElementBarX1.name = 'X1';
		meshElementBarX1.position.y = offsetY;
		meshElementBarX1.position.z = z_length/2;
		meshElementBarX1.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX1);

		// X2
		let gElementBarX2 = gElementBarX1.clone();
		let meshElementBarX2 = new THREE.Mesh(gElementBarX2, meterial);
		meshElementBarX2.name = "X2";
		meshElementBarX2.position.y = offsetY;
		meshElementBarX2.position.z = -z_length/2;
		meshElementBarX2.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX2);

		// Z1
		let gElementBarZ1 = new THREE.CylinderGeometry(radius, radius, z_length,10,5,false);
		let meshElementBarZ1 = new THREE.Mesh(gElementBarZ1, meterial);
		meshElementBarZ1.name = "Z1";
		meshElementBarZ1.position.y = offsetY;
		meshElementBarZ1.position.x = x_length/2;
		meshElementBarZ1.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ1)

		// Z2
		let gElementBarZ2 = gElementBarZ1.clone();
		let meshElementBarZ2 = new THREE.Mesh(gElementBarZ2, meterial);
		meshElementBarZ2.name = "Z2";
		meshElementBarZ2.position.y = offsetY;
		meshElementBarZ2.position.x = -x_length/2;
		meshElementBarZ2.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ2)

		if (i !== modules){ // Skip if final loop (only create top rectangle)

			// Y1
			let gElementBarY1 = new THREE.CylinderGeometry(radius, radius, y_length,10,5,false);
			let meshElementBarY1 = new THREE.Mesh(gElementBarY1, meterial);
			meshElementBarY1.name = "Y1";
			meshElementBarY1.position.x = x_length/2;
			meshElementBarY1.position.z = z_length/2;
			meshElementBarY1.position.y = offsetY + module_height/2;
			meshElementBarY1.rotation.set(x_oblique_angle,0,-z_oblique_angle)
			craneCentral.add(meshElementBarY1);

			// Y2
			let gElementBarY2 = gElementBarY1.clone();
			let meshElementBarY2 = new THREE.Mesh(gElementBarY2, meterial);
			meshElementBarY2.name = "Y2";
			meshElementBarY2.position.x = -x_length/2;
			meshElementBarY2.position.z = -z_length/2;
			meshElementBarY2.position.y = offsetY + module_height/2;
			meshElementBarY2.rotation.set(-x_oblique_angle,0,z_oblique_angle)
			craneCentral.add(meshElementBarY2);

			// Y3
			let gElementBarY3 = gElementBarY1.clone();
			let meshElementBarY3 = new THREE.Mesh(gElementBarY3, meterial);
			meshElementBarY3.name = "Y3";
			meshElementBarY3.position.x = -x_length/2;
			meshElementBarY3.position.z = z_length/2;
			meshElementBarY3.position.y = offsetY + module_height/2;
			meshElementBarY3.rotation.set(x_oblique_angle,0,z_oblique_angle)
			craneCentral.add(meshElementBarY3);

			// Y4
			let gElementBarY4 = gElementBarY1.clone();
			let meshElementBarY4 = new THREE.Mesh(gElementBarY4, meterial);
			meshElementBarY4.name = "Y4";
			meshElementBarY4.position.x = x_length/2;
			meshElementBarY4.position.z = -z_length/2;
			meshElementBarY4.position.y = offsetY + y_length/2;
			meshElementBarY4.rotation.set(-x_oblique_angle,0,-z_oblique_angle)
			craneCentral.add(meshElementBarY4);


			// XY1
			let gElementBarXY1 = new THREE.CylinderGeometry(radius, radius, diagXYLength, 10,5, false);
			let meshElementBarXY1 = new THREE.Mesh(gElementBarXY1, meterial);
			meshElementBarXY1.name = "XY1";
			meshElementBarXY1.position.z = z_length/2;
			meshElementBarXY1.position.y = offsetY + y_length/2;
			meshElementBarXY1.rotation.set(x_diag_angle,0,-z_diag_angle)
			craneCentral.add(meshElementBarXY1);
/*
			// XY2
			let gElementBarXY2 = gElementBarXY1.clone();
			let meshElementBarXY2 = new THREE.Mesh(gElementBarXY2, meterial);
			meshElementBarXY2.name = "XY1";
			meshElementBarXY2.position.z = -z_length/2;
			meshElementBarXY2.position.y = offsetY + y_length/2;
			meshElementBarXY2.rotation.z = -diagXYTheta;
			craneCentral.add(meshElementBarXY2);

			// ZY1
			let gElementBarZY1 = new THREE.CylinderGeometry(radius,radius,diagZYLength,10,5,false)
			let meshElementBarZY1 = new THREE.Mesh(gElementBarZY1, meterial);
			meshElementBarZY1.name = "ZY1";
			meshElementBarZY1.position.x = -x_length/2;
			meshElementBarZY1.position.y = offsetY + y_length/2;
			meshElementBarZY1.rotation.x = diagZYTheta;
			craneCentral.add(meshElementBarZY1);

			// ZY2
			let gElementBarZY2 = gElementBarZY1.clone();
			let meshElementBarZY2 = new THREE.Mesh(gElementBarZY2, meterial);
			meshElementBarZY2.name = "ZY2";
			meshElementBarZY2.position.x = x_length/2;
			meshElementBarZY2.position.y = offsetY + y_length/2;
			meshElementBarZY2.rotation.x = diagZYTheta;
			craneCentral.add(meshElementBarZY2);
*/
		}
	offsetY = offsetY + module_height;

	}

	return craneCentral;
}
