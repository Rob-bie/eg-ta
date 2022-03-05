interface Weighted {
    weight: number
};

export function weightedRandomN<T extends Weighted>(candidates: T[], n: number): T[] {
    let selection = [];
    for(let i = 0; i < n; i++) {
        let selected = weightedRandom(candidates);
        selection.push(selected);
    }
    return selection;
}

export function weightedRandom<T extends Weighted>(candidates: T[]): T {
    let sum = 0;
    
    candidates.forEach((c) => {
        sum += c.weight;
    });

    let rand = between(0, sum);
    for(let i = 0; i < candidates.length; i++) {
        if(rand <= candidates[i].weight) {
            return candidates[i];
        }
        rand -= candidates[i].weight;
    }

    /* If we get here something has gone horribly wrong! */
    return candidates[0];
}

function between(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}