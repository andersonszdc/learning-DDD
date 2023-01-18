import User from "../entity/User";

export default interface UserRepository {
    save(user: User): void;
    get(email: string): User;
    delete(email: string): void;
    update(email: string, data: any): void;
}