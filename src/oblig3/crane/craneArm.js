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
	module_height = 60, barRadius = 2,
	module_name = "None"
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

	let x_length = xLength_bottom;
	let z_length = zLength_bottom;
	let offsetY = 0;

	const loader = new THREE.TextureLoader();
	const texture = await loader.loadAsync('../../assets/textures/metal1.jpg');

	//Container for central crane part:
	const craneCentral = new THREE.Group;

	let material = new THREE.MeshPhongMaterial({map: texture});
	let materialRed = new THREE.MeshBasicMaterial({color: 0xff0000});
	let materialGreen = new THREE.MeshBasicMaterial({color: 0x00ff00});
	let materialBlue = new THREE.MeshBasicMaterial({color: 0x0000ff});
	let materialYellow = new THREE.MeshBasicMaterial({color: 0xffff00});


	for(let i = 0; i <= modules; i++){

		////////////////////
		// Calculate angle of Y in X plane for every segment
		// This will be diagonal inwards or outwards depending on the
		// difference between the start and end width/length of the scaffold.
		////////////////////
		catNear = x_length + deltaX
		catFar = deltaZ;
		hyp = Math.hypot(deltaZ, deltaX);
		let y_xPlane_xAngle = Math.atan(catFar/catNear);
		catNear = hyp;
		catFar = module_height;
		let y_xPlane_zAngle = Math.PI/2 - Math.atan(catFar/catNear);
		hyp = Math.hypot(module_height, hyp);
		let y_xPlane_length = hyp;
		//Console log for debugging
		console.log(" ")
		console.log("Y in X plane:")
		console.log("i = " + i);
		console.log("catNear = " + catNear + ", catFar = " + catFar + ", mod = " + module_height)
		console.log("y_xPlane_xAngle = " + radToDeg(y_xPlane_xAngle));
		console.log("y_xPlane_zAngle = " + radToDeg(y_xPlane_zAngle));

		////////////////////
		// Calculate angle of Y in Z plane for every segment
		////////////////////
		catNear = z_length + deltaZ
		catFar = deltaX;
		hyp = Math.hypot(deltaX, deltaZ);
		let y_zPlane_zAngle = Math.atan(catFar/catNear);
		catNear = hyp
		catFar = module_height;
		let y_zPlane_xAngle = Math.PI/2 - Math.atan(catFar/catNear);
		hyp = Math.hypot(module_height, hyp);
		let y_zPlane_length = hyp;

		//Console log for debugging
		console.log(" ")
		console.log(module_name)
		console.log("---------")
		console.log("Angle of Y in XZ plane:")
		console.log("i = " + i);
		console.log("catFar = " + catFar + ", catNear = " + catNear);
		console.log("X-angle: " + y_xPlane_xAngle + ", " + radToDeg(y_xPlane_xAngle));
		console.log("Z-angle: " + y_xPlane_zAngle + ", " + radToDeg(y_xPlane_zAngle));






		////////////////////
		// Calculate angle of diagonals in X plane for every segment
		// Diagonal bars reaching from lower level to next level.
		// Will be diagonal inwards/outwards in both X and Z plane if start/end width/length of scaffold differs.
		////////////////////
		catNear = x_length+deltaX;
		catFar = deltaZ;
		hyp = Math.hypot(deltaZ, (x_length+deltaX));
		let diag_xPlane_xAngle = Math.atan(catFar/catNear);
		//Console log for debugging
		console.log(" ")
		console.log("Diagonals in Z plane:")
		console.log("i = " + i);
		console.log("catNear = " + catNear + ", catFar = " + catFar + ", mod = " + module_height)
		console.log("X-angle = arctan(catFar/catNear)");
		console.log("X-angle = " + radToDeg(diag_xPlane_xAngle));
		// ZY-angle
		catNear = hyp
		catFar = module_height;
		hyp = Math.hypot(hyp, module_height);
		let diag_xPlane_zAngle = Math.PI/2 + Math.atan(catFar/catNear);
		//Console log for debugging
		console.log("Z-angle = arctan(moduleheight/hyp)")
		console.log("Z-angle = " + radToDeg(diag_xPlane_zAngle));
		//Set XY length
		let diag_xplane_length = hyp;

		///////////////////
		// Calculate angle of diagonals in Z plane for every segment
		// X plane from above
		///////////////////
		catNear = z_length+deltaZ;
		catFar = deltaX;
		hyp = Math.hypot(deltaX, (z_length+deltaZ));
		let diag_zPlane_zAngle = Math.atan(catFar/catNear);
		//Console log for debugging
		console.log(" ")
		console.log("Diagonals in Z plane:")
		console.log("i = " + i);
		console.log("catNear = " + catNear + ", catFar = " + catFar + ", mod = " + module_height)
		console.log("X-angle = arctan(catFar/catNear)");
		console.log("X-angle = " + radToDeg(diag_zPlane_zAngle));
		// XY-angle
		catNear = hyp;
		catFar = module_height;
		hyp = Math.hypot(hyp, module_height);
		let diag_zPlane_xAngle = Math.PI/2 + Math.atan(catFar/catNear);
		//Console log for debugging
		console.log("Z-angle = arctan(moduleheight/hyp)")
		console.log("Z-angle = " + radToDeg(diag_zPlane_xAngle));
		//Set ZY length
		let diag_zPlane_length = hyp;

		// X1
		let gElementBarX1 = new THREE.CylinderGeometry(radius, radius, x_length, 10, 5, false);
		let meshElementBarX1 = new THREE.Mesh(gElementBarX1, material);
		meshElementBarX1.castShadow = true;
		meshElementBarX1.receiveShadow = true;
		meshElementBarX1.name = 'X1';
		meshElementBarX1.position.y = offsetY;
		meshElementBarX1.position.z = z_length/2;
		meshElementBarX1.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX1);

		// X2
		let gElementBarX2 = gElementBarX1.clone();
		let meshElementBarX2 = new THREE.Mesh(gElementBarX2, material);
		meshElementBarX2.name = "X2";
		meshElementBarX2.castShadow = true;
		meshElementBarX2.receiveShadow = true
		meshElementBarX2.position.y = offsetY;
		meshElementBarX2.position.z = -z_length/2;
		meshElementBarX2.rotation.z = Math.PI/2;
		craneCentral.add(meshElementBarX2);

		// Z1
		let gElementBarZ1 = new THREE.CylinderGeometry(radius, radius, z_length,10,5,false);
		let meshElementBarZ1 = new THREE.Mesh(gElementBarZ1, material);
		meshElementBarZ1.name = "Z1";
		meshElementBarZ1.castShadow = true;
		meshElementBarZ1.receiveShadow = true
		meshElementBarZ1.position.y = offsetY;
		meshElementBarZ1.position.x = x_length/2;
		meshElementBarZ1.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ1)

		// Z2
		let gElementBarZ2 = gElementBarZ1.clone();
		let meshElementBarZ2 = new THREE.Mesh(gElementBarZ2, material);
		meshElementBarZ2.name = "Z2";
		meshElementBarZ2.castShadow = true;
		meshElementBarZ2.receiveShadow = true
		meshElementBarZ2.position.y = offsetY;
		meshElementBarZ2.position.x = -x_length/2;
		meshElementBarZ2.rotation.x = Math.PI/2;
		craneCentral.add(meshElementBarZ2)

		if (i !== modules){ // Skip if final loop (only create top rectangle)

			// Y1
			let gElementBarY1 = new THREE.CylinderGeometry(radius, radius, y_xPlane_length,10,5,false);
			let meshElementBarY1 = new THREE.Mesh(gElementBarY1, material);
			meshElementBarY1.name = "Y1";
			meshElementBarY1.castShadow = true;
			meshElementBarY1.receiveShadow = true
			meshElementBarY1.position.x = x_length/2;
			meshElementBarY1.position.z = z_length/2;
			meshElementBarY1.position.y = offsetY + module_height/2;
			meshElementBarY1.rotation.x = y_xPlane_xAngle;
			meshElementBarY1.rotation.z = -y_xPlane_zAngle;
			craneCentral.add(meshElementBarY1);

			// Y2
			let gElementBarY2 = new THREE.CylinderGeometry(radius, radius, y_zPlane_length,10,5,false);;
			let meshElementBarY2 = new THREE.Mesh(gElementBarY2, material);
			meshElementBarY2.name = "Y2";
			meshElementBarY2.castShadow = true;
			meshElementBarY2.receiveShadow = true
			meshElementBarY2.position.x = x_length/2;
			meshElementBarY2.position.z = -z_length/2;
			meshElementBarY2.position.y = offsetY + module_height/2;
			meshElementBarY2.rotation.x = -y_zPlane_xAngle;
			meshElementBarY2.rotation.z = -y_zPlane_zAngle;
			craneCentral.add(meshElementBarY2);

			// Y3
			let gElementBarY3 = gElementBarY1.clone();
			let meshElementBarY3 = new THREE.Mesh(gElementBarY3, material);
			meshElementBarY3.name = "Y3";
			meshElementBarY3.castShadow = true;
			meshElementBarY3.receiveShadow = true
			meshElementBarY3.position.x = -x_length/2;
			meshElementBarY3.position.z = -z_length/2;
			meshElementBarY3.position.y = offsetY + module_height/2;
			meshElementBarY3.rotation.x = -y_xPlane_xAngle;
			meshElementBarY3.rotation.z = y_xPlane_zAngle;
			craneCentral.add(meshElementBarY3);

			// Y4
			let gElementBarY4 = gElementBarY3.clone();
			let meshElementBarY4 = new THREE.Mesh(gElementBarY4, material);
			meshElementBarY4.name = "Y4";
			meshElementBarY4.castShadow = true;
			meshElementBarY4.receiveShadow = true
			meshElementBarY4.position.x = -x_length/2;
			meshElementBarY4.position.z = z_length/2;
			meshElementBarY4.position.y = offsetY + module_height/2;
			meshElementBarY4.rotation.x = y_zPlane_xAngle;
			meshElementBarY4.rotation.z = y_zPlane_zAngle;
			craneCentral.add(meshElementBarY4);


			// XY1
			let gElementBarXY1 = new THREE.CylinderGeometry(radius, radius, diag_xplane_length, 10,5, false);
			let meshElementBarXY1 = new THREE.Mesh(gElementBarXY1, material)
			meshElementBarXY1.castShadow = true;
			meshElementBarXY1.receiveShadow = true
			meshElementBarXY1.position.z = z_length/2;
			meshElementBarXY1.position.y = offsetY + module_height/2;
			meshElementBarXY1.rotation.x = diag_xPlane_xAngle;
			meshElementBarXY1.rotation.z = -diag_xPlane_zAngle;
			craneCentral.add(meshElementBarXY1);

			// XY2
			let gElementBarXY2 = gElementBarXY1.clone();
			let meshElementBarXY2 = new THREE.Mesh(gElementBarXY2, material);
			meshElementBarXY2.name = "XY1";
			meshElementBarXY2.castShadow = true;
			meshElementBarXY2.receiveShadow = true
			meshElementBarXY2.position.z = -z_length/2;
			meshElementBarXY2.position.y = offsetY + module_height/2;
			meshElementBarXY2.rotation.x = -diag_xPlane_xAngle;
			meshElementBarXY2.rotation.z = diag_xPlane_zAngle;
			craneCentral.add(meshElementBarXY2);

			// ZY1
			let gElementBarZY1 = new THREE.CylinderGeometry(radius,radius,diag_zPlane_length,10,5,false)
			let meshElementBarZY1 = new THREE.Mesh(gElementBarZY1, material);
			meshElementBarZY1.name = "ZY1";
			meshElementBarZY1.castShadow = true;
			meshElementBarZY1.receiveShadow = true
			meshElementBarZY1.position.x = -x_length/2;
			meshElementBarZY1.position.y = offsetY + module_height/2;
			meshElementBarZY1.rotation.x = -diag_zPlane_xAngle;
			meshElementBarZY1.rotation.z = diag_zPlane_zAngle;
			craneCentral.add(meshElementBarZY1);

			// ZY2
			let gElementBarZY2 = gElementBarZY1.clone();
			let meshElementBarZY2 = new THREE.Mesh(gElementBarZY2, material);
			meshElementBarZY2.name = "ZY2";
			meshElementBarZY2.castShadow = true;
			meshElementBarZY2.receiveShadow = true
			meshElementBarZY2.position.x = x_length/2;
			meshElementBarZY2.position.y = offsetY + module_height/2;
			meshElementBarZY2.rotation.x = diag_zPlane_xAngle;
			meshElementBarZY2.rotation.z = diag_zPlane_zAngle;
			craneCentral.add(meshElementBarZY2);

		}
	// Increment X and Z
	// Increment each module in x and z if start/end width/length differs
	x_length = x_length + deltaX;
	z_length = z_length + deltaZ;
	offsetY = offsetY + module_height;

	}

	return craneCentral;
}
