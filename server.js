const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const Dogs = require('./models/dogs')

app.get('/', (req, res) => {
  res.send('hey it is connected')
});

app.get("/dogs", (req, res) => {
	res.render("./index.ejs", {
	dogs: Dogs
	});
});

app.get('/dogs/:id', (req, res) => {
  console.log(req.params, "<--req.params");
  console.log('dogs/:id')
  res.render("./show.ejs", {
    dogs: Dogs[req.params.id]
  });
})




app.listen(3000, () => {
  console.log('my server is listening for client requests on port 3000')
});