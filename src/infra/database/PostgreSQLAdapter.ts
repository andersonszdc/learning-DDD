import pgp from "pg-promise"
import pg from "pg-promise/typescript/pg-subset"
import Connection from "./Connection";

export default class PostgreSQLAdapter implements Connection {
    connection: pgp.IDatabase<{}, pg.IClient>

    constructor () {
        this.connection = pgp()("postgres://postgres:123456@localhost:5432")
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params)
    }

    one(statement: string, params: any): Promise<any> {
        return this.connection.one(statement, params)
    }

    close(): Promise<void> {
        return this.connection.$pool.end()
    }
}