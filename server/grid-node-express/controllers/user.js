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

function sortAllUsers(req, res) {
  const { attribute } = req.query;
  models.userModel.find({}).then((users) => {
    const mappedUsers = mapUsers(users);
    if (attribute === "id") {
      mappedUsers.sort((a, b) => {
        return a.id - b.id;
      });
    } else {
      mappedUsers.sort(function (a, b) {
        if (a[attribute] < b[attribute]) {
          return -1;
        }
        if (a[attribute] > b[attribute]) {
          return 1;
        }
        return 0;
      });
    }

    res.send(mappedUsers);
  });
}

module.exports = {
  getAll,
  filterByDepartmentName,
  deleteUser,
  sortAllUsers,
};
