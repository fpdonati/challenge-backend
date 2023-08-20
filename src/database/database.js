import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "challenge",
  "challenge_user",
  "mypassword",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
