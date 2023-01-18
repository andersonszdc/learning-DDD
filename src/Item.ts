import { Rarity } from "./types"

export default class Item {
    id: string
    name: string
    float: number
    rarity: Rarity

    constructor (id: string, name: string, float: number, rarity: Rarity) {
        this.id = id
        this.name = name
        this.float = float
        this.rarity = rarity
    }

    getQuality() {
        if (this.float >= 0 && this.float <= 0.07) {
            return 'Factory New'
        } else if (this.float > 0.07 && this.float <= 0.15) {
            return 'Minimal Wear'
        } else if (this.float > 0.15 && this.float <= 0.38) {
            return 'Field-Tested'
        } else if (this.float > 0.38 && this.float <= 0.45) {
            return 'Well-Worn'
        } else if (this.float > 0.45 && this.float <= 1) {
            return 'Battle-Scarred'
        }
    }
}