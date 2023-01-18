import Inventory from "../../domain/entity/Inventory";

export default class InventoryRepositoryMemory {
    inventories: Inventory[]

    constructor() {
        this.inventories = []
    }
}