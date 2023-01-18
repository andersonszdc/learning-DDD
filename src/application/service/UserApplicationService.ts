import UserBuilder from "../../domain/builder/UserBuilder";
import UserRepository from "../../domain/repository/UserRepository";
import Publisher from "../../infra/queue/Publisher";
import CreditCommand from "../command/CreditCommand";

export default class UserApplicationService {
    constructor(readonly publisher: Publisher, readonly userRepository: UserRepository) {}

    create(email: string) {
        const user = new UserBuilder(email).build()
        this.userRepository.save(user)
    }

    get(email: string) {
        const user = this.userRepository.get(email)
        return user
    }

    credit(email: string, amount: number) {
        const creditCommand = new CreditCommand(email, amount)
        this.publisher.publish(creditCommand)
    }
}