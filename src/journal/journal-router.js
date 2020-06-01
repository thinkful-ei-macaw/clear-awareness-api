const express = require("express");
const path = require("path");
const JournalService = require("./journal-service");
const { requireAuth } = require("../middleware/jwt-auth");

const journalRouter = express.Router();
const jsonBodyParser = express.json();

journalRouter
  .route("/")
  .get(requireAuth, (req, res, next) => {
    try {
      JournalService.getAllJournals(req.app.get("db"), req.user.id).then(
        (journals) => {
          res.json(journals.map(JournalService.serializeJournal));
        }
      );
    } catch (error) {
      next(error);
    }
  })
  .post(requireAuth, jsonBodyParser, (req, res, next) => {
    const user_id = req.user.id;
    const { entry, tasks, emotion, mindful } = req.body;
    JournalService.insert(req.app.get("db"), user_id, {
      user_id,
      entry,
      tasks,
      mindful,
      emotion,
    }).then((journal) => {
      res.status(201).json(journal);
    });
  });
journalRouter
  .route("/:journalId")
  .all(requireAuth)
  .get((req, res) => {
    res.json(JournalService.serializeJournal(res.journal));
  });
journalRouter.route("/:journalId").delete((req, res, next) => {
  JournalService.delete(req.app.get("db"), req.params.journalId)
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
})
  .patch(jsonBodyParser, (req,res,next)=>{
    const knexInstance = req.app.get('db');
    const user_id = req.user.id
    const {entry,tasks,emotions, mindful} = req.body;
    const updatedJournal={entry,tasks,emotions,mindful};
    const numValues = Object.values(updatedJournal).filter(Boolean).length;
    if(numValues===0){
      return res.status(400).json({
        error: {
          message: `Request body must contain 'entry', 'tasks', 'mindful', or 'emotions'`
        }
      });
    }
    JournalService.update(knexInstance,date, {entry,tasks,mindful,emotions}, user_id)
    .then(numValues=>{
      res.status(204).end();
    })
    .catch(next);

  
  })



module.exports = journalRouter;
