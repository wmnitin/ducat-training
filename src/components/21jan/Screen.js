import React from 'react';

export default class Screen extends React.PureComponent {
    data = '2019'
    state = {
        myVar: [{
            name: 'nitin'
        }, {
            name: 'sujal'
        }, {
            name: 'sudfsdjal'
        }],
        myInputValue: ''
    }
    deletesome=()=>{
        let newArr = [...this.state.myVar]
        newArr.splice(1,1)
        this.setState({
            myVar: newArr
        })
    }

    changeMe=(event)=>{
        this.setState({
            myInputValue: event.target.value
        })
    }
    componentDidMount() {
        this.props.getDataFromPhone(this.data)
    }
    render() {
        return (
            <div>
                Enter here: <input value={this.state.myInputValue} onChange={this.changeMe} />
                <br/>
                {this.state.myInputValue}
                <br/>
                <h1 onClick={this.deletesome}>Screen name is {this.props.screenName}</h1>
                {
                   JSON.stringify(this.state.myVar)
                }
            </div>
        )
    }
}
