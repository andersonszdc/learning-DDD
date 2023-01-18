import User from "../../domain/entity/User"
import UserRepository from "../../domain/repository/UserRepository"

export default class UserRepositoryMemory implements UserRepository {
    users: User[]

    constructor() {
        this.users = []
    }

    async save(user: User): Promise<void> {
        throw new Error('Method not implemented')
    }

    async get(email: string): Promise<User> {
        throw new Error('Method not implemented')
    }

    async delete(email: string): Promise<void> {
        throw new Error('Method not implemented')
    }

    async update(email: string, data: any): Promise<void> {
        throw new Error('Method not implemented')
    }
}