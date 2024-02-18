import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
const { PG_USERNAME, PG_PASSWORD } = process.env;
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: PG_USERNAME,
    password: PG_PASSWORD,
    database: "WeCode",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map