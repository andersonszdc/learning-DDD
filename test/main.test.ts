import ItemApplicationService from "../src/application/service/ItemApplicationService"
import MarketApplicationService from "../src/application/service/MarketApplicationService"
import UserApplicationService from "../src/application/service/UserApplicationService"
import CreditHandler from "../src/domain/handler/CreditHandler"
import SellHandler from "../src/domain/handler/SellHandler"
import Connection from "../src/infra/database/Connection"
import PostgreSQLAdapter from "../src/infra/database/PostgreSQLAdapter"
import Publisher from "../src/infra/queue/Publisher"
import ItemRepositoryMemory from "../src/infra/repository/ItemRepositoryMemory"
import MarketRepositoryMemory from "../src/infra/repository/MarketRepositoryMemory"
import UserRepositoryDatabase from "../src/infra/repository/UserRepositoryDatabase"

let connection: Connection
let marketService: MarketApplicationService
let userService: UserApplicationService
let itemService: ItemApplicationService

beforeEach(async () => {
    connection = new PostgreSQLAdapter()
    const publisher = new Publisher()
    const itemRepository = new ItemRepositoryMemory()
    const userRepository =  new UserRepositoryDatabase(connection)
    const marketRepository = new MarketRepositoryMemory()

    publisher.register(new CreditHandler(userRepository))
    publisher.register(new SellHandler(itemRepository, marketRepository))

    marketService = new MarketApplicationService(publisher)
    userService =  new UserApplicationService(publisher, userRepository)
    itemService = new ItemApplicationService(itemRepository)

    await userService.delete("a@gmail.com")
    await userService.delete("b@gmail.com")
})

test('criar um usuário', async () => {
    await userService.create("a@gmail.com")
    const user = await userService.get("a@gmail.com")
    expect(user.getBalance()).toBe(0)
    await connection.close()
})

test('adicionar um saldo à conta', async () => {
    userService.create("b@gmail.com")
    userService.credit("b@gmail.com", 1000)
    const user = await userService.get("b@gmail.com")
    expect(user.getBalance()).toBe(1000)
    await connection.close()
})