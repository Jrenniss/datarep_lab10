import React from 'react';
//Sendds Data to the Server
import axios from 'axios';

//Edit Component
export class Edit extends React.Component {

    //
    constructor() {
        super();

        //Binding of Events 
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //On load values of Title, Year and Poster will be clear
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    
    //Pull Movie ID from the URL
    componentDidMount(){
        console.log(this.props.match.params.id);

        //Fills in Fields with Current Information
        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    //Updates the Title of the movie
    onChangeMovieTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }

    //Updates the Year of the movie
    onChangeMovieYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    //Updates the Poster of the movie
    onChangeMoviePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    //Alert displaying Updates 
    handleSubmit(e) {
        alert("Movie Added" + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        //Sends Title, Year and Poster to the BackEnd Server.js
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id:this.state._id
        }

        //Sends the data to thhe BackEnd with upadtes made
        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch();

        //Sends Data(newMovie) to BackEnd - http://localhost:4000/api/movies
        // axios.post('http://localhost:4000/api/movies', newMovie)
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // });
    }

    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            //Form to Edit a Movie
            <form onSubmit={this.handleSubmit}>
                {/*Edit Movie Title */}
                <div className="form-group">
                    <label>Updates Movie Title:</label>
                    <input type="text" className="form-control" value={this.state.Title} onChange={this.onChangeMovieTitle}>
                    </input>
                </div>

                {/*Edit Movie Year */}
                <div className="form-group">
                    <label>Update Movie Year:</label>
                    <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeMovieYear}>
                    </input>
                </div>

                {/*Edit Movie Poster */}
                <div className="form-group">
                    <label>Update Movie Poster:</label>
                    <textarea type="text" className="form-control" value={this.state.Poster} onChange={this.onChangeMoviePoster}>
                    </textarea>
                </div>

                {/*Button Updating Form Contents to State */}
                <div>
                    <input type="submit" value="Edit Movie" className="btn btn-primary"></input>
                </div>
            </form>


        );
    }
}