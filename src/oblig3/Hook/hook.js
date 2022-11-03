import * as THREE from "three";
import {CylinderGeometry} from "three";


export async function hookComplete() {

    const loader = new THREE.TextureLoader();
    const texture = await loader.loadAsync('../../assets/textures/metal1.jpg');
    const textureAluminium = await loader.loadAsync('../../assets/textures/aluminium.jpg');

    const material = new THREE.MeshPhongMaterial({map: texture});
    const materialAluminium = new THREE.MeshPhongMaterial({map: textureAluminium});


    const hookWhole = new THREE.Group();

    // block
    const hookBlock = new CylinderGeometry(30, 30, 20, 50, 1,false);
    const meshHookBlock = new THREE.Mesh(hookBlock, materialAluminium);
    meshHookBlock.castShadow = true;
    meshHookBlock.receiveShadow = true;
    meshHookBlock.position.x = 550;
    meshHookBlock.position.y = 500;
    meshHookBlock.position.z = 5;
    meshHookBlock.rotation.x = Math.PI/2;
    hookWhole.add(meshHookBlock);



    // hook
    class CustomSinCurve extends THREE.Curve {

        constructor( scale = 1 ) {

            super();

            this.scale = scale;

        }

        getPoint( t, optionalTarget = new THREE.Vector3() ) {

            const tx = t * 3 - 1.5;
            const ty = Math.sin( 2 * Math.PI * t );
            const tz = 0;

            return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

        }

    }



    const path = new CustomSinCurve( 30 );
    const hook = new THREE.TubeGeometry( path, 20, 3, 10, false );
    const meshHook = new THREE.Mesh(hook, material );
    meshHook.castShadow = true;
    meshHook.receiveShadow = true;
    meshHook.position.x = 10;
    meshHook.position.y = 0;
    meshHook.position.z = 30;
    meshHook.rotation.x = Math.PI/2.3;
    meshHook.rotation.z = Math.PI/1.2;
    meshHook.rotation.y = Math.PI/1;
    meshHookBlock.add(meshHook);


    return hookWhole;

}