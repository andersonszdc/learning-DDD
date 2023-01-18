import Item from "../../domain/entity/Item"
import MarketRepository from "../../domain/repository/MarketRepository"

export default class MarketRepositoryMemory implements MarketRepository {
    items: Item[]

    constructor() {
        this.items = []
    }

    get(itemId: string) {
        const item = this.items.find(item => item.id = itemId)
        if (!item) throw new Error("Item not found")
        return item
    }

    save(item: Item) {
        this.items.push(item)
    }

    delete(itemId: string) {
        const indexToRemove = this.items.findIndex((item) => item.id = itemId)
        this.items.splice(indexToRemove, 1)
    }

    update(itemId: string, data: any): void {
        throw new Error("Method not implemented")
    }
}