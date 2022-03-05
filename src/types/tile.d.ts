import { SpawnConfig } from './spawn.d';

export enum BaseTile {
    Grass,
    Dirt
}

export interface BaseTileConfig {
    base: BaseTile,
    weight: number,
    spawnables: SpawnConfig[]
}