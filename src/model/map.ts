import type { BiomeType } from '../types/biome.d';
import type { TilePair } from '../types/map.d';
import type { SpawnConfig } from '../types/spawn.d';
import type { BaseTileConfig } from '../types/tile.d';
import { weightedRandom, weightedRandomN } from '../util/random';
import { biomeMap } from './biome';

export class Map {

    biome: BiomeType;
    width: number;
    height: number;
    size: number;

    terrainLayer: BaseTileConfig[] = [];
    spawnLayer: SpawnConfig[] = [];

    constructor(biome: BiomeType, width: number, height: number) {
        this.biome = biome;
        this.width = width;
        this.height = height;
        this.size = width * height;

        this.generateMapLayers();
    }

    getTilePair(index: number): TilePair {
        return {
            base: this.terrainLayer[index],
            spawn: this.spawnLayer[index]
        }
    }

    private generateMapLayers(): void {
        const biomeConfig = biomeMap[this.biome].config;
        this.terrainLayer = weightedRandomN(biomeConfig, this.size);

        this.terrainLayer.forEach((tile) => {
            const spawnables = tile.spawnables;
            const select = weightedRandom(spawnables);
            this.spawnLayer.push(select);
        });
    }

}