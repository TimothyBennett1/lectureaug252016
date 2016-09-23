const carCtrl = require('./userCtrl');

module.exports = app => {
  app.get("api/users", userCtrl.getUsers);
  app.post("api/users", userCtrl.postUser);
}
