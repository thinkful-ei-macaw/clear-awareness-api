BEGIN;
TRUNCATE 
"user",
"journal",
INSERT INTO "user" ("id", "username", "name", "password")
VALUES
  (
    1,
    'admin',
    'Dunder Mifflin Admin',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "journal" ("id","entry","tasks","mindful","sleep_hours","emotions","user_id")
VALUES(1,'example entry','example tasks',"example mindfulness",1,4,3);

END;
 