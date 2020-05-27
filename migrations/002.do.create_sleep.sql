CREATE TABLE "sleep"(
   "id" SERIAL PRIMARY KEY,
   "hours" NUMERIC,
   "user_id" INTEGER REFERENCES "user" (id) ON DELETE CASCADE NOT NULL,
   "date_created" TIMESTAMPTZ DEFAULT Now()
);