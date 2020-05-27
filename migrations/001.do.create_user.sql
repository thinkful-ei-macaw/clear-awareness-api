CREATE TABLE "user_table" (
  "id" SERIAL PRIMARY KEY,
  "username" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "name" TEXT NOT NULL
);
