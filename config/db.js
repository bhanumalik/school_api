db.connect(err => {
  if (err) {
    console.error("❌ DB Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected");

    // 🔥 AUTO CREATE TABLE
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
  }
});