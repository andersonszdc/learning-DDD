import User from "../entity/User"

export default class UserBuilder {
    email: string
    balance: number | undefined

    constructor(email: string) {
        this.email = email
    }

    setBalance(amount: number) {
        this.balance = amount
    }

    build() {
        const user = new User(this)
        return user
    }
}