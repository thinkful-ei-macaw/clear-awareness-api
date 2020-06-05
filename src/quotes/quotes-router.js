const express = require('express')
const uuid = require('uuid/v4')
const  quotes  = require('../store')

const quotesRouter = express.Router()
const bodyParser = express.json();

quotesRouter
  .route("/")
  .get(bodyParser, (req, res) => {
        res.json({quotations: quotes.quotes});
    }
  )

  
module.exports = quotesRouter
