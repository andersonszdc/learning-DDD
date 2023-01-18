import Inventory from "./Inventory";

export default interface InventoryRepository {
    get(inventoryId: string): Inventory;
    save(inventory: Inventory): void;
    delete(inventoryId: string): void;
    update(inventoryId: string, data: any): void;
}