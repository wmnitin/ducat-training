import React from 'react';
import Box from './Box'

export default class Hellowrold extends React.Component {

  state = {
    data:null
  }

  componentDidMount(){
    window.fetch('https://jsonplaceholder.typicode.com/photos').then(res=>{
      return res.json()
    }).then(resp=>{
      this.setState({
        data: resp
      })
    }).catch(err=>{
      console.log('error occured', err)
    })
  }

  render() {
    if(this.state.data === null){
      return 'Please wait'
    }
    return <>
    {
      this.state.data.map((item,i) =>{
        return <Box item={item} />
      })
    }
    </>
  }

}