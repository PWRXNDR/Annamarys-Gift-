import assetStore from '../Utils/AssetStore.js'
import { appStateStore } from '../Utils/Store.js'

export default class Preloader {
    constructor() {
        this.assetStore = assetStore;

        // access to DOM elements
        this.overlay = document.querySelector('.overlay');
        this.loading = document.querySelector('.loading');
        this.startButton = document.querySelector('.start');

        this.assetStore.subscribe((state) => {
            this.numberOfLoadedAssets = Object.keys(state.loadedAssets).length;
            this.numberOfAssetsToLoad = state.assetsToLoad.length;
            this.progress = this.numberOfLoadedAssets / this.numberOfAssetsToLoad;
            this.progress = Math.trunc(this.progress * 100);
            document.getElementById('progressPercentage').innerHTML = `${this.progress}`;

            if (this.progress === 100) {
                appStateStore.setState({ assetsReady: true });
                this.loading.classList.add('fade');
                window.setTimeout(() => this.ready(), 1200);
            }
        });
    }

    ready() {
        this.loading.remove();
        this.startButton.style.display = 'inline';
        this.startButton.classList.add('fadeIn');

        this.startButton.addEventListener('click', () => {
            console.log('started');
            this.overlay.classList.add('fade');
            this.startButton.classList.add('fadeOut');
            this.showInstructions();

            window.setTimeout(() => {
                this.overlay.remove();
                this.startButton.remove();
            }, 2000);
        }, { once: true });
    }

    showInstructions() {
        const instructionDiv = document.getElementById('instruction');
        instructionDiv.innerHTML = "Use WASD or arrow keys to move around. Or use Joystick if you are on a mobile device."; // Customize your instructions here
        instructionDiv.style.display = 'block';
        setTimeout(() => {
            instructionDiv.style.opacity = 1; // Make it visible smoothly
        }, 10); // Delay to allow CSS to catch up with display change

        // Automatically hide the instructions after 5 seconds
        setTimeout(() => {
            instructionDiv.style.opacity = 0; // Fade out smoothly
            setTimeout(() => {
                instructionDiv.style.display = 'none'; // Hide after transition
            }, 1000); // Wait for the fade-out transition before setting display none
        }, 5000);

        // Hide when the user presses any key
        window.addEventListener('keydown', function handleFirstKeyPress() {
            instructionDiv.style.opacity = 0;
            setTimeout(() => {
                instructionDiv.style.display = 'none';
            }, 1000); // Wait for the fade-out transition
            window.removeEventListener('keydown', handleFirstKeyPress);
        });
    }
}