const xss = require("xss");

const JournalService = {
  getAllJournals(db, user_id) {
    return db
      .from("journal")
      .select(
        "journal.id",
        "journal.entry",
        "journal.tasks",
        "journal.emotions",
        "journal.mindful",
        "journal.date_created",
        "journal.sleep_hours"
      )
      .where("journal.user_id", user_id);
  },

  getSpecificJournal(db, journalDate, user_id) {
    return db
      .from("journal")
      .select(
        "journal.id",
        "journal.entry",
        "journal.tasks",
        "journal.emotions",
        "journal.mindful",
        "journal.date_created",
        "journal.sleep_hours"
      )
      .where({
        "journal.user_id": user_id,
        "journal.date_created": journalDate,
      });
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
      mindful: journal.mindful,
      emotions: journal.emotions,
      date_created: journal.date_created,
      sleep_hours: journal.sleep_hours,
    };
  },
  delete(knex, id) {
    return knex.from("journal").where("id", id).delete();
  },
  update(knex, data, id) {
    return (
      knex("journal")
        .where("id", id)
        // .where("jounral.user_id", user_id)
        // .where("date_created", date)
        .update(data)
    );
  },
};

module.exports = JournalService;
