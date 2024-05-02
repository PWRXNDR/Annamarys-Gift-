import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { sizesStore } from './Utils/Store.js';
import App from './App.js';

export default class Camera {
    constructor() {
        this.app = new App();
        this.canvas = this.app.canvas;
        this.sizesStore = sizesStore;
        this.sizes = this.sizesStore.getState();

        this.setInstance();
        this.setControls();
        this.setResizeListener();
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            85,
            this.sizes.width / this.sizes.height,
            0.1,
            1000
        );
        this.instance.position.set(0, 1, 0); // Maintain a fixed height
    }

    setControls() {
        this.controls = new PointerLockControls(this.instance, this.canvas);
        this.canvas.addEventListener('click', () => {
            this.controls.lock();
        }, false);
    }

    setResizeListener() {
        this.sizesStore.subscribe((sizes) => {
            this.instance.aspect = sizes.width / this.sizes.height;
            this.instance.updateProjectionMatrix();
        });
    }

    loop() {
        const character = this.app.world.character?.character;
        if (character) {
            this.instance.position.copy(character.position.clone().add(new THREE.Vector3(0, 0.05, 0)));
        }
    }
}