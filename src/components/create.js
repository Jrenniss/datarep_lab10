import React from 'react';

//Create Component
export class Create extends React.Component {
    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            <div>
                <h1>This is the Create Component</h1>
                <h2>Current Time in Create Component</h2>
                <h3>{new Date().toLocaleTimeString()}</h3>
            </div>
        );
    }
}