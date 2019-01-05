const express = require("express");
const path = require("path");
const googleAuth = require('google-oauth-jwt');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/rupert/token", function(req, res) {
  
googleAuth.authenticate({
  email: process.env.gcloud_email,
  key: process.env.gcloud_key,
  scopes: ['https://www.googleapis.com/auth/dialogflow']
}, function (err, token) {
  console.log(token);
  res.json(token);
});
  });
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
