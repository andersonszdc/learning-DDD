import Inventory from "./Inventory"

export default class User {
    id: string
    email: string
    balance: number

    constructor (id: string, email: string, balance: number, readonly inventory: Inventory) {
        this.id = id
        this.email = email
        this.balance = balance
    }

    credit(amount: number) {
        this.balance += amount
    }

    debit(amount: number) {
        this.balance -= amount
    }

    getBalance() {
        return this.balance
    }
}