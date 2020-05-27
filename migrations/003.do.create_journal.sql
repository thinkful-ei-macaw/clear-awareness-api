CREATE TABLE "journal" (
    "id" SERIAL PRIMARY KEY,
    "entry" text NOT NULL,
    "tasks" NUMERIC,
    "emotion" NUMERIC,
    "user_id" INTEGER REFERENCES "user" (id) ON DELETE CASCADE NOT NULL,
    "date_created" TIMESTAMPTZ DEFAULT Now(),
)