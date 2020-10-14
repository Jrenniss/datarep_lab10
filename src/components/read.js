import React from 'react';

//Header Component
export class Read extends React.Component {
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