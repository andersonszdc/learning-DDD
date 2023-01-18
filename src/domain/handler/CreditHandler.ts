import CreditCommand from "../../application/command/CreditCommand";
import Observer from "../../infra/queue/Observer";
import UserRepository from "../repository/UserRepository";

export default class CreditHandler implements Observer {
    operation = 'credit'

    constructor(readonly userRepository: UserRepository) {}

    notify(command: CreditCommand) {
        this.userRepository.update(command.email, {amount: command.amount})
    }
}