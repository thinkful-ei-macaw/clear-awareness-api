const path = require("path");
if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: path.resolve(process.cwd(), ".env.test") });
  console.log("omg");
} else {
  require("dotenv").config();
}

console.log(process.env.MIGRATION_DATABASE_NAME);
console.log(process.env.NODE_ENV);
module.exports = {
  migrationsDirectory: "migrations",
  driver: "pg",
  host: process.env.MIGRATION_DATABASE_HOST,
  port: process.env.MIGRATION_DATABASE_PORT,
  database: process.env.MIGRATION_DATABASE_NAME,
  username: process.env.MIGRATION_DATABASE_USER,
  password: process.env.MIGRATION_DATABASE_PASS,
};
