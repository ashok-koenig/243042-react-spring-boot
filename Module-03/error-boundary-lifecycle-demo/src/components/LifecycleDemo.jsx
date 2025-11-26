import React, { Component } from 'react'

export default class LifecycleDemo extends Component {

    constructor(props){
        super(props)
        this.state = {count: 0}
        console.log("Constructor called")
    }

    componentDidMount(){
        console.log("componentDidMount called")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate called");
        console.log("Previous state: "+ prevState)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
  render() {
    if(this.state.count == 3){
        throw new Error("Count reached 3! crashing app")
    }

    return (
        <div>
            <h3>Lifecycle demo with Error Boundary</h3>
            <p>Count: {this.state.count}</p>
            <button onClick={()=> this.setState({count: this.state.count +1})}>Increase count</button>
        </div>
    )
  }
}
