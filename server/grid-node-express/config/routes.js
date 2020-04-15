const userController = require("../controllers/user");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/getAll", userController.getAll);
  app.get("/filter", userController.filterByDepartmentName);
  app.get("/delete", userController.deleteUser);
  app.get("/sort", userController.sortAllUsers);
};
