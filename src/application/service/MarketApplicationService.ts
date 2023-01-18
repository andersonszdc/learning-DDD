import Publisher from "../../infra/queue/Publisher"
import SellCommand from "../command/SellCommand"

export default class MarketApplicationService {
    constructor (readonly publisher : Publisher) {}

    sell(itemId: string) {
        const sellCommand = new SellCommand(itemId)
        this.publisher.publish(sellCommand)
    }
}