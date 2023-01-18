import { Operation } from "../../types";
import Command from "./Command";

export default class SellCommand implements Command {
    operation: Operation = "sale"

    constructor (readonly itemId: string) {}
}