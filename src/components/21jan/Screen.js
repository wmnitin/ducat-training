import React from 'react';

export default class Screen extends React.PureComponent {
    data='2019'
    componentDidMount(){
        this.props.getDataFromPhone(this.data)
    }
    render() {
        return (
            <div>
                <h1>Screen name is {this.props.screenName}</h1>
            </div>
        )
    }
}
