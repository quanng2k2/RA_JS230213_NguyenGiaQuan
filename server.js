const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
var bodyParser = require("body-parser");
const userRouter = require("./router/usersPoint.routes");

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/api/v1/db", userRouter);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/score", function (req, res) {
  res.sendFile(__dirname + "/public/html/scoreKeeper.html");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
