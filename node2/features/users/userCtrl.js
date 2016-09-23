module.exports = {
  getUsers(req, res) {
    return res.status(200).json(users)
  },
  postUser(req, res) {
    users.push(req.body);
    return res.status(203).json(users);
  }
};

const users = [
  {
    name: "Tom Collins",
    age: 21,
    _id: 0
  },
  {
    name: "Richard Benning",
    age: 45,
    _id: 1
  },
  {
    name: "Holt Geiger",
    age: 36,
    _id: 2
  },
  {
    name: "Joseph Klein",
    age: 28,
    _id: 3
  }

];
