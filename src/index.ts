import Phaser from 'phaser';
import { LoaderScene } from './phaser/scenes/loaderscene';
import { MapScene } from './phaser/scenes/mapscene';

const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  parent: "Game",
  pixelArt: true,
  backgroundColor: 0xb73241,
  scene: [
    LoaderScene,
    MapScene
  ]
}

new Phaser.Game(config);