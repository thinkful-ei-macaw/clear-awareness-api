const knex = require("knex");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function makeKnexInstance() {
  return knex({
    client: "pg",
    connection: process.env.DATABASE_URL,
  });
}

function makeUsersArray() {
  return [
    {
      id: 1,
      username: "test-user-1",
      name: "Test user 1",
      password: "password",
    },
    {
      id: 2,
      username: "test-user-2",
      name: "Test user 2",
      password: "password",
    },
  ];
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.username,
    algorithm: "HS256",
  });
  return `Bearer ${token}`;
}

function cleanTables(db) {
  return db.transaction((trx) =>
    trx
      .raw(
        `TRUNCATE
        "sleep",
        "journal",
        "user"`
      )
      .then(() =>
        Promise.all([
          trx.raw(`ALTER SEQUENCE user_id_seq minvalue 0 START WITH 1`),
          trx.raw(`SELECT setval('user_id_seq', 0)`),
        ])
      )
  );
}

function seedUsers(db, users) {
  const preppedUsers = users.map((user) => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1),
  }));
  return db.transaction(async (trx) => {
    await trx.into("user").insert(preppedUsers);

    await trx.raw(`SELECT setval('user_id_seq', ?)`, [
      users[users.length - 1].id,
    ]);
  });
}

module.exports = {
  makeKnexInstance,
  makeUsersArray,
  makeAuthHeader,
  cleanTables,
  seedUsers,
};
