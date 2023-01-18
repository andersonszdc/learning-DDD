import ItemApplicationService from "../src/application/service/ItemApplicationService"
import MarketApplicationService from "../src/application/service/MarketApplicationService"
import UserApplicationService from "../src/application/service/UserApplicationService"
import CreditHandler from "../src/domain/handler/CreditHandler"
import SellHandler from "../src/domain/handler/SellHandler"
import Publisher from "../src/infra/queue/Publisher"
import ItemRepositoryMemory from "../src/infra/repository/ItemRepositoryMemory"
import MarketRepositoryMemory from "../src/infra/repository/MarketRepositoryMemory"
import UserRepositoryMemory from "../src/infra/repository/UserRepositoryMemory"

let marketService: MarketApplicationService
let userService: UserApplicationService
let itemService: ItemApplicationService

beforeEach(() => {
    const publisher = new Publisher()
    const itemRepository = new ItemRepositoryMemory()
    const userRepository =  new UserRepositoryMemory()
    const marketRepository = new MarketRepositoryMemory()

    publisher.register(new CreditHandler(userRepository))
    publisher.register(new SellHandler(itemRepository, marketRepository))

    marketService = new MarketApplicationService(publisher)
    userService =  new UserApplicationService(publisher, userRepository)
    itemService = new ItemApplicationService(itemRepository)
})

test('criar um usuário', () => {

    userService.create("anderson@gmail.com")
    const user = userService.get("anderson@gmail.com")
    expect(user.getBalance()).toBe(undefined)
})

test('adicionar um saldo à conta', () => {

    userService.create("anderson@gmail.com")
    const user = userService.get("anderson@gmail.com")
    expect(user.getBalance()).toBe(undefined)
})