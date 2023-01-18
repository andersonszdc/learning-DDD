import Item from "./Item"
import ItemRepository from "./ItemRepository"

export default class Inventory {

    constructor(readonly items: Item[], readonly itemRepo: ItemRepository) {}

    addAnItem(item: Item) {
        this.itemRepo.save(item)
    }

    deleteAnItem(itemId: string) {
        this.itemRepo.delete(itemId)
    }
}