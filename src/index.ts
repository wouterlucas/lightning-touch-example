/**
 * Main entry point for the application.
 */

// set css
import styling from './utils/styling'
import { App } from './App'

// apply CSS styling
styling();

const options = {
    stage: {
        w: 800,
        h: 480,
        clearColor: 0xFF000000,
        canvas2d: false,
        useImageWorker: true,
        pauseRafLoopOnIdle: true,
    },
    debug: false,
}

const app = new App(options);
document.body.appendChild(app.stage.getCanvas());
