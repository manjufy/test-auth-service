import { Connection, createConnection } from 'typeorm';
import { User } from '../app/entities/User';

export async function getDbConnection(): Promise<Connection> {

    const entities: any = [
        User,
    ];

    const dbConn = await createConnection({
        type: "sqlite",
        database: "data/auth.sqlite",
        entities,
        logging: true,
        synchronize: true // FIXME: Do not use this in production
    })

    return dbConn;
}