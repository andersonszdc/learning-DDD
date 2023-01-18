import User from "./User";

export default interface UserRepository {
    save(user: User): void;
    get(userId: string): User;
    delete(userId: string): void;
    update(userId: string, data: any): void;
}