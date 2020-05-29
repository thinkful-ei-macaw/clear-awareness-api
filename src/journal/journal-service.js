const xss = require("xss");

const JournalService = {
  getAllJournals(db, user_id) {
    return db
      .from("journal")
      .select("journal.entry", "journal.tasks", "journal.emotion")
      .where("journal.user_id", user_id);
  },
  insert(db, user_id, journal) {
    return db("journal")
      .insert(journal)
      .where("journal.user_id", user_id)
      .returning("id");
  },
  serializeJournal(journal) {
    return {
      id: journal.id,
      entry: journal.entry,
      tasks: journal.tasks,
      emotion: journal.emotion,
      date_created: new Date(journal.date_created),
    };
  },
  delete(knex, id) {
    return knex.from("journal").where("id", id).delete();
  },
};

module.exports = JournalService;
