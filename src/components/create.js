import React from 'react';
import axios from 'axios';

//Create Component
export class Create extends React.Component {

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

        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/movies', newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            //Form to Add a Movie
            <form onSubmit={this.handleSubmit}>
                {/*Adding Movie Title */}
                <div className="form-group">
                    <label>Please Add Movie Title:</label>
                    <input type="text" className="form-control" value={this.state.Title} onChange={this.onChangeMovieTitle}>
                    </input>
                </div>

                {/*Adding Movie Year */}
                <div className="form-group">
                    <label>Please Add Movie Year:</label>
                    <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeMovieYear}>
                    </input>
                </div>

                {/*Adding Movie Poster */}
                <div className="form-group">
                    <label>Please Add Movie Poster:</label>
                    <textarea type="text" className="form-control" value={this.state.Poster} onChange={this.onChangeMoviePoster}>
                    </textarea>
                </div>

                {/*Button Adding Form Contents to State */}
                <div>
                    <input type="submit" value="Add Movie" className="btn btn-primary"></input>
                </div>
            </form>


        );
    }
}