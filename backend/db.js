import mysql2 from "mysql2/promise";
// a digital solution to improve health care accessibility and awarness
let conn;

try {
  conn = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  });
  console.log(" MySQL connected");
} catch (err) {
  console.error(" MySQL connection failed:", err.message);
  process.exit(1);
}

export { conn };
