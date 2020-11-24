import React from 'react';
import { MovieItem } from './movieItem';

//Movies Component
export class Movies extends React.Component{
    //Method to display what is within
    render(){//Breaks into a single movie item
        return this.props.movies.map( (movie)=>{
            //Return each Movie as a single item + Reload
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}