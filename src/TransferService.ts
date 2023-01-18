import Item from "./Item";
import User from "./User";

export default class TransferService {
    transfer(from: User, to: User, item: Item) {
        from.credit(item.price)
        to.debit(item.price)
        from.inventory.deleteAnItem(item.id)
        to.inventory.addAnItem(item)
    }
}