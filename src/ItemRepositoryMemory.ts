import Item from "./Item"

export default class ItemRepositoryMemory implements ItemRepositoryMemory {
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
}