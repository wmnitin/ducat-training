import React from 'react'

export default class Test extends React.PureComponent {
  componentDidMount(){
    // debugger
  }
  render() {
    return <div>
      <button onClick={this.props.buttonClicked}>Click</button>
      count: {this.props.count}
    </div>
  }
}

