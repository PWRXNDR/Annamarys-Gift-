import * as THREE from "three";
import App from "../App.js";
import { inputStore } from "../Utils/Store.js";
import assetStore from "../Utils/AssetStore.js";

export default class Character {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.physics = this.app.world.physics;
        this.assetStore = assetStore.getState();
        this.avatar = this.assetStore.loadedAssets.avatar;

        inputStore.subscribe((state) => {
            this.forward = state.forward;
            this.backward = state.backward;
            this.left = state.left;
            this.right = state.right;
        });

        this.instantiateCharacter();
    }

    instantiateCharacter() {
        const geometry = new THREE.BoxGeometry(2, 5, 2);
        const material = new THREE.MeshStandardMaterial({
            color: 0x00ff00,
            wireframe: true,
            visible: false,
        });
        this.character = new THREE.Mesh(geometry, material);
        this.character.position.set(0, 4, 0);
        this.scene.add(this.character);

        if (this.avatar && this.avatar.scene) {
            const avatar = this.avatar.scene;
            avatar.rotation.y = Math.PI;
            avatar.position.y = -2.5;
            avatar.scale.setScalar(3);
            this.character.add(avatar);
        }

        this.rigidBodyType = this.physics.rapier.RigidBodyDesc.kinematicPositionBased();
        this.rigidBody = this.physics.world.createRigidBody(this.rigidBodyType);
        this.colliderType = this.physics.rapier.ColliderDesc.cuboid(1, 2.5, 1);
        this.collider = this.physics.world.createCollider(this.colliderType, this.rigidBody);
        const worldPosition = this.character.getWorldPosition(new THREE.Vector3());
        const worldRotation = this.character.getWorldQuaternion(new THREE.Quaternion());
        this.rigidBody.setTranslation(worldPosition);
        this.rigidBody.setRotation(worldRotation);

        this.characterController = this.physics.world.createCharacterController(0.01);
        this.characterController.setApplyImpulsesToDynamicBodies(true);
        this.characterController.enableAutostep(2, 0.1, false);
        this.characterController.enableSnapToGround(1);
    }

    loop() {
        const movement = new THREE.Vector3();
        const speed = 0.1;
        if (this.forward) movement.z += 1;
        if (this.backward) movement.z -= 1;
        if (this.left) movement.x += 1;
        if (this.right) movement.x -= 1;

        movement.y = 0; // Do not change vertical position based on the camera

        const direction = new THREE.Vector3();
        this.app.camera.instance.getWorldDirection(direction);
        direction.y = 0; // Ignore the pitch of the camera, only consider the yaw
        direction.normalize();

        const right = new THREE.Vector3().crossVectors(this.app.camera.instance.up, direction);

        const adjustedMovement = new THREE.Vector3(
            movement.x * right.x + movement.z * direction.x,
            0, // Ensure the movement is strictly horizontal
            movement.x * right.z + movement.z * direction.z
        ).normalize().multiplyScalar(speed);

        this.characterController.computeColliderMovement(this.collider, adjustedMovement);
        const newPosition = new THREE.Vector3()
            .copy(this.rigidBody.translation())
            .add(this.characterController.computedMovement());
        this.rigidBody.setNextKinematicTranslation(newPosition);
        this.character.position.copy(newPosition);
    }
}