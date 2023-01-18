import Item from "./Item";

export default class Market {
    items: Item[]

    constructor() {
        this.items = []
    }

    addItem(item: Item) {
        this.items.push(item)
    }

    removeAnItem(itemId: string) {
        this.items.findIndex((item) => item.id = itemId)
    }
}