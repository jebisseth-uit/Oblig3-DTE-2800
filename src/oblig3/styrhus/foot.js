/**
 * Funksjoner som lager meshobjekter til dronen.
 */

import * as THREE from "three";

// Add all foots

export async function createFootMesh() {

    const loader = new THREE.TextureLoader();
    const textureObject = await loader.loadAsync('../../../assets/textures/foot.png');
    let material = new THREE.MeshPhongMaterial({ map: textureObject });

    const foot = new THREE.Group();

    let styrhusFoot1 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot1 = new THREE.Mesh(styrhusFoot1, material);
    meshstyrhusFoot1.name = 'styrhusFoot1';
    meshstyrhusFoot1.position.x = -10;
    meshstyrhusFoot1.position.y = 20;
    meshstyrhusFoot1.position.z = 3;
    foot.add(meshstyrhusFoot1);

    let styrhusFoot2 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot2 = new THREE.Mesh(styrhusFoot2, material);
    meshstyrhusFoot2.name = 'styrhusFoot2';
    meshstyrhusFoot2.position.x = -10;
    meshstyrhusFoot2.position.y = 20;
    meshstyrhusFoot2.position.z = -19.5;
    foot.add(meshstyrhusFoot2);

    let styrhusFoot3 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot3 = new THREE.Mesh(styrhusFoot3, material);
    meshstyrhusFoot3.name = 'styrhusFoot3';
    meshstyrhusFoot3.position.x = -30;
    meshstyrhusFoot3.position.y = 20;
    meshstyrhusFoot3.position.z = 3;
    foot.add(meshstyrhusFoot3);

    let styrhusFoot4 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot4 = new THREE.Mesh(styrhusFoot4, material);
    meshstyrhusFoot4.name = 'styrhusFoot4';
    meshstyrhusFoot4.position.x = -30;
    meshstyrhusFoot4.position.y = 20;
    meshstyrhusFoot4.position.z = -19.5;
    foot.add(meshstyrhusFoot4);

    let styrhusFoot5 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot5 = new THREE.Mesh(styrhusFoot5, material);
    meshstyrhusFoot5.name = 'styrhusFoot5';
    meshstyrhusFoot5.position.x = -45;
    meshstyrhusFoot5.position.y = 20;
    meshstyrhusFoot5.position.z = 3;
    foot.add(meshstyrhusFoot5);

    let styrhusFoot6 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot6 = new THREE.Mesh(styrhusFoot6, material);
    meshstyrhusFoot6.name = 'styrhusFoot6';
    meshstyrhusFoot6.position.x = -45;
    meshstyrhusFoot6.position.y = 20;
    meshstyrhusFoot6.position.z = -19.5;
    foot.add(meshstyrhusFoot6);

    let styrhusFoot7 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot7 = new THREE.Mesh(styrhusFoot7, material);
    meshstyrhusFoot7.name = 'styrhusFoot7';
    meshstyrhusFoot7.position.x = -55;
    meshstyrhusFoot7.position.y = 20;
    meshstyrhusFoot7.position.z = 3;
    foot.add(meshstyrhusFoot7);

    let styrhusFoot8 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot8 = new THREE.Mesh(styrhusFoot8, material);
    meshstyrhusFoot8.name = 'styrhusFoot8';
    meshstyrhusFoot8.position.x = -55;
    meshstyrhusFoot8.position.y = 20;
    meshstyrhusFoot8.position.z = -19.5;
    foot.add(meshstyrhusFoot8);

    return foot;
}

// Add all foots

export async function createFootMesh2() {

    const loader = new THREE.TextureLoader();
    const textureObject = await loader.loadAsync('../../../assets/textures/foot.png');
    let material = new THREE.MeshPhongMaterial({ map: textureObject });

    const foot = new THREE.Group();

    let styrhusFoot9 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot9 = new THREE.Mesh(styrhusFoot9, material);
    meshstyrhusFoot9.name = 'styrhusFoot9';
    meshstyrhusFoot9.position.x = -10;
    meshstyrhusFoot9.position.y = 20;
    meshstyrhusFoot9.position.z = -18;
    foot.add(meshstyrhusFoot9);

    let styrhusFoot10 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot10 = new THREE.Mesh(styrhusFoot10, material);
    meshstyrhusFoot10.name = 'styrhusFoot10';
    meshstyrhusFoot10.position.x = -10;
    meshstyrhusFoot10.position.y = 20;
    meshstyrhusFoot10.position.z = -40;
    foot.add(meshstyrhusFoot10);

    let styrhusFoot11 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot11 = new THREE.Mesh(styrhusFoot11, material);
    meshstyrhusFoot11.name = 'styrhusFoot11';
    meshstyrhusFoot11.position.x = -30;
    meshstyrhusFoot11.position.y = 20;
    meshstyrhusFoot11.position.z = -18;
    foot.add(meshstyrhusFoot11);

    let styrhusFoot12 = new THREE.BoxGeometry(20, 0.2, 6, 20, 5);
    let meshstyrhusFoot12 = new THREE.Mesh(styrhusFoot12, material);
    meshstyrhusFoot12.name = 'styrhusFoot12';
    meshstyrhusFoot12.position.x = -30;
    meshstyrhusFoot12.position.y = 20;
    meshstyrhusFoot12.position.z = -40;
    foot.add(meshstyrhusFoot12);

    let styrhusFoot13 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot13 = new THREE.Mesh(styrhusFoot13, material);
    meshstyrhusFoot13.name = 'styrhusFoot13';
    meshstyrhusFoot13.position.x = -45;
    meshstyrhusFoot13.position.y = 20;
    meshstyrhusFoot13.position.z = -18;
    foot.add(meshstyrhusFoot13);

    let styrhusFoot14 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot14 = new THREE.Mesh(styrhusFoot14, material);
    meshstyrhusFoot14.name = 'styrhusFoot14';
    meshstyrhusFoot14.position.x = -45;
    meshstyrhusFoot14.position.y = 20;
    meshstyrhusFoot14.position.z = -40;
    foot.add(meshstyrhusFoot14);

    let styrhusFoot15 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot15 = new THREE.Mesh(styrhusFoot15, material);
    meshstyrhusFoot15.name = 'styrhusFoot15';
    meshstyrhusFoot15.position.x = -55;
    meshstyrhusFoot15.position.y = 20;
    meshstyrhusFoot15.position.z = -18;
    foot.add(meshstyrhusFoot15);

    let styrhusFoot16 = new THREE.BoxGeometry(10, 0.2, 6, 20, 5);
    let meshstyrhusFoot16 = new THREE.Mesh(styrhusFoot16, material);
    meshstyrhusFoot16.name = 'styrhusFoot16';
    meshstyrhusFoot16.position.x = -55;
    meshstyrhusFoot16.position.y = 20;
    meshstyrhusFoot16.position.z = -40;
    foot.add(meshstyrhusFoot16);

    return foot;
}

// Add all bodies
export async function createBodyMesh() {

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    // Mer rekkfølgen:
    const environmentMapTexture = await cubeTextureLoader.load([
        '../../../assets/cubemaps/GardenNook/nz.png',   //positiv x (høyre)
        '../../../assets/cubemaps/GardenNook/nz.png',   //negativ x (venstre)
        '../../../assets/cubemaps/GardenNook/nz.png',   //positiv y (opp)
        '../../../assets/cubemaps/GardenNook/nz.png',   //negativ y (ned)
        '../../../assets/cubemaps/GardenNook/nz.png',   //positiv z (ut)
        '../../../assets/cubemaps/GardenNook/px.png',   //negativ z (inn)
    ]);

    const materialStandardEnvironmentMapping = new THREE.MeshStandardMaterial();
    materialStandardEnvironmentMapping.metalness = 1;
    materialStandardEnvironmentMapping.roughness = 0;
    materialStandardEnvironmentMapping.envMap = environmentMapTexture;


    const loader = new THREE.TextureLoader();
    const door1 = await loader.loadAsync('../../../assets/textures/door1.jpeg');
    const door2 = await loader.loadAsync('../../../assets/textures/door2.jpeg');
    const door3 = await loader.loadAsync('../../../assets/textures/door3.jpeg');
    const front = await loader.loadAsync('../../../assets/textures/front.png');
    const front2 = await loader.loadAsync('../../../assets/textures/front2.png');
    const front3 = await loader.loadAsync('../../../assets/textures/front3.png');
    const transparent = await loader.loadAsync('../../../assets/textures/transparent.png');
    let material1 = new THREE.MeshPhongMaterial({ map: door1 });
    let material2 = new THREE.MeshPhongMaterial({ map: door2 });
    let material3 = new THREE.MeshPhongMaterial({ map: door3 });
    let material4 = new THREE.MeshPhongMaterial({ map: front });
    material4.transparent = true;
    let material5 = new THREE.MeshPhongMaterial({ map: front2 });
    material5.transparent = true;
    let material6 = new THREE.MeshPhongMaterial({ map: front3 });
    material6.transparent = true;
    const blackMaterial = new THREE.MeshPhongMaterial({color: '#000'});
    const transparentMaterial = new THREE.MeshPhongMaterial({map: transparent});
    transparentMaterial.transparent = true;
    const body = new THREE.Group();

    let styrhusBody1 = new THREE.BoxGeometry(10, 16, 8, 30, 5);
    let meshstyrhusBody1 = new THREE.Mesh(styrhusBody1, [material4, blackMaterial, blackMaterial, blackMaterial, material4, material4]);
    meshstyrhusBody1.castShadow = true;
    meshstyrhusBody1.receiveShadow = true;
    meshstyrhusBody1.name = 'styrhusBody1';
    meshstyrhusBody1.position.x = -15;
    meshstyrhusBody1.position.y = 15;
    meshstyrhusBody1.position.z = -3;
    body.add(meshstyrhusBody1);

    let styrhusBody12 = new THREE.BoxGeometry(10, 16, 8, 30, 5);
    let meshstyrhusBody12 = new THREE.Mesh(styrhusBody12, materialStandardEnvironmentMapping);
    meshstyrhusBody12.castShadow = true;
    meshstyrhusBody12.receiveShadow = true;
    meshstyrhusBody12.name = 'styrhusBody12';
    meshstyrhusBody12.position.x = -15;
    meshstyrhusBody12.position.y = 15;
    meshstyrhusBody12.position.z = -3;
    body.add(meshstyrhusBody12);


    let styrhusBody2 = new THREE.BoxGeometry(4, 14, 10, 30, 5);
    let meshstyrhusBody2 = new THREE.Mesh(styrhusBody2, material2);
    meshstyrhusBody2.castShadow = true;
    meshstyrhusBody2.receiveShadow = true;
    meshstyrhusBody2.name = 'styrhusBody2';
    meshstyrhusBody2.position.x = -22;
    meshstyrhusBody2.position.y = 11.9;
    meshstyrhusBody2.position.z = -5;
    body.add(meshstyrhusBody2);


    let styrhusBody3 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
    let meshstyrhusBody3 = new THREE.Mesh(styrhusBody3, [material2, material2, material2, material2, material1, material2]);
    meshstyrhusBody3.castShadow = true;
    meshstyrhusBody3.receiveShadow = true;
    meshstyrhusBody3.name = 'styrhusBody3';
    meshstyrhusBody3.position.x = -29;
    meshstyrhusBody3.position.y = 11.9;
    meshstyrhusBody3.position.z = -5;
    body.add(meshstyrhusBody3);


    let styrhusBody4 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
    let meshstyrhusBody4 = new THREE.Mesh(styrhusBody4, [material2, material2, material2, material2, material3, material2]);
    meshstyrhusBody4.castShadow = true;
    meshstyrhusBody4.receiveShadow = true;
    meshstyrhusBody4.name = 'styrhusBody4';
    meshstyrhusBody4.position.x = -39;
    meshstyrhusBody4.position.y = 11.9;
    meshstyrhusBody4.position.z = -5;
    body.add(meshstyrhusBody4);

    let styrhusBody5 = new THREE.BoxGeometry(7, 14, 10, 30, 5);
    let meshstyrhusBody5 = new THREE.Mesh(styrhusBody5, [material2, material2, material2, material2, material1, material2]);
    meshstyrhusBody5.castShadow = true;
    meshstyrhusBody5.receiveShadow = true;
    meshstyrhusBody5.name = 'styrhusBody5';
    meshstyrhusBody5.position.x = -47;
    meshstyrhusBody5.position.y = 11.9;
    meshstyrhusBody5.position.z = -5;
    body.add(meshstyrhusBody5);

    let styrhusBody6 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
    let meshstyrhusBody6 = new THREE.Mesh(styrhusBody6, [material2, material2, material2, material2, material3, material2]);
    meshstyrhusBody6.castShadow = true;
    meshstyrhusBody6.receiveShadow = true;
    meshstyrhusBody6.name = 'styrhusBody6';
    meshstyrhusBody6.position.x = -55.2;
    meshstyrhusBody6.position.y = 11.9;
    meshstyrhusBody6.position.z = -5;
    body.add(meshstyrhusBody6);

    return body;
}

// Add all second bodies

export async function createBodyMesh2() {

    const loader = new THREE.TextureLoader();
    const door1 = await loader.loadAsync('../../../assets/textures/door1.jpeg');
    const door2 = await loader.loadAsync('../../../assets/textures/door2.jpeg');
    const door3 = await loader.loadAsync('../../../assets/textures/door3.jpeg');
    let material1 = new THREE.MeshPhongMaterial({ map: door1 });
    let material2 = new THREE.MeshPhongMaterial({ map: door2 });
    let material3 = new THREE.MeshPhongMaterial({ map: door3 });


    const body = new THREE.Group();

    let styrhusBody8 = new THREE.BoxGeometry(4, 14, 10, 30, 5);
    let meshstyrhusBody8 = new THREE.Mesh(styrhusBody8, material2);
    meshstyrhusBody8.name = 'styrhusBody8';
    meshstyrhusBody8.position.x = -22;
    meshstyrhusBody8.position.y = 11.9;
    meshstyrhusBody8.position.z = -27;
    body.add(meshstyrhusBody8);


    let styrhusBody9 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
    let meshstyrhusBody9 = new THREE.Mesh(styrhusBody9, [material2, material2, material2, material2, material1, material2]);
    meshstyrhusBody9.name = 'styrhusBody9';
    meshstyrhusBody9.position.x = -29;
    meshstyrhusBody9.position.y = 11.9;
    meshstyrhusBody9.position.z = -27;
    body.add(meshstyrhusBody9);


    let styrhusBody10 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
    let meshstyrhusBody10 = new THREE.Mesh(styrhusBody10, [material2, material2, material2, material2, material3, material2]);
    meshstyrhusBody10.name = 'styrhusBody10';
    meshstyrhusBody10.position.x = -39;
    meshstyrhusBody10.position.y = 11.9;
    meshstyrhusBody10.position.z = -27;
    body.add(meshstyrhusBody10);

    let styrhusBody11 = new THREE.BoxGeometry(7, 14, 10, 30, 5);
    let meshstyrhusBody11 = new THREE.Mesh(styrhusBody11, [material2, material2, material2, material2, material1, material2]);
    meshstyrhusBody11.name = 'styrhusBody11';
    meshstyrhusBody11.position.x = -47;
    meshstyrhusBody11.position.y = 11.9;
    meshstyrhusBody11.position.z = -27;
    body.add(meshstyrhusBody11);

    let styrhusBody12 = new THREE.BoxGeometry(10, 14, 10, 30, 5);
    let meshstyrhusBody12 = new THREE.Mesh(styrhusBody12, [material2, material2, material2, material2, material3, material2]);
    meshstyrhusBody12.name = 'styrhusBody12';
    meshstyrhusBody12.position.x = -55.2;
    meshstyrhusBody12.position.y = 11.9;
    meshstyrhusBody12.position.z = -27;
    body.add(meshstyrhusBody12);



    return body;
}

// Add all stairs

export async function createStairsMesh() {

    const loader = new THREE.TextureLoader();

    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');

    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    const stairs = new THREE.Group();

    let stairs1 = new THREE.CylinderGeometry(0.4, 0.4, 20, 24, 1, false);
    let meshStairs1 = new THREE.Mesh(stairs1, materialAluminium);
    meshStairs1.name = 'stairs1';
    meshStairs1.position.x = -52;
    meshStairs1.position.y = 30;
    meshStairs1.position.z = 0;
    stairs.add(meshStairs1);

    let stairs2 = new THREE.CylinderGeometry(0.4, 0.4, 20, 24, 1, false);
    let meshStairs2 = new THREE.Mesh(stairs2, materialAluminium);
    meshStairs2.name = 'stairs2';
    meshStairs2.position.x = -56;
    meshStairs2.position.y = 30;
    meshStairs2.position.z = 0;
    stairs.add(meshStairs2);

    let stairs3 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs3 = new THREE.Mesh(stairs3, materialAluminium);
    meshStairs3.name = 'stairs3';
    meshStairs3.position.x = -54;
    meshStairs3.position.y = 23.5;
    meshStairs3.position.z = 0;
    meshStairs3.rotation.z = 1.6;
    stairs.add(meshStairs3);

    let stairs4 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs4 = new THREE.Mesh(stairs4, materialAluminium);
    meshStairs4.name = 'stairs4';
    meshStairs4.position.x = -54;
    meshStairs4.position.y = 27;
    meshStairs4.position.z = 0;
    meshStairs4.rotation.z = 1.6;
    stairs.add(meshStairs4);

    let stairs5 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs5 = new THREE.Mesh(stairs5, materialAluminium);
    meshStairs5.name = 'stairs5';
    meshStairs5.position.x = -54;
    meshStairs5.position.y = 30.5;
    meshStairs5.position.z = 0;
    meshStairs5.rotation.z = 1.6;
    stairs.add(meshStairs5);

    let stairs6 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs6 = new THREE.Mesh(stairs6, materialAluminium);
    meshStairs6.name = 'stairs6';
    meshStairs6.position.x = -54;
    meshStairs6.position.y = 34;
    meshStairs6.position.z = 0;
    meshStairs6.rotation.z = 1.6;
    stairs.add(meshStairs6);

    return stairs;
}

// Add all stairs 2

export async function createStairsMesh2() {

    const loader = new THREE.TextureLoader();

    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');


    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    const stairs = new THREE.Group();

    let stairs1 = new THREE.CylinderGeometry(0.4, 0.4, 20, 24, 1, false);
    let meshStairs1 = new THREE.Mesh(stairs1, materialAluminium);
    meshStairs1.name = 'stairs1';
    meshStairs1.position.x = -52;
    meshStairs1.position.y = 30;
    meshStairs1.position.z = -32;
    stairs.add(meshStairs1);

    let stairs2 = new THREE.CylinderGeometry(0.4, 0.4, 20, 24, 1, false);
    let meshStairs2 = new THREE.Mesh(stairs2, materialAluminium);
    meshStairs2.name = 'stairs2';
    meshStairs2.position.x = -56;
    meshStairs2.position.y = 30;
    meshStairs2.position.z = -32;
    stairs.add(meshStairs2);

    let stairs3 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs3 = new THREE.Mesh(stairs3, materialAluminium);
    meshStairs3.name = 'stairs3';
    meshStairs3.position.x = -54;
    meshStairs3.position.y = 23.5;
    meshStairs3.position.z = -32;
    meshStairs3.rotation.z = 1.6;
    stairs.add(meshStairs3);

    let stairs4 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs4 = new THREE.Mesh(stairs4, materialAluminium);
    meshStairs4.name = 'stairs4';
    meshStairs4.position.x = -54;
    meshStairs4.position.y = 27;
    meshStairs4.position.z = -32;
    meshStairs4.rotation.z = 1.6;
    stairs.add(meshStairs4);

    let stairs5 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs5 = new THREE.Mesh(stairs5, materialAluminium);
    meshStairs5.name = 'stairs5';
    meshStairs5.position.x = -54;
    meshStairs5.position.y = 30.5;
    meshStairs5.position.z = -32;
    meshStairs5.rotation.z = 1.6;
    stairs.add(meshStairs5);

    let stairs6 = new THREE.CylinderGeometry(0.4, 0.4, 4, 24, 1, false);
    let meshStairs6 = new THREE.Mesh(stairs6, materialAluminium);
    meshStairs6.name = 'stairs6';
    meshStairs6.position.x = -54;
    meshStairs6.position.y = 34;
    meshStairs6.position.z = -32;
    meshStairs6.rotation.z = 1.6;
    stairs.add(meshStairs6);

    return stairs;
}

// Add all handles

export async function createHandlesMesh() {

    const loader = new THREE.TextureLoader();
    const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');


    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
    textureAluminium.wrapS = THREE.RepeatWrapping;
    textureAluminium.wrapT = THREE.RepeatWrapping;


    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    const handles = new THREE.Group();

    let handle1 = new THREE.CylinderGeometry(0.4, 0.4, 30, 24, 1, false);
    let meshHandle1 = new THREE.Mesh(handle1, materialAluminium);
    meshHandle1.name = 'handle1';
    meshHandle1.position.x = -35;
    meshHandle1.position.y = 46;
    meshHandle1.position.z = -2;
    meshHandle1.rotation.z = 1.6;
    handles.add(meshHandle1);

    let handle2 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
    let meshHandle2 = new THREE.Mesh(handle2, materialAluminium);
    meshHandle2.name = 'handle2';
    meshHandle2.position.x = -20.2;
    meshHandle2.position.y = 40;
    meshHandle2.position.z = -2;
    handles.add(meshHandle2);

    let handle3 = new THREE.CylinderGeometry(0.4, 0.4, 22, 24, 1, false);
    let meshHandle3 = new THREE.Mesh(handle3, materialAluminium);
    meshHandle3.name = 'handle3';
    meshHandle3.position.x = -38.8;
    meshHandle3.position.y = 41;
    meshHandle3.position.z = -2;
    meshHandle3.rotation.z = 1.6;
    handles.add(meshHandle3);


    let handle4 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
    let meshHandle4 = new THREE.Mesh(handle4, materialAluminium);
    meshHandle4.name = 'handle4';
    meshHandle4.position.x = -49.5;
    meshHandle4.position.y = 43.3;
    meshHandle4.position.z = -2;
    handles.add(meshHandle4);


    let handle5 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
    let meshHandle5 = new THREE.Mesh(handle5, materialAluminium);
    meshHandle5.name = 'handle5';
    meshHandle5.position.x = -44.5;
    meshHandle5.position.y = 39;
    meshHandle5.position.z = -2;
    handles.add(meshHandle5);

    let handle6 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
    let meshHandle6 = new THREE.Mesh(handle6, materialAluminium);
    meshHandle6.name = 'handle6';
    meshHandle6.position.x = -35.5;
    meshHandle6.position.y = 43.3;
    meshHandle6.position.z = -2;
    handles.add(meshHandle6);

    let handle7 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
    let meshHandle7 = new THREE.Mesh(handle7, materialAluminium);
    meshHandle7.name = 'handle7';
    meshHandle7.position.x = -28.1;
    meshHandle7.position.y = 39.5;
    meshHandle7.position.z = -2;
    handles.add(meshHandle7);

    let handle8 = new THREE.CylinderGeometry(0.4, 0.4, 16, 24, 1, false);
    let meshHandle8 = new THREE.Mesh(handle8, materialAluminium);
    meshHandle8.name = 'handle8';
    meshHandle8.position.x = -36.5;
    meshHandle8.position.y = 38;
    meshHandle8.position.z = -2;
    meshHandle8.rotation.z = 1.6;
    handles.add(meshHandle8);

    let handle9 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
    let meshHandle9 = new THREE.Mesh(handle9, materialAluminium);
    meshHandle9.name = 'handle9';
    meshHandle9.position.x = -24.5;
    meshHandle9.position.y = 44;
    meshHandle9.position.z = -2;
    handles.add(meshHandle9);

    let handle10 = new THREE.CylinderGeometry(0.4, 0.4, 5.7, 24, 1, false);
    let meshHandle10 = new THREE.Mesh(handle10, materialAluminium);
    meshHandle10.name = 'handle10';
    meshHandle10.position.x = -23.1;
    meshHandle10.position.y = 41.5;
    meshHandle10.position.z = -2;
    meshHandle10.rotation.z = 1.6;
    handles.add(meshHandle10);


    return handles;
}

// Add all handles 2

export async function createHandlesMesh2() {

    const loader = new THREE.TextureLoader();
    const textureObject = await loader.loadAsync('../../../assets/textures/metal1.jpg');
    let material = new THREE.MeshPhongMaterial({ map: textureObject });

    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
    textureAluminium.wrapS = THREE.RepeatWrapping;
    textureAluminium.wrapT = THREE.RepeatWrapping;


    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    const handles = new THREE.Group();

    let handle1 = new THREE.CylinderGeometry(0.4, 0.4, 30, 24, 1, false);
    let meshHandle1 = new THREE.Mesh(handle1, materialAluminium);
    meshHandle1.name = 'handle1';
    meshHandle1.position.x = -35;
    meshHandle1.position.y = 46;
    meshHandle1.position.z = -30;
    meshHandle1.rotation.z = 1.6;
    handles.add(meshHandle1);

    let handle2 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
    let meshHandle2 = new THREE.Mesh(handle2, materialAluminium);
    meshHandle2.name = 'handle2';
    meshHandle2.position.x = -20.2;
    meshHandle2.position.y = 40;
    meshHandle2.position.z = -30;
    handles.add(meshHandle2);

    let handle3 = new THREE.CylinderGeometry(0.4, 0.4, 22, 24, 1, false);
    let meshHandle3 = new THREE.Mesh(handle3, materialAluminium);
    meshHandle3.name = 'handle3';
    meshHandle3.position.x = -38.8;
    meshHandle3.position.y = 41;
    meshHandle3.position.z = -30;
    meshHandle3.rotation.z = 1.6;
    handles.add(meshHandle3);


    let handle4 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
    let meshHandle4 = new THREE.Mesh(handle4, materialAluminium);
    meshHandle4.name = 'handle4';
    meshHandle4.position.x = -49.5;
    meshHandle4.position.y = 43.3;
    meshHandle4.position.z = -30;
    handles.add(meshHandle4);


    let handle5 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
    let meshHandle5 = new THREE.Mesh(handle5, materialAluminium);
    meshHandle5.name = 'handle5';
    meshHandle5.position.x = -44.5;
    meshHandle5.position.y = 39;
    meshHandle5.position.z = -30;
    handles.add(meshHandle5);

    let handle6 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
    let meshHandle6 = new THREE.Mesh(handle6, materialAluminium);
    meshHandle6.name = 'handle6';
    meshHandle6.position.x = -35.5;
    meshHandle6.position.y = 43.3;
    meshHandle6.position.z = -30;
    handles.add(meshHandle6);

    let handle7 = new THREE.CylinderGeometry(0.4, 0.4, 13.3, 24, 1, false);
    let meshHandle7 = new THREE.Mesh(handle7, materialAluminium);
    meshHandle7.name = 'handle7';
    meshHandle7.position.x = -28.1;
    meshHandle7.position.y = 39.5;
    meshHandle7.position.z = -30;
    handles.add(meshHandle7);

    let handle8 = new THREE.CylinderGeometry(0.4, 0.4, 16, 24, 1, false);
    let meshHandle8 = new THREE.Mesh(handle8, materialAluminium);
    meshHandle8.name = 'handle8';
    meshHandle8.position.x = -36.5;
    meshHandle8.position.y = 38;
    meshHandle8.position.z = -30;
    meshHandle8.rotation.z = 1.6;
    handles.add(meshHandle8);

    let handle9 = new THREE.CylinderGeometry(0.4, 0.4, 4.8, 24, 1, false);
    let meshHandle9 = new THREE.Mesh(handle9, materialAluminium);
    meshHandle9.name = 'handle9';
    meshHandle9.position.x = -24.5;
    meshHandle9.position.y = 44;
    meshHandle9.position.z = -30;
    handles.add(meshHandle9);

    let handle10 = new THREE.CylinderGeometry(0.4, 0.4, 5.7, 24, 1, false);
    let meshHandle10 = new THREE.Mesh(handle10, materialAluminium);
    meshHandle10.name = 'handle10';
    meshHandle10.position.x = -23.1;
    meshHandle10.position.y = 41.5;
    meshHandle10.position.z = -30;
    meshHandle10.rotation.z = 1.6;
    handles.add(meshHandle10);


    return handles;
}

// Add all boxes

export async function createBoxMesh() {

    const loader = new THREE.TextureLoader();
    const textureObject = await loader.loadAsync('../../../assets/textures/box.jpeg');
    let material = new THREE.MeshBasicMaterial({ map: textureObject });
    let materialRed = new THREE.MeshBasicMaterial({ color: 'rgb(205, 27, 27)' });

    const box = new THREE.Group();


    let styrhusBox1 = new THREE.BoxGeometry(9, 3, 10, 30, 5);
    let meshstyrhusBox1 = new THREE.Mesh(styrhusBox1, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox1.name = 'styrhusBox1';
    meshstyrhusBox1.position.x = -64.7;
    meshstyrhusBox1.position.y = 21.5;
    meshstyrhusBox1.position.z = -5;
    box.add(meshstyrhusBox1);

    let styrhusBox2 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
    let meshstyrhusBox2 = new THREE.Mesh(styrhusBox2, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox2.name = 'styrhusBox2';
    meshstyrhusBox2.position.x = -64.7;
    meshstyrhusBox2.position.y = 25;
    meshstyrhusBox2.position.z = -5;
    box.add(meshstyrhusBox2);

    let styrhusBox3 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
    let meshstyrhusBox3 = new THREE.Mesh(styrhusBox3, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox3.name = 'styrhusBox3';
    meshstyrhusBox3.position.x = -64.7;
    meshstyrhusBox3.position.y = 30;
    meshstyrhusBox3.position.z = -5;
    box.add(meshstyrhusBox3);

    let styrhusBox4 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
    let meshstyrhusBox4 = new THREE.Mesh(styrhusBox4, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox4.name = 'styrhusBox4';
    meshstyrhusBox4.position.x = -64.7;
    meshstyrhusBox4.position.y = 35;
    meshstyrhusBox4.position.z = -5;
    box.add(meshstyrhusBox4);

    return box;
}

// Add all boxes 2

export async function createBoxMesh2() {

    const loader = new THREE.TextureLoader();
    const textureObject = await loader.loadAsync('../../../assets/textures/box.jpeg');
    let material = new THREE.MeshPhongMaterial({ map: textureObject });
    let materialRed = new THREE.MeshPhongMaterial({ color: 'rgb(205, 27, 27)' });

    const box = new THREE.Group();


    let styrhusBox1 = new THREE.BoxGeometry(9, 3, 10, 30, 5);
    let meshstyrhusBox1 = new THREE.Mesh(styrhusBox1, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox1.name = 'styrhusBox1';
    meshstyrhusBox1.position.x = -64.7;
    meshstyrhusBox1.position.y = 21.5;
    meshstyrhusBox1.position.z = -27;
    box.add(meshstyrhusBox1);

    let styrhusBox2 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
    let meshstyrhusBox2 = new THREE.Mesh(styrhusBox2, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox2.name = 'styrhusBox2';
    meshstyrhusBox2.position.x = -64.7;
    meshstyrhusBox2.position.y = 25;
    meshstyrhusBox2.position.z = -27;
    box.add(meshstyrhusBox2);

    let styrhusBox3 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
    let meshstyrhusBox3 = new THREE.Mesh(styrhusBox3, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox3.name = 'styrhusBox3';
    meshstyrhusBox3.position.x = -64.7;
    meshstyrhusBox3.position.y = 30;
    meshstyrhusBox3.position.z = -27;
    box.add(meshstyrhusBox3);

    let styrhusBox4 = new THREE.BoxGeometry(9, 5, 10, 30, 5);
    let meshstyrhusBox4 = new THREE.Mesh(styrhusBox4, [material, material, materialRed, materialRed, material, material, ]);
    meshstyrhusBox4.name = 'styrhusBox4';
    meshstyrhusBox4.position.x = -64.7;
    meshstyrhusBox4.position.y = 35;
    meshstyrhusBox4.position.z = -27;
    box.add(meshstyrhusBox4);

    return box;
}

// Add all arms

export async function createArmsMesh() {

    const loader = new THREE.TextureLoader();
    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
    textureAluminium.wrapS = THREE.RepeatWrapping;
    textureAluminium.wrapT = THREE.RepeatWrapping;


    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    const arms = new THREE.Group();
    arms.castShadow = true;
    arms.receiveShadow = true;

    const arms1 = new THREE.Group();
    arms1.castShadow = true;
    arms1.receiveShadow = true;

    let arm1 = new THREE.CylinderGeometry(1, 1, 70, 24, 1, false);
    let meshArm1 = new THREE.Mesh(arm1, materialAluminium);
    meshArm1.name = 'arm1';
    meshArm1.position.x = -25;
    meshArm1.position.y = 54;
    meshArm1.position.z = -5;
    meshArm1.rotation.z = 2.2;
    arms1.add(meshArm1);

    arms.add(arms1);

    const arms2 = new THREE.Group();

    let arm2 = new THREE.CylinderGeometry(1, 1, 50, 24, 1, false);
    let meshArm2 = new THREE.Mesh(arm2, materialAluminium);
    meshArm2.name = 'arm2';
    meshArm2.position.x = -42;
    meshArm2.position.y = 43;
    meshArm2.position.z = -5;
    meshArm2.rotation.z = 1.2;
    arms2.add(meshArm2);

    let arm3 = new THREE.CylinderGeometry(1, 1, 11, 24, 1, false);
    let meshArm3 = new THREE.Mesh(arm3, materialAluminium);
    meshArm3.name = 'arm3';
    meshArm3.position.x = -56;
    meshArm3.position.y = 42;
    meshArm3.position.z = -5;
    meshArm3.rotation.z = 28;
    arms2.add(meshArm3);

    let arm4 = new THREE.CylinderGeometry(2, 2, 1, 24, 1, false);
    let meshArm4 = new THREE.Mesh(arm4, materialAluminium);
    meshArm4.name = 'arm4';
    meshArm4.position.x = -57.5;
    meshArm4.position.y = 35.5;
    meshArm4.position.z = -5;
    meshArm4.rotation.x = 5;
    arms2.add(meshArm4);

    arms.add(arms2);


    return arms;
}


// Add all arms 2

export async function createArmsMesh2() {

    const loader = new THREE.TextureLoader();
    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
    textureAluminium.wrapS = THREE.RepeatWrapping;
    textureAluminium.wrapT = THREE.RepeatWrapping;


    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    const arms = new THREE.Group();
    arms.castShadow = true;
    arms.receiveShadow = true;

    const arms1 = new THREE.Group();

    let arm1 = new THREE.CylinderGeometry(1, 1, 70, 24, 1, false);
    let meshArm1 = new THREE.Mesh(arm1, materialAluminium);
    meshArm1.castShadow = true;
    meshArm1.receiveShadow = true;

    meshArm1.name = 'arm1';
    meshArm1.position.x = -25;
    meshArm1.position.y = 54;
    meshArm1.position.z = -27;
    meshArm1.rotation.z = 2.2;
    arms1.add(meshArm1);

    arms.add(arms1);

    const arms2 = new THREE.Group();

    let arm2 = new THREE.CylinderGeometry(1, 1, 50, 24, 1, false);
    let meshArm2 = new THREE.Mesh(arm2, materialAluminium);
    meshArm2.name = 'arm2';
    meshArm2.position.x = -42;
    meshArm2.position.y = 43;
    meshArm2.position.z = -27;
    meshArm2.rotation.z = 1.2;
    arms2.add(meshArm2);

    let arm3 = new THREE.CylinderGeometry(1, 1, 11, 24, 1, false);
    let meshArm3 = new THREE.Mesh(arm3, materialAluminium);
    meshArm3.name = 'arm3';
    meshArm3.position.x = -56;
    meshArm3.position.y = 42;
    meshArm3.position.z = -27;
    meshArm3.rotation.z = 28;
    arms2.add(meshArm3);

    let arm4 = new THREE.CylinderGeometry(2, 2, 1, 24, 1, false);
    let meshArm4 = new THREE.Mesh(arm4, materialAluminium);
    meshArm4.name = 'arm4';
    meshArm4.position.x = -57.5;
    meshArm4.position.y = 35.5;
    meshArm4.position.z = -27;
    meshArm4.rotation.x = 5;
    arms2.add(meshArm4);

    arms.add(arms2);


    return arms;
}

// Add all roller 2

export  async  function creatRollerMesh1(){

    const loader = new THREE.TextureLoader();
    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
    textureAluminium.wrapS = THREE.RepeatWrapping;
    textureAluminium.wrapT = THREE.RepeatWrapping;

    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    let joiner = new THREE.CylinderGeometry(2, 2, 11, 24, 1, false);
    let meshJoiner = new THREE.Mesh(joiner, materialAluminium);
    meshJoiner.castShadow = true;
    meshJoiner.receiveShadow = true;


    meshJoiner.name = 'joiner';
    meshJoiner.position.x = -41;
    meshJoiner.position.y = 21;
    meshJoiner.position.z = 0;
    meshJoiner.rotation.z = 1.6;
    meshJoiner.rotation.y = 1.6;

    return meshJoiner;

}

export async function createRollersMesh() {

    const loader = new THREE.TextureLoader();
    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');
    textureAluminium.wrapS = THREE.RepeatWrapping;
    textureAluminium.wrapT = THREE.RepeatWrapping;


    let materialAluminium = new THREE.MeshStandardMaterial({map: textureAluminium});
    materialAluminium.metalness = 0.5;
    materialAluminium.roughness = 0;

    const rollers = new THREE.Group();

    let roller1 = new THREE.CylinderGeometry(5, 5, 11, 24, 1, false);
    let meshRoller1 = new THREE.Mesh(roller1, materialAluminium);
    meshRoller1.name = 'roller1';
    meshRoller1.position.x = -40;
    meshRoller1.position.y = 30;
    meshRoller1.position.z = -16;
    meshRoller1.rotation.z = 1.6;
    meshRoller1.rotation.y = 1.6;
    rollers.add(meshRoller1);

    let roller2 = new THREE.CylinderGeometry(5, 5, 11, 24, 1, false);
    let meshRoller2 = new THREE.Mesh(roller2, materialAluminium);
    meshRoller2.name = 'roller2';
    meshRoller2.position.x = -51;
    meshRoller2.position.y = 30;
    meshRoller2.position.z = -16;
    meshRoller2.rotation.z = 1.6;
    meshRoller2.rotation.y = 1.6;
    rollers.add(meshRoller2);


    return rollers;
}