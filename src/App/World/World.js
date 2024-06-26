import * as THREE from "three";
import App from "../App.js";
import Physics from "./Physics.js";
import Environment from "./Environment.js";
import Character from "./Character.js";
import { appStateStore } from "../Utils/Store.js";

export default class World {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;

        this.physics = new Physics();

        // subscribe to app state changes
        appStateStore.subscribe((state) => {
            if (state.physicsReady) {
                this.environment = new Environment();
                this.character = new Character();
            }
        });

        this.loop();
    }

    loop(deltaTime, elapsedTime) {
        // physics loop
        this.physics.loop();
        // character loop
        if (this.character) this.character.loop();
    }
}
