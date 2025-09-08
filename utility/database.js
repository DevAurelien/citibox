import { pkg } from "pg";
const { Pool } = pkg;
import { USER_DB, PASS_DB, DB_NAME } from "./config.mjs";

const pool = new Pool({
  user: USER_DB,
  host: "localhost",
  database: DB_NAME,
  password: PASS_DB,
  port: 5432,
});

export async function query(text, params) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  return res;
}
