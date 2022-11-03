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
    points.push(g_scene.getObjectByName("hook").position);
    points.push(g_scene.getObjectByName("craneArmWithWires").position);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.name = "myLine";
    g_scene.add(line);


    const myHook= g_scene.getObjectByName("hook");
    const myCraneArmWithWires = g_scene.getObjectByName("craneArmWithWires");
    const myLine = g_scene.getObjectByName("myLine");
    const lineVertexPositions = myLine.geometry.attributes.position.array;
    lineVertexPositions[0] = myCraneArmWithWires.position.x;
    lineVertexPositions[1] = myCraneArmWithWires.position.y;
    lineVertexPositions[2] = myCraneArmWithWires.position.z;
    lineVertexPositions[3] = myHook.position.x;
    lineVertexPositions[4] = myHook.position.y;
    lineVertexPositions[5] = myHook.position.z;
    myLine.geometry.attributes.position.needsUpdate = true;
    myLine.geometry.computeBoundingBox();
    myLine.geometry.computeBoundingSphere();
//Oppdater trackball-kontrollen:
    g_controls.update();

    return flexibleWires;

}