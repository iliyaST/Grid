const express = require("express");
const app = express();
const port = 8080;

const dbConnector = require("./config/db");

const dbUrl = "mongodb://localhost:27017";
const { MongoClient } = require("mongodb");
const client = new MongoClient(dbUrl);
const MOCK_DATA = require("./config/MOCK_DATA");
const models = require("./models");

client.connect(function (err, client) {
  if (err) {
    console.error(err);
    return;
  }

  models.userModel.find({}).then((users) => {
    if (users.length == 0) {
      MOCK_DATA.MOCK.forEach((user) => {
        models.userModel.create(user).then((createdUser) => {
          console.log(createdUser);
        });
      });
    }
  });
});

dbConnector()
  .then(() => {
    require("./config/routes")(app);

    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch(console.error);
