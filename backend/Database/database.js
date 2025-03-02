const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:root@fxvvrieqefxovspeveba.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to database:", res.rows);
  }
});
