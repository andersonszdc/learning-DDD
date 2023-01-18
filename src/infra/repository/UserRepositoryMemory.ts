import User from "../../domain/entity/User"
import UserRepository from "../../domain/repository/UserRepository"

export default class UserRepositoryMemory implements UserRepository {
    users: User[]

    constructor() {
        this.users = []
    }

    save(user: User) {
        this.users.push(user)
    }

    get(email: string) {
        const user = this.users.find((user) => user.email === email)
        if (!user) throw new Error('User not found')
        return user
    }

    delete(email: string) {
        const userIndex = this.users.findIndex((user) => user.email === email)
        this.users.splice(userIndex, 1)
    }

    update(email: string, data: any) {
        throw new Error('Method not implemented')
        // const user = this.users.find((user) => user.email === email)
    }
}