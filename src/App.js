import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'abc',
        };
    }

    nameChangeHandler = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    value={this.state.username}
                    nameChange={this.nameChangeHandler}
                />
                <UserOutput username={this.state.username} />
            </div>
        );
    }
}

export default App;
