import Sequelize from "sequelize";
import { config } from "dotenv";

config();

export const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI, {
  dialect: "postgres",
});
