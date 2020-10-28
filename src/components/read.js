import React from 'react';
import { Movies } from './movies';
//http Client
import axios from 'axios';

//Read Component to store the movies
export class Read extends React.Component {

    //State object that holds data within it. Eg: movies.
    state = {
        //JSON Script of Movies to be accessed through Movies and MovieItem Components
        movies: []
    };

    //Retrives info from the api
    componentDidMount(){
        //Axios implements a retrivel 
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        //Fufilled response = Holds the data retrived with axios - 
        .then(response =>{
            //updates the state object
            this.setState({
                movies:response.data.Search
            })
        })
        //Exception Response = Log an error
        .catch((error)=>{
            console.log(error);
        });
    }


    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            <div>
                <h1>This is the Read Component</h1>
                <h3>Below is the Movies Component Displaying Different Movies</h3>
                {/*Movies Component Diaplay */}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}