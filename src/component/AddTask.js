
import React, { Component } from 'react';


class AddTask extends Component{
    constructor(){
        super();
        this.state={
            value: "",
        }
    }



	render() {
        return (
            <form onSubmit={(e)=>{
                    e.preventDefault();
                    // this.props.addTask(this.state.value);
                    // this.setState({value: ""});
                    if (this.state.value.trim) {}
    			}}>
    			<label htmlFor="addTask">Add Task</label>
    			<input onChange={(e)=>{this.setState({value: e.target.value})}} type="text" name="addTask" value={this.state.value}/>
    			<button type="submit">send</button>
    		</form>
    );
  }
}

export default AddTask;