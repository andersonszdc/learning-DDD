import { ItemStatus, Rarity } from "../../types"
import ItemBuilder from "../builder/ItemBuilder"

export default class Item {
    id: string
    private name: string | undefined
    private float: number | undefined
    private rarity: Rarity | undefined
    private price: number | undefined
    private status: ItemStatus | undefined

    constructor (itemBuilder: ItemBuilder) {
        this.id = itemBuilder.id
        this.name = itemBuilder.name
        this.float = itemBuilder.float
        this.rarity = itemBuilder.rarity
        this.price = itemBuilder.price
        this.status = itemBuilder.status
    }

    getQuality() {
        if (!this.float) {
            throw new Error('Item without float')
        }

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

    putUpForSale() {
        this.status = "for sale"
    }
}