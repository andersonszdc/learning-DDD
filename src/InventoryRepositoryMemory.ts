import Inventory from "./Inventory";

export default class InventoryRepositoryMemory {
    inventories: Inventory[]

    constructor() {
        this.inventories = []
    }
}