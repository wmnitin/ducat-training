import React from 'react';
import Phone from './Phone'

export default class User extends React.PureComponent {

    buttonRef = React.createRef();

    state = {
        phoneName: 'Smasung s8',
        screenName: 'Gorilla'
    }

    callMe = (name, event) =>{
        console.log('helloooooooooo')

        this.buttonRef.current.innerHTML = 'Someone has clicked :D'

    }

    render() {
        return (
            <div>
                <h1 ref={this.buttonRef}>No one has clicked :(</h1>
                <Phone name={this.state.phoneName}
                    screenName={this.state.screenName} />

                    <button onClick={this.callMe.bind(this, 'nitin')}>Click Me</button>
            </div>
        )
    }
}