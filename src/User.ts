export default class User {
    email: string
    balance: number

    constructor (email: string, balance: number) {
        this.email = email
        this.balance = balance
    }

    sellAnItem(amount: number) {
        this.balance += amount
    }

    buyAnItem(amount: number) {
        this.balance -= amount
    }

    getBalance() {
        return this.balance
    }
}