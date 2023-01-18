import { ItemStatus, Rarity } from "../../types"
import Item from "../entity/Item"

export default class ItemBuilder {
    id: string
    name: string | undefined
    float: number | undefined
    rarity: Rarity | undefined
    price: number | undefined
    status: ItemStatus | undefined

    constructor (id: string) {
        this.id = id
    }

    setId(id: string) {
        this.id = id
    }

    setFloat(float: number) {
        this.float = float
    }

    setRarity(rarity: Rarity) {
        this.rarity = rarity
    }

    setPrice(price: number) {
        this.price = price
    }

    setStatus(status: ItemStatus) {
        this.status = status
    }

    build() {
        const item = new Item(this)
        return item
    }
}