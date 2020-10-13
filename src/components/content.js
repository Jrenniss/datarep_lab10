import React from 'react';

//Header Component
export class Content extends React.Component {
    //Method to display what is within
    render() {
        return (
            //Contents on display in the Component
            <div>
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}