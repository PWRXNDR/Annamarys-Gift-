import * as THREE from "three";
import App from "../App.js";
import assetStore from "../Utils/AssetStore.js";
import Portal from "./Portal.js";
import ModalContentProvider from "../UI/ModalContentProvider.js";

export default class Environment {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.physics = this.app.world.physics;
    this.pane = this.app.gui.pane;

    this.assetStore = assetStore.getState()
    this.environment = this.assetStore.loadedAssets.environment

    this.loadEnvironment();
    this.addLights();
    this.addPortals()
  }

  loadEnvironment() {
    // load environment here
    const environmentScene = this.environment.scene;
    this.scene.add(environmentScene);
    this.scene.background = new THREE.Color(0xabcdef); // Hex color code

    environmentScene.position.set(0, 0, 0)
    environmentScene.rotation.set(0, 0, 0)
    environmentScene.scale.setScalar(1.4)

    const physicalObjects = [
      'floor',
      'walls',
      'stairs',
      'bedroom-ceiling'
    ]

    const shadowCasters = [
      'parallel bars'
    ]

    const shadowReceivers = ['floor'
    ]

    for (const child of environmentScene.children) {
      child.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = shadowCasters.some((keyword) => child.name.includes(keyword))
          obj.receiveShadow = shadowReceivers.some((keyword) => child.name.includes(keyword))
          if (physicalObjects.some((keyword) => child.name.includes(keyword))) {
            this.physics.add(obj, "fixed", "cuboid")
          }
        }
      })
    }
  }


  addLights() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Full intensity
      this.scene.add(ambientLight);

      // Optional: Reduce or remove directional light if it's causing unwanted shadows
      // If directional light is necessary, consider reducing its intensity or adjusting its position
      this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Reduced intensity
      this.directionalLight.position.set(1, 1, 1);
      this.directionalLight.castShadow = false; // Disable casting shadows
      this.scene.add(this.directionalLight);
  }

  addPortals() {

    const portalMesh1 = this.environment.scene.getObjectByName('portals')
    const portalMesh2 = this.environment.scene.getObjectByName('portals001')
    const portalMesh3 = this.environment.scene.getObjectByName('portals002')
    const portalMesh4 = this.environment.scene.getObjectByName('portals003')
    const portalMesh5 = this.environment.scene.getObjectByName('portals004')
    const portalMesh6 = this.environment.scene.getObjectByName('portals005')

    const modalContentProvider = new ModalContentProvider()


    this.portal1 = new Portal(portalMesh1, modalContentProvider.getModalInfo('aboutMe'))
    this.portal2 = new Portal(portalMesh2, modalContentProvider.getModalInfo('projects'))
    this.portal3 = new Portal(portalMesh3, modalContentProvider.getModalInfo('certs'))
    this.portal4 = new Portal(portalMesh4, modalContentProvider.getModalInfo('Calisthenics'))
    this.portal5 = new Portal(portalMesh5, modalContentProvider.getModalInfo('XR'))
    this.portal6 = new Portal(portalMesh6, modalContentProvider.getModalInfo('Portfolio'))
  }

  loop() {
    this.portal1.loop()
    this.portal2.loop()
    this.portal3.loop()
    this.portal4.loop()
    this.portal5.loop()
    this.portal6.loop()
      }
  }

