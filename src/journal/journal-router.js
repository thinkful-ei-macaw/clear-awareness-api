const express = require("express");
// const path = require("path");
const JournalService = require("./journal-service");
const { requireAuth } = require("../middleware/jwt-auth");

const journalRouter = express.Router();
const jsonBodyParser = express.json();

journalRouter
  .route("/")
  .get(requireAuth, jsonBodyParser, (req, res, next) => {
    console.log("this");
    try {
      JournalService.getSpecificJournal(
        req.app.get("db"),
        req.body.date_created,
        req.user.id
      )
        .then((journals) => {
          res.json(journals);
        })
        .catch((e) => {
          console.log(e);
          res.status(500).send();
        });
    } catch (error) {
      next(error);
    }
  })
  .post(requireAuth, jsonBodyParser, (req, res, next) => {
    const user_id = req.user.id;
    const {
      entry,
      tasks,
      emotions,
      mindful,
      date_created,
      sleep_hours,
    } = req.body;
    JournalService.insert(req.app.get("db"), user_id, {
      user_id,
      entry,
      tasks,
      date_created,
      mindful,
      emotions,
      sleep_hours,
    }).then((journal) => {
      res.status(201).json(journal);
    });
  });
journalRouter.route("/sleep").get((req, res, next) => {
  JournalService.getAllJournals(req.app.get("db"))
    .then((journals) => {
      res.json(journals.map(JournalService.serializeJournal));
    })
    .catch(next);
});
journalRouter
  .route("/:journalDate")
  .all(requireAuth)
  .get(requireAuth, (req, res) => {
    const date = req.params.journalDate;
    JournalService.getSpecificJournal(
      req.app.get("db"),
      date,
      req.user.id
    ).then((journal) => {
      console.log("journal", journal);
      //not guaranteed to return anything.. what if empty
      res.json(JournalService.serializeJournal(journal[0]));
    });
  });

journalRouter
  .route("/")
  .delete((req, res, next) => {
    JournalService.delete(req.app.get("db"), req.params.journalId)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const knexInstance = req.app.get("db");
    //const user_id = req.user.id;
    const { entry, tasks, emotions, mindful, id, sleep_hours } = req.body;
    const updatedJournal = { entry, tasks, emotions, mindful, sleep_hours };
    const numValues = Object.values(updatedJournal).filter(Boolean).length;
    if (numValues === 0) {
      return res.status(400).json({
        error: {
          message: `Request body must contain 'entry', 'tasks', 'mindful', or 'emotions'`,
        },
      });
    }
    JournalService.update(knexInstance, updatedJournal, id)
      .then((numValues) => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = journalRouter;
