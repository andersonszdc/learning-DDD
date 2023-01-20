import { Operation } from "../../types";
import Command from "./Command";

export default class DebitCommand implements Command {
    operation: Operation = "debit"

    constructor (readonly email: string, readonly amount: number) {}
}