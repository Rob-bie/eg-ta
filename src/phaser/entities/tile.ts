import type Phaser from 'phaser';
import type { SpawnTile } from '../../types/spawn.d';
import type { BaseTile } from '../../types/tile.d';
import { fadeIn, pulse } from '../../util/tween';

type TileType = BaseTile | SpawnTile;

export class Tile {

    scene: Phaser.Scene;
    type: TileType;
    tileName: string;
    x: number;
    y: number;
    scale: number;

    constructor(scene: Phaser.Scene, type: TileType, tileName: string, x: number, y: number, scale: number = 1.0) {
        this.scene = scene;
        this.type = type;
        this.tileName = tileName;

        this.x = x * scale;
        this.y = y * scale;

        this.scale = scale;

        this.render();
    }

    private render(): void {
        const tile = this.scene.add.image(
            this.x,
            this.y,
            this.tileName.toLowerCase()
        )
        .setOrigin(0)
        .setAlpha(0)
        .setFlipX(Math.random() < 0.5)
        .setScale(this.scale);


        fadeIn(this.scene, tile, 500);
        pulse(this.scene, tile, 250);
    }

}