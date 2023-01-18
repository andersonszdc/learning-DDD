import User from "../entity/User";

export default interface UserRepository {
    save(user: User): Promise<void>;
    get(email: string): Promise<User>;
    delete(email: string): Promise<void>;
    update(email: string, data: any): Promise<void>;
}