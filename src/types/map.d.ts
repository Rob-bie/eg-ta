import { SpawnConfig } from './spawn.d';
import { BaseTileConfig } from './tile.d';

export interface TilePair {
    base: BaseTileConfig,
    spawn: SpawnConfig
}