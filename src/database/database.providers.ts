import * as dotenv from "dotenv";
import { createConnection } from "mongoose";

dotenv.config();

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: () => createConnection(`${process.env.DATABASE_URL}`),
  },
];
