import React from 'react';
import ReactDOM from 'react-dom';
var taskList = [];
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<TaskBox taskList={this.props.taskList}/>
		);
	}
}
class TaskBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<h2>任务清单</h2>
				<TaskTable task={this.props.taskList}/>
				<TaskBtn/>
			</div>
		);
	}
}

class TaskTable extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var tasks = this.props.task;
		var tasksItem =[];
		tasksItem.map(function(element,index) {
			return <TaskItem time={element.time} event={element.event} isDone={element.isDone} />
		});
		return(
			<div className="taskTable">{tasksItem}</div>
		);
	}
}

class TaskItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var time = this.props.time;
		var event = this.props.event;
		var isDone = this.props.isDone?"完成":"未完成";
		return(
			<tr>
				<td>{time}</td>
				<td>{event}</td>
				<td><button>{isDone}</button></td>
			</tr>
		);
	}
}

class TaskBtn extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		$.getJSON("taskdata.json",function(data) {
			$.each(data,function(itemIndex,item) {
				taskList.push(item);
			});
		});
	}
	render() {
		return(
			<button onClick={this.handleClick}>获取任务清单</button>
		);
	}
}

ReactDOM.render(
	<App taskList={taskList}/>,
	document.getElementById("root")
);