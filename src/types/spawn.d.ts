export enum SpawnTile {
    Rock,
    Flower,
    Crop,
    Bush,
    Mushroom,
    Pebble,
    Stump,
    Nothing
}

export interface SpawnConfig {
    spawn: SpawnTile,
    weight: number
}