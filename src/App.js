import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Button from "./components/buttons";

class App extends Component {
constructor(props){
  super(props);
  this.state={
    counter: this.props.data.counter
  }
}

componentDidUpdate(prevProps){
  if (this.props.data.counter !== prevProps.data.counter) {
      this.setState({
      counter: this.props.data.counter
      })
    } 
    
  }


  render(){
      return (
          <div className="App">
              <div className="counter">{this.state.counter}</div>
            <div className="buttons-group">
              <Button clicked={() =>this.props.increment()} text='Increment'  />
              <Button clicked={() =>this.props.incrementFor(5)} text="Increment 5"/>
              <Button clicked={() =>this.props.decrement()} text="Decrement" />
              <Button clicked={() =>this.props.decrementFor(5)} text="Decrement 5" />
            </div>
          </div>
  );
  }

}

const mapStateToProps = state =>{
  return{
     data : state
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    increment: ()=> dispatch({type: 'INCREMENT'}),
    decrement: ()=> dispatch({type: 'DECREMENT'}),
    incrementFor: (s)=> dispatch({type: 'INCREMENTFOR', payLoad : s}),
    decrementFor: (s)=> dispatch({type: 'DECREMENTFOR', payLoad : s}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
