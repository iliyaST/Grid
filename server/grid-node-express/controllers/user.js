const models = require("../models");

function getAll(req, res) {
  models.userModel.find({}).then((users) => {
    const mappedUsers = users.map((u) => {
      return {
        id: u.id,
        first_name: u.first_name,
        last_name: u.last_name,
        email: u.email,
        job_title: u.job_title,
        department: u.department,
      };
    });

    res.send(mappedUsers);
  });
}

module.exports = {
  getAll,
};
