import User from "./User"

export default class UserRepositoryMemory {
    users: User[]

    constructor() {
        this.users = []
    }

    save(user: User) {
        this.users.push(user)
    }

    get(userId: string) {
        const user = this.users.find((user) => user.id === userId)
        if (!user) throw new Error('User not found')
        return user
    }

    delete(userId: string) {
        const userIndex = this.users.findIndex((user) => user.id === userId)
        this.users.splice(userIndex, 1)
    }

    update(userId: string, data: any) {
        throw new Error('Method not implemented')
    }
}