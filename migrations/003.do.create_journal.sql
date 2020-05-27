CREATE TABLE "journal" (
    "id" SERIAL PRIMARY KEY,
    "entry" text NOT NULL,
    "tasks" text NOT NULL,
    "emotion" NUMERIC,
    "user_id" INTEGER REFERENCES "user_table" (id) ON DELETE CASCADE NOT NULL,
    "date_created" TIMESTAMPTZ DEFAULT Now()
)