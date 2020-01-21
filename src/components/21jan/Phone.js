import React from 'react';
import PropType from 'prop-types';
import Screen from './Screen'

export default class Phone extends React.PureComponent {

    state = {
        myData: null
    }

    getDataFromPhone = (d) => {
        this.setState({
            myData: d
        })
    }

    render() {
        return (
            <div>
                <h1>My mobile name is {this.props.name},
                {this.state.myData}</h1>
                <h2><Screen screenName={this.props.screenName}
                    getDataFromPhone={this.getDataFromPhone} /></h2>
            </div>
        )
    }
}

Phone.propTypes = {
    name: PropType.string
}

Phone.defaultProps = {
    name: 'Unknown'
}