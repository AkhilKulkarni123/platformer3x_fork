import GameEnv from './GameEnv.js';
import Background from './Background.js';

export class BackgroundPlayers extends Background  {
    constructor(canvas, image, data) {
        super(canvas, image, data);

        this.parallaxSpeed = -3; 
    }

    // speed is used to background parallax behavior
    update() {
        this.speed = this.parallaxSpeed;
        super.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        super.draw();
    }

}

export default BackgroundPlayers;