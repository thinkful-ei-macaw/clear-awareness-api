const express = require('express')
const uuid = require('uuid/v4')
const  quotes  = require('../store')
// const { requireAuth } = require("../middleware/jwt-auth");

const quotesRouter = express.Router()
const bodyParser = express.json();

quotesRouter
  .route("/")
  .get(bodyParser, (req, res) => {
        res.json({quotations: quotes.quotes});
    }
  )
// quotesRouter
//   .route('/quotes/:quotes_id')
//   .get((req,res)=>{
//       const {quote_id} = req.params
    
//       const
//   })

module.exports = quotesRouter
