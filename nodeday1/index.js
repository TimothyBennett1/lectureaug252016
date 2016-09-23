const express = require("express");
const {json} = require('body-parser');
const app = express();
const port = 4000;
app.use(json())
// $http.get("localhost:8080/api/data")
const movies = [
    {
        title: "The English Patient"
        , rating: 1
        , _id: 0
    }
    , {
        title: "Baby Geniuses 2"
        , rating: -1
        , _id: 1
    }
    , {
        title: "Home Alone"
        , rating: 3.5
        , _id: 2
    }
    , {
        title: "The Shining"
        , rating: 4
        , _id: 3
    }
];
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.post("/api/movies", (req, res) => {
  req.body.movie._id = movies.length;
  movies.push(req.body.movie);
  res.json(movies);
});

app.put("/api/movies", (req, res) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i]._id === req.body._id) {
      movies[i].rating = req.body.newRating;
      return res.status(200).json(movies)
    }
  }
  return res.status(404).json({"error": "Movie not found"})
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
