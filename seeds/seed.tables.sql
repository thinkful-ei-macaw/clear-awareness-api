BEGIN;
TRUNCATE "user";
INSERT INTO "user" ("id", "username", "name", "password")
VALUES
  (
    1,
    'admin',
    'Dunder Mifflin Admin',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "JOURNAL" ("id","entry","task", "user_id","emotion")
VALUES(1,'example',{example: 'example'}, 1,4)
 