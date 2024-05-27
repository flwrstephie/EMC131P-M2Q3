import MainMenuScene from './scenes/menuScene.js';
import GameScene from './scenes/gameScene.js';
import GameOverScene from './scenes/gameOverScene.js';
import WinScene from './scenes/winScene.js';

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    scene: [MainMenuScene, GameScene, GameOverScene, WinScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 370 },
            debug: false
        }
    }
};

// Initializes the Game
let game = new Phaser.Game(config);

export default game;
