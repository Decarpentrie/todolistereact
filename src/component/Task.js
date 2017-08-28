
import React, { Component } from 'react';
import AddTask from './component/AddTask';
import {v4} from 'node-uuid';

class Task extends component{
	constructor(){
		super();
		this.state={
			tasks:[],
		}

		this._onSubmitTask= this._onSubmitTask.blind(this);
	}
	_onSubmitTask(task){
		this.setState({
            tasks:[
                ...this.state.tasks,
                {content: task, id: v4(), status: false}
            ]
        });
	}
	render(){
		return(
			< AddTask onSubmit={this._onSubmitTask}/>
		)
	}
}

export default Task;
