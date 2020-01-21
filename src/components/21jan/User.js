import React from 'react';
import Phone from './Phone'

export default class User extends React.PureComponent {

    state = {
        phoneName: 'Smasung s8',
        screenName: 'Gorilla'
    }

    render() {
        return (
            <div>
                <h1>I am user</h1>
                <Phone name={this.state.phoneName}
                    screenName={this.state.screenName} />
            </div>
        )
    }
}