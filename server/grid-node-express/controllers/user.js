const MOCK = require("../database/MOCK_DATA");

function getAll(req, res) {
  res.send(MOCK.MOCK);
}

module.exports = {
  getAll,
};
