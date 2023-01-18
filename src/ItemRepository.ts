import Item from "./Item";

export default interface ItemRepository {
    save(item: Item): void;
    get(itemId: string): Item;
    delete(itemId: string): void;
}