import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    	<form onsubmit={(event)=>{event.preventDefault}}>
    	<label>Add Task</label>
    	<input type="text" name="AddTask"/>
    	<button type="submit">send</button>
    	</form>
    );
  }
}

export default App;

