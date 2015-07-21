import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        console.log('Hello du');
    }

    render(): any {
        return (
            <h1>Hello noen</h1>
        );
    }
}

React.render(<App />, document.getElementById('app'));
