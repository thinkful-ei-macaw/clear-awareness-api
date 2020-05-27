BEGIN;
TRUNCATE 
"user_table",
"journal",
"sleep";
INSERT INTO "user_table" ("id", "username", "name", "password")
VALUES
  (
    1,
    'admin',
    'Dunder Mifflin Admin',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "journal" ("id","entry","tasks", "user_id","emotion")
VALUES(1,'example entry','example tasks', 1,4);

END;
 