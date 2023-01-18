import { Operation } from "../../types";
import Command from "./Command";

export default class BuyCommand implements Command {
    operation: Operation = "purchase"

    constructor (readonly itemId: string) {}
}