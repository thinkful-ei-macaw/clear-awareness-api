const express = require("express");
const path = require("path");
const JournalService = require("./journal-service");
const { requireAuth } = require("../middleware/jwt-auth");

const journalRouter = express.Router();
const jsonBodyParser = express.json();

journalRouter
  .route('/')
  .get((req,res,next)=>{
      JournalService.getAllJournals(req.app.get('db'))
      .then(journals=>{
          res.json(journals.map(JournalService.serializeJournal))
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req,res,next)=> {
      const {entry,tasks,emotion}=req.body;
      JournalService.insert(
          req.app.get('db'),
          {entry,tasks,emotion}
      )
      .then(journal => {
          res.status(201).json(journal)
      })
  })
  journalRouter
    .route('/:journalId')
    .all(requireAuth)
    .get((req,res)=>{
        res.json(JournalService.serializeJournal(res.journal))
    })
  journalRouter
    .route('/:journalId')
    .delete((req,res,next) => {
        JournalService.delete(req.app.get('db'), req.params.journalId)
          .then(()=>{
              res.status(204).end();
          })
          .catch(next);
    })

module.exports=journalRouter;