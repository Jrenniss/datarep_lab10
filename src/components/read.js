import React from 'react';

//Read Component
export class Read extends React.Component {

    //state object that holds data within it
    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            <div>
                <h1>This is the Read Component</h1>
                <h2>Please Read the Current Time.</h2>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}