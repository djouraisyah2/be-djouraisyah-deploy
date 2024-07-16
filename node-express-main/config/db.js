import "dotenv/config";
import mariadb from "mariadb";
import { Sequelize } from "sequelize";

export const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool
  .getConnection()
  .then(() => {
    console.log("Successfully connected to the database.");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

export const dbConnection = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  define: {
    timestamps: false
  }
});
