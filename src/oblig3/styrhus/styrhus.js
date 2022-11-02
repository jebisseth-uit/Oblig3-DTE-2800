
import * as THREE from "three";


import {
    createArmsMesh,
    createArmsMesh2,
    createBodyMesh,
    createBodyMesh2,
    createBoxMesh,
    createBoxMesh2,
    createFootMesh,
    createFootMesh2,
    createHandlesMesh,
    createHandlesMesh2,
    createRollersMesh,
    createStairsMesh,
    createStairsMesh2,
    creatRollerMesh1,
} from "./foot.js";

import {createSpotlights} from "./ligths.js";
export async function styrhus() {

    const body1 = new THREE.Group();

    let body = await createBodyMesh();
    body.name = "body";
    body.translateZ(13);
    body.translateY(-1);
    body.translateX(3);
    const bodyScale = 0.85;
    body.scale.set(bodyScale, 0.65, 0.95);
    body1.add(body);

    //
    let body2 = await createBodyMesh2();
    body2.name = "body2";
    body2.translateZ(17)
    body2.translateX(3);
    const body2Scale = 0.85;
    body2.scale.set(body2Scale, 0.65, 0.95);
    body1.add(body2);

    //
    let box = await createBoxMesh();
    box.name = "box";
    box.translateZ(13);
    box.translateY(-12);
    box.translateX(-18);
    box.scale.set(0.5, 0.8, 0.8);
    body1.add(box);

    //
    let box2 = await createBoxMesh2();
    box2.name = "box2";
    box2.translateZ(14);
    box2.translateY(-12);
    box2.translateX(-18);
    box2.scale.set(0.5, 0.8, 0.8);
    body1.add(box2);

    //
    let foot = await createFootMesh();
    foot.name = "foot";
    foot.translateY(-7.69);
    foot.translateZ(13);
    foot.translateX(-13.7);
    const footScale = 0.575;
    foot.scale.set(footScale, footScale, footScale);
    body1.add(foot);

    //
    let foot2 = await createFootMesh2();
    foot2.name = "foot2";
    foot2.translateY(-7.69);
    foot2.translateZ(8);
    foot2.translateX(-13.7);
    const foot2Scale = 0.575;
    foot2.scale.set(foot2Scale, foot2Scale, foot2Scale);
    body1.add(foot2);

    //
    let stairs = await createStairsMesh();
    stairs.name = "stairs";
    stairs.translateZ(13.5);
    stairs.translateY(-6);
    stairs.translateX(-16);
    stairs.scale.set(0.5, 0.5, 0.5);
    body1.add(stairs);

    //
    let stairs2 = await createStairsMesh2();
    stairs2.name = "stairs2";
    stairs2.translateZ(2.2);
    stairs2.translateY(-6);
    stairs2.translateX(-16);
    stairs2.scale.set(0.5, 0.5, 0.5);
    body1.add(stairs2);

    //
    let handles = await createHandlesMesh();
    handles.name = "handles";
    handles.translateZ(13.5);
    handles.translateY(-6);
    handles.translateX(-5);
    handles.scale.set(0.7, 0.5, 0.5);
    body1.add(handles);

    //
    let handles2 = await createHandlesMesh2();
    handles2.name = "handles2";
    handles2.translateZ(2.2);
    handles2.translateY(-6);
    handles2.translateX(-5);
    handles2.scale.set(0.7, 0.5, 0.5);
    body1.add(handles2);

    //
    let arms = await createArmsMesh();
    arms.name = "arms";
    arms.translateZ(8);
    arms.translateY(-6);
    arms.translateX(-9);
    arms.scale.set(0.5, 0.5, 0.5);
    body1.add(arms);

    //
    let arms2 = await createArmsMesh2();
    arms2.name = "arms2";
    arms2.translateZ(8);
    arms2.translateY(-6);
    arms2.translateX(-9);
    arms2.scale.set(0.5, 0.5, 0.5);
    body1.add(arms2);

    //
    let rollers = await createRollersMesh();
    rollers.name = "rollers";

    rollers.translateX(-9);
    rollers.translateY(-5);
    rollers.translateZ(10.3);
    rollers.scale.set(0.5, 0.5, 0.66)
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



    let joiner = await creatRollerMesh1();
    joiner.name = "rollers";

    body1.add(joiner);



    body1.traverse(child => {
        child.castShadow = true;
        child.receiveShadow = true;
    });
    return body1;
}



