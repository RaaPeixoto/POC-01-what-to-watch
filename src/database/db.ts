
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.MODE === "prod"? true : false
  });
console.log(process.env.DATABASE_URL)
console.log("Connected database.");

export default connection;