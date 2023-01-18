import UserBuilder from "../../domain/builder/UserBuilder"
import User from "../../domain/entity/User"
import UserRepository from "../../domain/repository/UserRepository"
import Connection from "../database/Connection"

export default class UserRepositoryDatabase implements UserRepository {

    constructor (readonly connection: Connection) {
    }

    async save(user: User): Promise<void> {
        await this.connection.query("INSERT INTO users (email) VALUES ($1)", [user.email])
    }

    async get(email: string): Promise<User> {
        const row = await this.connection.one("SELECT * FROM users WHERE email = $1", [email])
        const user = new UserBuilder(row.email)
        user.setBalance(+row.balance)
        return user.build()
    }

    async delete(email: string): Promise<void> {
        await this.connection.query("DELETE FROM users WHERE email = $1", [email])
    }

    async update(email: string, data: any): Promise<void> {
        await this.connection.query("UPDATE users SET balance = $1 WHERE email = $2", [data.amount, email])
    }
}