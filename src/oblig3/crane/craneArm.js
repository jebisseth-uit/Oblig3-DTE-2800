/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";
import {radToDeg} from "three/src/math/MathUtils";
import math from "dat.gui/src/dat/color/math";

export async function createCraneArmMesh(
	modules=8,
	module_length_top = 40, module_length_bottom = 40,
	module_width_top = 40, module_width_bottom = 40,
	module_height = 60, barRadius = 2
){

	const zLength_top = module_width_top;
	const zLength_bottom = module_width_bottom;
	const xLength_top = module_length_top;
	const xLength_bottom = module_length_bottom;
	const radius = barRadius;

	let catNear = 0;
	let catFar = 0;
	let hyp = 0;

	// Calculate increment of X and Z for every segment
	const deltaX = (xLength_top-xLength_bottom)/modules;
	const deltaZ = (zLength_top-zLength_bottom)/modules;

	// Calculate angle of Y in XZ plane for every segment
	catNear = xLength_top/2-xLength_bottom/2
	catFar = module_height*modules;
	const x_oblique_angle = Math.PI/2 - Math.atan(catFar/catNear);
	catNear = zLength_top/2-zLength_bottom/2
	catFar = module_height*modules;
	const z_oblique_angle = Math.PI/2 - Math.atan(catFar/catNear);

	//Console log - DEBUG
	console.log("Angle of Y in XZ plane:")
	console.log("catFar = " + catFar + ", catNear = " + catNear);
	console.log("X-angle: " + x_oblique_angle + ", " + radToDeg(x_oblique_angle));
	console.log("Z-angle: " + z_oblique_angle + ", " + radToDeg(z_oblique_angle));

	// Calculate angle of diagonals in X plane for every segment
	catNear = xLength_bottom+deltaX;
	catFar = deltaZ;
	const xx_diag_angle = Math.atan(catFar/catNear);
		//Console log - DEBUG
		console.log(" ")
		console.log("Diagonals in Z plane:")
		console.log("catNear = " + catNear + ", catFar = " + catFar + ", mod = " + module_height)
		console.log("X-angle = arctan(z/x)");
		console.log("X-angle = " + radToDeg(xx_diag_angle));
	// Z-angle
	catNear = Math.hypot(deltaZ, (xLength_bottom+deltaX))
	catFar = module_height;
	const xz_diag_angle =Math.PI/2 - Math.atan(catFar/catNear);
		//Console log - DEBUG
		console.log("Z-angle = mod/x")
		console.log("Z-angle = " + radToDeg(xz_diag_angle));

	// Calculate angle of diagonals in X plane for every segment
	catNear = zLength_bottom+deltaZ;
	catFar = deltaX;
	const zx_diag_angle = Math.atan(catFar/catNear);
	//Console log - DEBUG
	console.log(" ")
	console.log("Diagonals in Z plane:")
	console.log("catNear = " + catNear + ", catFar = " + catFar + ", mod = " + module_height)
	console.log("X-angle = arctan(z/x)");
	console.log("X-angle = " + radToDeg(zx_diag_angle));
	// Z-angle
	catNear = Math.hypot(deltaX, (zLength_bottom+deltaZ))
	catFar = module_height;
	const zz_diag_angle =Math.PI/2 - Math.atan(catFar/catNear);
	//Console log - DEBUG
	console.log("Z-angle = mod/x")
	console.log("Z-angle = " + radToDeg(zz_diag_angle));


	let x_length = xLength_bottom;
	let z_length = zLength_bottom;
	let y_length = 0;
	let offsetY = 0;

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/metal1.jpg');

	//Container for central crane part:
	const craneCentral = new THREE.Group;

	let material = new THREE.MeshPhongMaterial({map: texture});


	for(let i = 0; i <= modules; i++){

		// Increment X and Z
		x_length = x_length + deltaX;
		z_length = z_length + deltaZ;

		// Calculate length of Y
		catNear = deltaX, catFar = deltaZ;
		hyp = Math.hypot(catNear, catFar);
		y_length = Math.hypot(hyp, module_height);

		//Diagonal bars
		//Calculate hypothenus of diagonal in XZ plane
		catNear = deltaZ, catFar = x_length+deltaX;
		hyp = Math.hypot(catNear, catFar);
		//Calculate hypothenus of diagonal i XY plane
		catNear = hyp, catFar = module_height;
		let diagXYLength = Math.hypot(catNear, catFar);

		//const diagXYLength = Math.sqrt((x_length*x_length)+(y_length*y_length)); // Length of XY diagonal bar
		const diagXYTheta = Math.PI/2 - Math.atan(y_length/x_length); // Angle of XY diagonal bar
		const diagZYLength = Math.sqrt((z_length*z_length)+(y_length*y_length)); // Length of ZY diagonal bar
		const diagZYTheta = Math.PI/2 - Math.atan(y_length/z_length); // Angle of ZY diagonal bar

		// X1
		let gElementBarX1 = new THREE.CylinderGeometry(radius, radius, x_length, 10, 5, false);
		let meshElementBarX1 = new THREE.Mesh(gElementBarX1, material);
		meshElementBarX1.name = 'X1';
		meshElementBarX1.position.y = offsetY;
		meshElementBarX1.position.z = z_length/2;
		meshElementBarX1.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX1);

		// X2
		let gElementBarX2 = gElementBarX1.clone();
		let meshElementBarX2 = new THREE.Mesh(gElementBarX2, material);
		meshElementBarX2.name = "X2";
		meshElementBarX2.position.y = offsetY;
		meshElementBarX2.position.z = -z_length/2;
		meshElementBarX2.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX2);

		// Z1
		let gElementBarZ1 = new THREE.CylinderGeometry(radius, radius, z_length,10,5,false);
		let meshElementBarZ1 = new THREE.Mesh(gElementBarZ1, material);
		meshElementBarZ1.name = "Z1";
		meshElementBarZ1.position.y = offsetY;
		meshElementBarZ1.position.x = x_length/2;
		meshElementBarZ1.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ1)

		// Z2
		let gElementBarZ2 = gElementBarZ1.clone();
		let meshElementBarZ2 = new THREE.Mesh(gElementBarZ2, material);
		meshElementBarZ2.name = "Z2";
		meshElementBarZ2.position.y = offsetY;
		meshElementBarZ2.position.x = -x_length/2;
		meshElementBarZ2.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ2)

		if (i !== modules){ // Skip if final loop (only create top rectangle)

			// Y1
			let gElementBarY1 = new THREE.CylinderGeometry(radius, radius, y_length,10,5,false);
			let meshElementBarY1 = new THREE.Mesh(gElementBarY1, material);
			meshElementBarY1.name = "Y1";
			meshElementBarY1.position.x = x_length/2 + deltaX/4;
			meshElementBarY1.position.z = z_length/2 + deltaZ/4;
			meshElementBarY1.position.y = offsetY + module_height/2;
			meshElementBarY1.rotation.set(x_oblique_angle,0,z_oblique_angle);
			craneCentral.add(meshElementBarY1);

			// Y2
			let gElementBarY2 = gElementBarY1.clone();
			let meshElementBarY2 = new THREE.Mesh(gElementBarY2, material);
			meshElementBarY2.name = "Y2";
			meshElementBarY2.position.x = -x_length/2 - deltaX/4;
			meshElementBarY2.position.z = -z_length/2 - deltaZ/4;
			meshElementBarY2.position.y = offsetY + module_height/2;
			meshElementBarY2.rotation.set(x_oblique_angle,0,z_oblique_angle);
			craneCentral.add(meshElementBarY2);

			// Y3
			let gElementBarY3 = gElementBarY1.clone();
			let meshElementBarY3 = new THREE.Mesh(gElementBarY3, material);
			meshElementBarY3.name = "Y3";
			meshElementBarY3.position.x = -x_length/2 - deltaX/4;
			meshElementBarY3.position.z = z_length/2 + deltaZ/4;
			meshElementBarY3.position.y = offsetY + module_height/2;
			meshElementBarY3.rotation.set(x_oblique_angle,0,z_oblique_angle);
			craneCentral.add(meshElementBarY3);

			// Y4
			let gElementBarY4 = gElementBarY1.clone();
			let meshElementBarY4 = new THREE.Mesh(gElementBarY4, material);
			meshElementBarY4.name = "Y4";
			meshElementBarY4.position.x = x_length/2 + deltaX/4;
			meshElementBarY4.position.z = -z_length/2 - deltaZ/4;
			meshElementBarY4.position.y = offsetY + module_height/2;
			meshElementBarY4.rotation.set(x_oblique_angle,0,z_oblique_angle);
			craneCentral.add(meshElementBarY4);


			// XY1
			let gElementBarXY1 = new THREE.CylinderGeometry(radius, radius, diagXYLength, 10,5, false);
			let meshElementBarXY1 = new THREE.Mesh(gElementBarXY1, material);
			meshElementBarXY1.name = "XY1";
			meshElementBarXY1.position.z = z_length/2;
			meshElementBarXY1.position.y = offsetY + module_height/2;
			meshElementBarXY1.rotation.set(xx_diag_angle,0,xz_diag_angle);
			craneCentral.add(meshElementBarXY1);

			// XY2
			let gElementBarXY2 = gElementBarXY1.clone();
			let meshElementBarXY2 = new THREE.Mesh(gElementBarXY2, material);
			meshElementBarXY2.name = "XY1";
			meshElementBarXY2.position.z = -z_length/2;
			meshElementBarXY2.position.y = offsetY + module_height/2;
			meshElementBarXY2.rotation.set(-xx_diag_angle,0,-xz_diag_angle);
			craneCentral.add(meshElementBarXY2);

			// ZY1
			let gElementBarZY1 = new THREE.CylinderGeometry(radius,radius,diagZYLength,10,5,false)
			let meshElementBarZY1 = new THREE.Mesh(gElementBarZY1, material);
			meshElementBarZY1.name = "ZY1";
			meshElementBarZY1.position.x = -x_length/2;
			meshElementBarZY1.position.y = offsetY + module_height/2;
			meshElementBarZY1.rotation.set(-zx_diag_angle,Math.PI/2,-zz_diag_angle);
			craneCentral.add(meshElementBarZY1);

			// ZY2
			let gElementBarZY2 = gElementBarZY1.clone();
			let meshElementBarZY2 = new THREE.Mesh(gElementBarZY2, material);
			meshElementBarZY2.name = "ZY2";
			meshElementBarZY2.position.x = x_length/2;
			meshElementBarZY2.position.y = offsetY + module_height/2;
			meshElementBarZY2.rotation.set(-zx_diag_angle,-Math.PI/2,-zz_diag_angle);
			craneCentral.add(meshElementBarZY2);

		}
	offsetY = offsetY + module_height;

	}

	return craneCentral;
}
