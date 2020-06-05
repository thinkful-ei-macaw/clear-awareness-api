const unirest = require("unirest");
const fetch = require("node-fetch");
const express = require('express');
// const { requireAuth } = require("../middleware/jwt-auth");

const apiRouter=express.Router();



apiRouter
  .route('/',(req,res)=>{
      unirest.get("https://healthruwords.p.rapidapi.com/v1/quotes")
      .headers({
        "x-rapidapi-host": "healthruwords.p.rapidapi.com",
        "x-rapidapi-key": config.API_KEY,
        "useQueryString": true
    })
      .query({
        "id": "731",
        "t": "Wisdom",
        "maxR": "1",
        "size": "medium"
    })
      .then((response)=>{
          console.log(response)
          res.json(response)
      })
  })

module.exports=apiRouter;
// const req = unirest("GET", "https://healthruwords.p.rapidapi.com/v1/quotes/");

// req.query({
// 	"id": "731",
// 	"t": "Wisdom",
// 	"maxR": "1",
// 	"size": "medium"
// });

// req.headers({
// 	"x-rapidapi-host": "healthruwords.p.rapidapi.com",
// 	"x-rapidapi-key": "8ddb04b860msh8d08fab8f699a18p1dbec2jsnff309772e6e5",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });

// fetch()