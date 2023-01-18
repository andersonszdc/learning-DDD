import ItemBuilder from "../builder/ItemBuilder"
import UserBuilder from "../builder/UserBuilder"
import Item from "./Item"

export default class User {
    email: string
    private balance: number | undefined
    private items: Item[]

    constructor (userBuilder: UserBuilder) {
        this.email = userBuilder.email
        this.balance = userBuilder.balance
        this.items = []
    }

    credit(amount: number) {
        if (!this.balance) {
            throw new Error("balance is undefined")
        }

        this.balance += amount
    }

    debit(amount: number) {
        if (!this.balance) {
            throw new Error("balance is undefined")
        }

        this.balance -= amount
    }

    getBalance() {
        return this.balance
    }

    getItems() {
        return this.items
    }

    addItem(item: Item) {
        this.items.push(item)
    }

    removeItem(itemId: string) {
        const item = this.items.findIndex((item) => item.id = itemId)
        this.items.splice(item, 1)
    }
}