import React from 'react';

//Create Component
export class Create extends React.Component {

    //
    constructor() {
        super();

        //
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //On start values of Title, ~Year and Poster will be clear
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
    //Updates the Year of the movie
    onChangeMoviePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    handleSubmit(e) {
        alert("Movie Added" + this.state.Title);
    }

    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Please Add Movie Title:</label>
                    <input type="text" className="form-control" value={this.state.Title} onChange={this.onChangeMovieTitle}>
                    </input>
                </div>


                <div className="form-group">
                    <label>Please Add Movie Year:</label>
                    <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeMovieYear}>
                    </input>
                </div>


                <div className="form-group">
                    <label>Please Add Movie Poster:</label>
                    <input type="text" className="form-control" value={this.state.Poster} onChange={this.onChangeMoviePoster}>
                    </input>
                </div>

                {/*Button */}
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>


        );
    }
}