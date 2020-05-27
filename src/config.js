module.exports = {
PORT:process.env.PORT || 7000,
NODE_ENV: process.env.NODE_ENV || 'development',
DATABASE_URL:process.env.DATABASE_URL || "postgresql://dunder_mifflin:password@localhost/clear-awareness",
JWT_SECRET:process.env.JWT_SECRET || "encryption-words-and-stuff",
  }
