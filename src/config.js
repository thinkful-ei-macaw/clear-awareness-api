module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgresql://dunder_mifflin:password@localhost/clearawareness",
  JWT_SECRET: process.env.JWT_SECRET || "encryption-words-and-stuff",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "3h",
};
