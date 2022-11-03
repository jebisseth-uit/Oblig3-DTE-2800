import * as THREE from "three";

export async function flexibleWires() {

    const loader = new THREE.TextureLoader();
    const texture = await loader.loadAsync('../../assets/textures/metal1.jpg');
    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');

    const material = new THREE.MeshPhongMaterial({map: texture});
    const materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});

    const flexibleWires = new THREE.Group;

// Linje
    const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
    const points = [];
    points.push(meshSphere.position);
    points.push(cubeMesh.position);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.name = "myLine";
    g_scene.add(line);


    const myCube = g_scene.getObjectByName("myCube");
    const myLine = g_scene.getObjectByName("myLine");
    const lineVertexPositions = myLine.geometry.attributes.position.array;
    lineVertexPositions[0] = mySphere.position.x;
    lineVertexPositions[1] = mySphere.position.y;
    lineVertexPositions[2] = mySphere.position.z;
    lineVertexPositions[3] = myCube.position.x;
    lineVertexPositions[4] = myCube.position.y;
    lineVertexPositions[5] = myCube.position.z;
    myLine.geometry.attributes.position.needsUpdate = true;
    myLine.geometry.computeBoundingBox();
    myLine.geometry.computeBoundingSphere();
//Oppdater trackball-kontrollen:
    g_controls.update();

    return flexibleWires;

}