import React from 'react';
//Bootstrap import for the Card.
import Card from 'react-bootstrap/Card';

//MovieItem Component
export class MovieItem extends React.Component {
    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            <div>
                {/*The content of each movieitem is desplayed as requested, Title, Year and Poster */}
                <Card>
                    {/*Card Holds Title in the Card Header. Year and Poster are held in the Card Body  */}
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <h4>{this.props.movie.year}</h4>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}