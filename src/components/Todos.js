import React, { useState } from 'react';
import Task from './Task';
import '../styles/Task.css';
import Toolbar from '../components/Toolbar';
import filter from '../utils/filter';

const Todos = ({ todoData }) => {
	//state to filter out todos
	const [filter, setFilter] = useState('All');

	//get count of actie tasks
	const count = filter(todoData, 'Active').length;

	const task = {
		content: 'Go to the Market',
		active: true,
		completed: false,
	};
	return (
		<>
			<div className="todos">
				<Task task={task}></Task>
			</div>
			<Toolbar setFilter={setFilter} filter={filter}></Toolbar>
		</>
	);
};

export default Todos;
