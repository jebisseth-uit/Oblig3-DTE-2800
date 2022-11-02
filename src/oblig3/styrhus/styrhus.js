
import * as THREE from "three";

import {createArmsMesh, createArmsMesh2, createBodyMesh, createBodyMesh2, createBoxMesh, createBoxMesh2, createFootMesh, createFootMesh2, createHandlesMesh, createHandlesMesh2, createRollersMesh, createStairsMesh, createStairsMesh2} from "./foot.js";
import {createSpotlights} from "./ligths.js";

export async function styrhus() {

    const body1 = new THREE.Group();

    let body = await createBodyMesh();
    body.name = "body";
    body1.add(body);

    //
    let body2 = await createBodyMesh2();
    body2.name = "body2";
    body1.add(body2);

    //
    let box = await createBoxMesh();
    box.name = "box";
    body1.add(box);

    //
    let box2 = await createBoxMesh2();
    box2.name = "box2";
    body1.add(box2);

    //
    let foot = await createFootMesh();
    foot.name = "foot";
    body1.add(foot);

    //
    let foot2 = await createFootMesh2();
    foot2.name = "foot2";
    body1.add(foot2);

    //
    let stairs = await createStairsMesh();
    stairs.name = "stairs";
    body1.add(stairs);

    //
    let stairs2 = await createStairsMesh2();
    stairs2.name = "stairs2";
    body1.add(stairs2);

    //
    let handles = await createHandlesMesh();
    handles.name = "handles";
    body1.add(handles);

    //
    let handles2 = await createHandlesMesh2();
    handles2.name = "handles2";
    body1.add(handles2);

    //
    let arms = await createArmsMesh();
    arms.name = "arms";
    body1.add(arms);
    body1.add(handles);

    //
    let arms2 = await createArmsMesh2();
    arms2.name = "arms2";
    body1.add(arms2);

    //
    let rollers = await createRollersMesh();
    rollers.name = "rollers";
    body1.add(rollers);

    let spotlightRoof = await createSpotlights(2,5,12)
    spotlightRoof.name = "roofLight";
    spotlightRoof.position.y = 36.5;
    spotlightRoof.position.z = -5;
    body1.add(spotlightRoof);

    let spotlightBack = await createSpotlights(2,5,12)
    spotlightBack.name = "backLight";
    spotlightBack.position.y = 38;
    spotlightBack.position.z = -5;
    spotlightBack.position.x = -69;
    spotlightBack.rotation.y = Math.PI;
    body1.add(spotlightBack);

    return body1;
}



