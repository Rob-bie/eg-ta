import Phaser from 'phaser';
import { SpawnTile } from '../../types/spawn.d';
import { BaseTile } from '../../types/tile.d';

export class LoaderScene extends Phaser.Scene {

    constructor() {
        super({ key: 'LoaderScene' });
    }

    preload(): void {
        this.loadTilesOfType(SpawnTile);
        this.loadTilesOfType(BaseTile)
    }

    create(): void {
        this.scene.start('MapScene');
    }

    loadTilesOfType(tiles: object): void {
        for(const tile in tiles) {
            const isTile = isNaN(parseInt(tile));
            if(isTile) {
                const key = tile.toLowerCase();
                this.load.image(key, `assets/tiles/${key}.png`);
            }
        }
    }



}