const Users = require("../controller/user");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  app.post("/api/users", Users.signUp);
  app.get("/api/users", Users.list);
};
