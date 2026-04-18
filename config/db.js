const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection Failed:", err);
    return;
  }

  console.log("✅ MySQL Connected");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      address VARCHAR(255),
      latitude FLOAT,
      longitude FLOAT
    )
  `;

  db.query(createTableQuery, (err) => {
    if (err) {
      console.error("❌ Table creation failed:", err);
    } else {
      console.log("✅ Table ready");
    }
  });
});

module.exports = db;