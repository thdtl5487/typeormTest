import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Userlist } from "./entity/userlist"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "system1234",
    database: "pgprac",
    synchronize: true,
    logging: false,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [
        "src/migration/**/*.ts"
    ],
    subscribers: [
        "src/subscriber/**/*.ts"
    ],
})
