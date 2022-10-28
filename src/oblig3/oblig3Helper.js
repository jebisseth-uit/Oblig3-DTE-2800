/**
 * Funksjoner som lager meshobjekter til dronen.
 */
import * as THREE from "three";

export async function createArmMesh() {

	const loader = new THREE.TextureLoader();
	const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');

	//Konteiner for hele armen:
	const arm = new THREE.Group();

	let materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});

	//LowerArm:
	let gLowerArm = new THREE.CylinderGeometry(4, 4, 100, 8, 1, false);
	let meshLowerArm = new THREE.Mesh(gLowerArm, materialAluminium);
	meshLowerArm.name = 'LowerArm';
	meshLowerArm.position.x = 0;
	meshLowerArm.position.y = 60;	//Flytter opp 50 (halvparten av sylinderens høyde) + 10 (høyde på foten)
	meshLowerArm.position.z = 0;
	arm.add(meshLowerArm);

	//** ArmAndJoint1:
	let armAndJoint1 = new THREE.Group();
	armAndJoint1.position.x = 0;
	armAndJoint1.position.y = 50;
	armAndJoint1.position.z = 0;
	armAndJoint1.name = 'armAndJoint1';
	//* joint1:
	let gJoint1 = new THREE.SphereGeometry(10, 8, 6);					//radius, widthSegments, heightSegments,
	let meshJoint1 = new THREE.Mesh(gJoint1, materialAluminium);
	meshJoint1.castShadow = true;
	meshJoint1.name = 'joint1';
	armAndJoint1.add(meshJoint1);
	//* arm1:
	let gMidArm = new THREE.CylinderGeometry(4, 4, 100, 8, 1, false);
	let meshMidArm = new THREE.Mesh(gMidArm, materialAluminium);
	meshMidArm.castShadow = true;
	meshMidArm.name = 'MidArm';
	meshMidArm.position.x = 0;
	meshMidArm.position.y = 50;
	meshMidArm.position.z = 0;
	armAndJoint1.add(meshMidArm);

	// Legg til parent:
	meshLowerArm.add(armAndJoint1);

	//** ArmAndJoint2:
	let armAndJoint2 = new THREE.Group();
	armAndJoint2.position.x = 0;
	armAndJoint2.position.y = 100;
	armAndJoint2.position.z = 0;
	armAndJoint2.name = 'armAndJoint2';
	//* joint2:
	let gJoint2 = new THREE.SphereGeometry(10, 8, 6);					//radius, widthSegments, heightSegments,
	let meshJoint2 = new THREE.Mesh(gJoint2, materialAluminium);
	meshJoint2.name = 'joint2';
	meshJoint2.castShadow = true;
	armAndJoint2.add(meshJoint2);
	//* arm2:
	let gUpperArm = new THREE.CylinderGeometry(4, 4, 100, 8, 1, false);
	let meshUpperArm = new THREE.Mesh(gUpperArm, materialAluminium);
	meshUpperArm.castShadow = true;
	meshUpperArm.name = 'UpperArm';
	meshUpperArm.position.x = 0;
	meshUpperArm.position.y = 50;
	meshUpperArm.position.z = 0;
	armAndJoint2.add(meshUpperArm);

	// Legg til parent:
	armAndJoint1.add(armAndJoint2);

	return arm;
}

// Add all foots

export async function createFootMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	let material = new THREE.MeshPhongMaterial({ map: textureObject });

	const foot = new THREE.Group();


	let styrhusFoot1 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
	let meshstyrhusFoot1 = new THREE.Mesh(styrhusFoot1, material);
	meshstyrhusFoot1.name = 'styrhusFoot1';
	meshstyrhusFoot1.position.x = -10;
	meshstyrhusFoot1.position.y = 0;
	meshstyrhusFoot1.position.z = 3;
	foot.add(meshstyrhusFoot1);


	let styrhusFoot2 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
	let meshstyrhusFoot2 = new THREE.Mesh(styrhusFoot2, material);
	meshstyrhusFoot2.name = 'styrhusFoot2';
	meshstyrhusFoot2.position.x = -10;
	meshstyrhusFoot2.position.y = 0;
	meshstyrhusFoot2.position.z = -13;
	foot.add(meshstyrhusFoot2);


	let styrhusFoot3 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
	let meshstyrhusFoot3 = new THREE.Mesh(styrhusFoot3, material);
	meshstyrhusFoot3.name = 'styrhusFoot3';
	meshstyrhusFoot3.position.x = -30;
	meshstyrhusFoot3.position.y = 0;
	meshstyrhusFoot3.position.z = 3;
	foot.add(meshstyrhusFoot3);

	let styrhusFoot4 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
	let meshstyrhusFoot4 = new THREE.Mesh(styrhusFoot4, material);
	meshstyrhusFoot4.name = 'styrhusFoot4';
	meshstyrhusFoot4.position.x = -30;
	meshstyrhusFoot4.position.y = 0;
	meshstyrhusFoot4.position.z = -13;
	foot.add(meshstyrhusFoot4);


	let styrhusFoot5 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
	let meshstyrhusFoot5 = new THREE.Mesh(styrhusFoot5, material);
	meshstyrhusFoot5.name = 'styrhusFoot5';
	meshstyrhusFoot5.position.x = -45;
	meshstyrhusFoot5.position.y = 0;
	meshstyrhusFoot5.position.z = 3;
	foot.add(meshstyrhusFoot5);


	let styrhusFoot6 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
	let meshstyrhusFoot6 = new THREE.Mesh(styrhusFoot6, material);
	meshstyrhusFoot6.name = 'styrhusFoot6';
	meshstyrhusFoot6.position.x = -45;
	meshstyrhusFoot6.position.y = 0;
	meshstyrhusFoot6.position.z = -13;
	foot.add(meshstyrhusFoot6);

	let styrhusFoot7 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
	let meshstyrhusFoot7 = new THREE.Mesh(styrhusFoot7, material);
	meshstyrhusFoot7.name = 'styrhusFoot7';
	meshstyrhusFoot7.position.x = -55;
	meshstyrhusFoot7.position.y = 0;
	meshstyrhusFoot7.position.z = 3;
	foot.add(meshstyrhusFoot7);

	let styrhusFoot8 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
	let meshstyrhusFoot8 = new THREE.Mesh(styrhusFoot8, material);
	meshstyrhusFoot8.name = 'styrhusFoot8';
	meshstyrhusFoot8.position.x = -55;
	meshstyrhusFoot8.position.y = 0;
	meshstyrhusFoot8.position.z = -13;
	foot.add(meshstyrhusFoot8);


	return foot;
}

// Add all bodies

export async function createBodyMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	let material = new THREE.MeshPhongMaterial({ map: textureObject });

	const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');

	let materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});

	const body = new THREE.Group();


	let styrhusBody1 = new THREE.BoxGeometry(20, 16, 10, 30, 5);
	let meshstyrhusBody1 = new THREE.Mesh(styrhusBody1, material);
	meshstyrhusBody1.name = 'styrhusBody1';
	meshstyrhusBody1.position.x = -10;
	meshstyrhusBody1.position.y = 8;
	meshstyrhusBody1.position.z = -5;
	body.add(meshstyrhusBody1);


	let styrhusBody2 = new THREE.BoxGeometry(4, 14, 10, 30, 5);
	let meshstyrhusBody2 = new THREE.Mesh(styrhusBody2, material);
	meshstyrhusBody2.name = 'styrhusBody2';
	meshstyrhusBody2.position.x = -22;
	meshstyrhusBody2.position.y = 7;
	meshstyrhusBody2.position.z = -5;
	body.add(meshstyrhusBody2);


	let styrhusBody3 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
	let meshstyrhusBody3 = new THREE.Mesh(styrhusBody3, material);
	meshstyrhusBody3.name = 'styrhusBody3';
	meshstyrhusBody3.position.x = -29;
	meshstyrhusBody3.position.y = 7;
	meshstyrhusBody3.position.z = -5;
	body.add(meshstyrhusBody3);


	let styrhusBody4 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
	let meshstyrhusBody4 = new THREE.Mesh(styrhusBody4, material);
	meshstyrhusBody4.name = 'styrhusBody4';
	meshstyrhusBody4.position.x = -39;
	meshstyrhusBody4.position.y = 7;
	meshstyrhusBody4.position.z = -5;
	body.add(meshstyrhusBody4);

	let styrhusBody5 = new THREE.BoxGeometry(7, 14, 10, 30, 5);
	let meshstyrhusBody5 = new THREE.Mesh(styrhusBody5, material);
	meshstyrhusBody5.name = 'styrhusBody5';
	meshstyrhusBody5.position.x = -47;
	meshstyrhusBody5.position.y = 7;
	meshstyrhusBody5.position.z = -5;
	body.add(meshstyrhusBody5);

	let styrhusBody6 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
	let meshstyrhusBody6 = new THREE.Mesh(styrhusBody6, material);
	meshstyrhusBody6.name = 'styrhusBody6';
	meshstyrhusBody6.position.x = -55;
	meshstyrhusBody6.position.y = 7;
	meshstyrhusBody6.position.z = -5;
	body.add(meshstyrhusBody6);

	return body;
}

// Add all stairs

export async function createStairsMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	let material = new THREE.MeshPhongMaterial({ map: textureObject });

	const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
	textureAluminium.wrapS = THREE.RepeatWrapping;
	textureAluminium.wrapT = THREE.RepeatWrapping;

	let materialAluminium = new THREE.MeshMatcapMaterial({map: textureAluminium});

	const stairs = new THREE.Group();

	let stairs1 = new THREE.CylinderGeometry(0.4, 0.4, 20, 24, 1, false);
	let meshStairs1 = new THREE.Mesh(stairs1, materialAluminium);
	meshStairs1.name = 'stairs1';
	meshStairs1.position.x = -52;
	meshStairs1.position.y = 10;
	meshStairs1.position.z = 0;
	stairs.add(meshStairs1);

	let stairs2 = new THREE.CylinderGeometry(0.4, 0.4, 20, 24, 1, false);
	let meshStairs2 = new THREE.Mesh(stairs2, materialAluminium);
	meshStairs2.name = 'stairs2';
	meshStairs2.position.x = -56;
	meshStairs2.position.y = 10;
	meshStairs2.position.z = 0;
	stairs.add(meshStairs2);

	let stairs3 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
	let meshStairs3 = new THREE.Mesh(stairs3, materialAluminium);
	meshStairs3.name = 'stairs3';
	meshStairs3.position.x = -54;
	meshStairs3.position.y = 3.5;
	meshStairs3.position.z = 0;
	meshStairs3.rotation.z = 1.6;
	stairs.add(meshStairs3);

	let stairs4 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
	let meshStairs4 = new THREE.Mesh(stairs4, materialAluminium);
	meshStairs4.name = 'stairs4';
	meshStairs4.position.x = -54;
	meshStairs4.position.y = 7;
	meshStairs4.position.z = 0;
	meshStairs4.rotation.z = 1.6;
	stairs.add(meshStairs4);

	let stairs5 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
	let meshStairs5 = new THREE.Mesh(stairs5, materialAluminium);
	meshStairs5.name = 'stairs5';
	meshStairs5.position.x = -54;
	meshStairs5.position.y = 10.5;
	meshStairs5.position.z = 0;
	meshStairs5.rotation.z = 1.6;
	stairs.add(meshStairs5);

	let stairs6 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
	let meshStairs6 = new THREE.Mesh(stairs6, materialAluminium);
	meshStairs6.name = 'stairs6';
	meshStairs6.position.x = -54;
	meshStairs6.position.y = 14;
	meshStairs6.position.z = 0;
	meshStairs6.rotation.z = 1.6;
	stairs.add(meshStairs6);

	return stairs;
}

// Add all handles

export async function createHandlesMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	let material = new THREE.MeshPhongMaterial({ map: textureObject });

	const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
	textureAluminium.wrapS = THREE.RepeatWrapping;
	textureAluminium.wrapT = THREE.RepeatWrapping;

	let materialAluminium = new THREE.MeshMatcapMaterial({map: textureAluminium});

	const handles = new THREE.Group();

	let handle1 = new THREE.CylinderGeometry(0.4, 0.4, 30, 24, 1, false);
	let meshHandle1 = new THREE.Mesh(handle1, materialAluminium);
	meshHandle1.name = 'handle1';
	meshHandle1.position.x = -35;
	meshHandle1.position.y = 26;
	meshHandle1.position.z = -2;
	meshHandle1.rotation.z = 1.6;
	handles.add(meshHandle1);

	let handle2 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
	let meshHandle2 = new THREE.Mesh(handle2, materialAluminium);
	meshHandle2.name = 'handle2';
	meshHandle2.position.x = -20.2;
	meshHandle2.position.y = 20;
	meshHandle2.position.z = -2;
	handles.add(meshHandle2);

	let handle3 = new THREE.CylinderGeometry(0.4, 0.4, 22, 24, 1, false);
	let meshHandle3 = new THREE.Mesh(handle3, materialAluminium);
	meshHandle3.name = 'handle3';
	meshHandle3.position.x = -38.8;
	meshHandle3.position.y = 21;
	meshHandle3.position.z = -2;
	meshHandle3.rotation.z = 1.6;
	handles.add(meshHandle3);


	let handle4 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
	let meshHandle4 = new THREE.Mesh(handle4, materialAluminium);
	meshHandle4.name = 'handle4';
	meshHandle4.position.x = -49.5;
	meshHandle4.position.y = 23.3;
	meshHandle4.position.z = -2;
	handles.add(meshHandle4);


	let handle5 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
	let meshHandle5 = new THREE.Mesh(handle5, materialAluminium);
	meshHandle5.name = 'handle5';
	meshHandle5.position.x = -44.5;
	meshHandle5.position.y = 19;
	meshHandle5.position.z = -2;
	handles.add(meshHandle5);

	let handle6 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
	let meshHandle6 = new THREE.Mesh(handle6, materialAluminium);
	meshHandle6.name = 'handle6';
	meshHandle6.position.x = -35.5;
	meshHandle6.position.y = 23.3;
	meshHandle6.position.z = -2;
	handles.add(meshHandle6);

	let handle7 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
	let meshHandle7 = new THREE.Mesh(handle7, materialAluminium);
	meshHandle7.name = 'handle7';
	meshHandle7.position.x = -28.1;
	meshHandle7.position.y = 19.5;
	meshHandle7.position.z = -2;
	handles.add(meshHandle7);

	let handle8 = new THREE.CylinderGeometry(0.4, 0.4, 16, 24, 1, false);
	let meshHandle8 = new THREE.Mesh(handle8, materialAluminium);
	meshHandle8.name = 'handle8';
	meshHandle8.position.x = -36.5;
	meshHandle8.position.y = 18;
	meshHandle8.position.z = -2;
	meshHandle8.rotation.z = 1.6;
	handles.add(meshHandle8);

	let handle9 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
	let meshHandle9 = new THREE.Mesh(handle9, materialAluminium);
	meshHandle9.name = 'handle9';
	meshHandle9.position.x = -24.5;
	meshHandle9.position.y = 24;
	meshHandle9.position.z = -2;
	handles.add(meshHandle9);

	let handle10 = new THREE.CylinderGeometry(0.4, 0.4, 5.7, 24, 1, false);
	let meshHandle10 = new THREE.Mesh(handle10, materialAluminium);
	meshHandle10.name = 'handle10';
	meshHandle10.position.x = -23.1;
	meshHandle10.position.y = 21.5;
	meshHandle10.position.z = -2;
	meshHandle10.rotation.z = 1.6;
	handles.add(meshHandle10);


	return handles;
}

// Add all boxes

export async function createBoxMesh() {

	const loader = new THREE.TextureLoader();
	const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
	let material = new THREE.MeshPhongMaterial({ map: textureObject });

	const box = new THREE.Group();


	let styrhusBox1 = new THREE.BoxGeometry(9, 3, 10, 30, 5);
	let meshstyrhusBox1 = new THREE.Mesh(styrhusBox1, material);
	meshstyrhusBox1.name = 'styrhusBox1';
	meshstyrhusBox1.position.x = -64;
	meshstyrhusBox1.position.y = 1.5;
	meshstyrhusBox1.position.z = -5;
	box.add(meshstyrhusBox1);

	let styrhusBox2 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
	let meshstyrhusBox2 = new THREE.Mesh(styrhusBox2, material);
	meshstyrhusBox2.name = 'styrhusBox2';
	meshstyrhusBox2.position.x = -64;
	meshstyrhusBox2.position.y = 5;
	meshstyrhusBox2.position.z = -5;
	box.add(meshstyrhusBox2);

	let styrhusBox3 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
	let meshstyrhusBox3 = new THREE.Mesh(styrhusBox3, material);
	meshstyrhusBox3.name = 'styrhusBox3';
	meshstyrhusBox3.position.x = -64;
	meshstyrhusBox3.position.y = 10;
	meshstyrhusBox3.position.z = -5;
	box.add(meshstyrhusBox3);

	let styrhusBox4 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
	let meshstyrhusBox4 = new THREE.Mesh(styrhusBox4, material);
	meshstyrhusBox4.name = 'styrhusBox4';
	meshstyrhusBox4.position.x = -64;
	meshstyrhusBox4.position.y = 15;
	meshstyrhusBox4.position.z = -5;
	box.add(meshstyrhusBox4);


	return box;
}
