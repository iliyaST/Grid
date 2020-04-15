const models = require("../models");

function mapUsers(users) {
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
  return mappedUsers;
}

function getAll(req, res) {
  models.userModel.find({}).then((users) => {
    const mappedUsers = mapUsers(users);
    res.send(mappedUsers);
  });
}

function filterByDepartmentName(req, res) {
  const { department } = req.query;
  models.userModel.find({ department }).then((users) => {
    const mappedUsers = mapUsers(users);
    res.send(mappedUsers);
  });
}

function deleteUser(req, res) {
  const { id } = req.query;
  models.userModel.deleteOne({ id }).then((user) => {
    res.send(user);
  });
}

module.exports = {
  getAll,
  filterByDepartmentName,
  deleteUser,
};
