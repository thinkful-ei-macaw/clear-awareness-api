CREATE TABLE "journal" (
    "id" SERIAL PRIMARY KEY,
    "entry" text NOT NULL,
    "tasks" text ARRAY NOT NULL,
    "mindful" text NOT NULL,
    "sleep_hours" INTEGER, 
    "emotions" NUMERIC,
    "user_id" INTEGER REFERENCES "user" (id) ON DELETE CASCADE NOT NULL,
    "date_created" text NOT NULL
)