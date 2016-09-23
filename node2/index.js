const express = require('express');
const {json} = require('body-parser');
const app = express();
const port = 4000;

function addTimeStamp(req, res, next) {
  console.log("addTimeStamp");
  req.body.timeStamp = new Date();
  next();
}

app.use(json());
app.use(addTimeStamp);


const carRoutes = require('./features/cars/carRoutes');
carRoutes(app);
const userRoutes = require('./features/users/userRoutes');
userRoutes(app);


app.listen(port, () => console.log(`Listening on ${port}`));
