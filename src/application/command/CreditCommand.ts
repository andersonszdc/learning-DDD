import { Operation } from "../../types";
import Command from "./Command";

export default class CreditCommand implements Command {
    operation: Operation = "credit"

    constructor (readonly email: string, readonly amount: number) {}
}