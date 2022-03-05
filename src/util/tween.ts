import type Phaser from 'phaser';

type Image = Phaser.GameObjects.Image;
type Scene = Phaser.Scene;

type Nothing = void;

export function fadeIn(scene: Scene, target: Image, duration: number): Promise<Nothing> {
    return new Promise((resolve) => {
        scene.tweens.add({
            targets: target,
            duration: duration,
            alpha: 1.0,
            onComplete: () => { resolve(); }
        });
    });
}

export function pulse(scene: Scene, target: Image, duration: number): Promise<Nothing> {
    return new Promise((resolve) => {
        scene.tweens.add({
            targets: target,
            duration: duration,
            scale: target.scaleX + 0.25,
            yoyo: true,
            onComplete: () => { resolve(); }
        });
    });
}