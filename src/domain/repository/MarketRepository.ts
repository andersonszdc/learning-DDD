import Item from "../entity/Item";

export default interface MarketRepository {
    save(item: Item): void;
    get(itemId: string): Item;
    delete(itemId: string): void;
    update(itemId: string, data: any): void;
}