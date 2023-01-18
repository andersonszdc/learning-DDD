import UserBuilder from "../../domain/builder/UserBuilder";
import UserRepository from "../../domain/repository/UserRepository";
import Publisher from "../../infra/queue/Publisher";
import CreditCommand from "../command/CreditCommand";

export default class UserApplicationService {
    constructor(readonly publisher: Publisher, readonly userRepository: UserRepository) {}

    async create(email: string) {
        const user = new UserBuilder(email).build()
        await this.userRepository.save(user)
    }

    async get(email: string) {
        const user = await this.userRepository.get(email)
        return user
    }

    credit(email: string, amount: number) {
        const creditCommand = new CreditCommand(email, amount)
        this.publisher.publish(creditCommand)
    }

    async delete(email: string) {
        await this.userRepository.delete(email)
    }
}