import React from 'react'

class GreetingByClass extends React.Component {
  render(){
    return (
        <h3>Hello, {this.props.name}! Greeting from class</h3>
    )
  } 
}

export default GreetingByClass