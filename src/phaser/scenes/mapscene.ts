import Phaser from 'phaser';
import { generationConfig } from '../../config/generation';
import { Map as GameMap } from '../../model/map';
import { SpawnConfig, SpawnTile } from '../../types/spawn.d';
import { BaseTile, BaseTileConfig } from '../../types/tile.d';
import { Tile } from '../entities/tile';

export class MapScene extends Phaser.Scene {

    constructor() {
        super({ key: 'MapScene' });
    }

    create(): void {
        let mapData = new GameMap(
            generationConfig.mapBiome,
            generationConfig.mapWidth,
            generationConfig.mapHeight 
        );

        this.renderMap(mapData);
    }

    private renderMap(map: GameMap) {
        for(let i = 0; i < map.size; i++) {
            const {base, spawn} = map.getTilePair(i);

            const worldX = (i % map.width) * generationConfig.tileWidth;
            const worldY = Math.floor(i / map.height) * generationConfig.tileHeight;

            /* Delay, for extra fun! */
            setTimeout(() => this.renderBaseTile(base, worldX, worldY), i * 2);
            setTimeout(() => this.renderSpawnTile(spawn, worldX, worldY), i * 2.2);
        }
    }

    private renderBaseTile(baseTile: BaseTileConfig, x: number, y: number) {
        new Tile(
            this,
            baseTile.base,
            BaseTile[baseTile.base],
            x,
            y,
            generationConfig.mapScale
        );
    }

    private renderSpawnTile(spawnTile: SpawnConfig, x: number, y: number) {
        if(spawnTile.spawn !== SpawnTile.Nothing) {
            new Tile(
                this,
                spawnTile.spawn,
                SpawnTile[spawnTile.spawn],
                x,
                y,
                generationConfig.mapScale
            );
        }
    }

}