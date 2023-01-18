import SaleCommand from "../../application/command/SellCommand";
import Observer from "../../infra/queue/Observer";
import ItemRepository from "../repository/ItemRepository";
import MarketRepository from "../repository/MarketRepository";

export default class SellHandler implements Observer {
    operation = "sale";

    constructor (readonly itemRepository: ItemRepository, readonly marketRepository: MarketRepository) {}

    notify(command: SaleCommand): void {
        const item = this.itemRepository.get(command.itemId)
        if (item) {
            this.marketRepository.save(item)
            item.putUpForSale()
        }
    }
}