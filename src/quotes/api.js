var unirest = require("unirest");

var req = unirest("GET", "https://healthruwords.p.rapidapi.com/v1/quotes/");

req.query({
	"id": "731",
	"t": "Wisdom",
	"maxR": "1",
	"size": "medium"
});

req.headers({
	"x-rapidapi-host": "healthruwords.p.rapidapi.com",
	"x-rapidapi-key": "8ddb04b860msh8d08fab8f699a18p1dbec2jsnff309772e6e5",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});