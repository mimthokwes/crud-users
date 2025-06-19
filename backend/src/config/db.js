import mysql from "mysql2/promise";

let db;

export const connectDB = async () => {
  db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hamim123",
    port: 3306,
  });

  await db.query("CREATE DATABASE IF NOT EXISTS db_crud_project");
  await db.changeUser({ database: "db_crud_project" });

  const createTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        nim VARCHAR(255)  UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL
    );
    `;
  await db.query(createTable);
  console.log("✅Database and table created/used successfully");
};

export const getDB = () => db;
