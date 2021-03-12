import React from 'react';
import Task from './Task';
import '../styles/Task.css'

const Todos = () => {
	const task = {
		content: 'Go to the Market',
		active: true,
		completed: false,
	};
	return (
		<div className="todos">
			<Task task={task}></Task>
		</div>
	);
};

export default Todos;
