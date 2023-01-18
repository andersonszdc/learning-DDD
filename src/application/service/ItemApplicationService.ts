import ItemBuilder from "../../domain/builder/ItemBuilder"
import ItemRepository from "../../domain/repository/ItemRepository"

export default class ItemApplicationService {
    constructor (readonly itemRepository: ItemRepository) {}

    create() {
        const item = new ItemBuilder('0').build()
        this.itemRepository.save(item)
    }
}