import { BiomeType } from '../types/biome.d';
import { SpawnTile } from '../types/spawn.d';
import { BaseTile, BaseTileConfig } from '../types/tile.d';

class Biome {

    type: BiomeType;
    config: BaseTileConfig[]

    constructor(type: BiomeType, config: BaseTileConfig[]) {
        this.type = type;
        this.config = config;
    }

}

const forestBiome = new Biome(
    BiomeType.Forest,
    [
        {
            base: BaseTile.Grass,
            weight: 95,
            spawnables: [
                {spawn: SpawnTile.Bush, weight: 2},
                {spawn: SpawnTile.Flower, weight: 2},
                {spawn: SpawnTile.Mushroom, weight: 2},
                {spawn: SpawnTile.Stump, weight: 1},
                {spawn: SpawnTile.Rock, weight: 1},
                {spawn: SpawnTile.Nothing, weight: 92}
            ]
        },
        {
            base: BaseTile.Dirt,
            weight: 5,
            spawnables: [
                {spawn: SpawnTile.Rock, weight: 20},
                {spawn: SpawnTile.Nothing, weight: 80}
            ]
        }
    ]
);

const caveBiome = new Biome(
    BiomeType.Cave,
    [
        {
            base: BaseTile.Dirt,
            weight: 5,
            spawnables: [
                {spawn: SpawnTile.Rock, weight: 2},
                {spawn: SpawnTile.Pebble, weight: 2},
                {spawn: SpawnTile.Nothing, weight: 96}
            ]
        }
    ]
);

export const biomeMap: {[key in BiomeType]: Biome} = {
    [BiomeType.Forest]: forestBiome,
    [BiomeType.Cave]: caveBiome
}

