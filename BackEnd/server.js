const express = require('express')
const app = express()
//Change of Port Number = BackEnd Server 
const port = 4000
//Addition of CORS - Cross-Origin-Request-Server
const cors = require('cors');
//Returns Data from the Server to the Client
const bodyParser = require("body-parser");
//Addition of Mongoose
const mongoose = require('mongoose');

//Allows Corss-Origin Requests from Client(Localhost:3000) to Server(Localhost:4000)
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Used for any Request on the Server
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Connection to MongoDB server with user and password
const myConnectionString = 'mongodb+srv://admin:653396@cluster0.ejbwb.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//Defining Schema 
const Schema = mongoose.Schema;
//Mongoose Schema Field SetUp
var movieSchema = new Schema({
    title: String,
    year: String,
    poster: String
});

var MovieModel = mongoose.model("movie", movieSchema);


//Route to Server Main Page - http://localhost:4000/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Route to API Movies - http://localhost:4000/api/movies
app.get('/api/movies', (req, res) => {

    //JSON Data
    // const mymovies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "World War Z",
    //         "Year": "2013",
    //         "imdbID": "tt0816711",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    //     }
    //     , {
    //         "Title": "War of the Worlds",
    //         "Year": "2005",
    //         "imdbID": "tt0407304",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //     }
    // ];

    //Returns the contents of the Movies in Mongo DB Server
    MovieModel.find((err, data) => {
        res.json(data);
    })

    //Returns JSON and Success Message
    // res.status(200).json({
    //     message: "Everything is Successful",
    //     movies: mymovies
    // });
})

//http://localhost:4000/api/movies/:id (eg: 5fb3b569bf9ca46d6c4c3dd4)
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    //Search for Documents and Returns it in JSON Format
    MovieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

//http://localhost:4000/api/movies/:id - Pulls ID from URL and Updates Record
app.put('/api/movies/:id', (req, res)=>{
    console.log("Update Movie: "+req.params.id);
    console.log(req.body);

    MovieModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })


})
//Adding a Delete Function 
app.delete('/api/movies/:id', (req, res)=>{
    console.log("Delete Movie: "+req.params.id);

    //Finds Record to then Delete
    MovieModel.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data);
    })
})

//Console Log of http://localhost:4000/api/movies = Movie Details added in http://localhost:3000/create
app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    //Created info to be added to Mongo DB Server, Name and Value Pairs
    MovieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    })

    res.send('Item Added');
})

//Server Setup
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})