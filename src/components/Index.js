import React, { useState, useEffect } from 'react';
import '../styles/Index.css';
import Todos from '../components/Todos';

const Index = () => {
	//init states to handle todo Operations
	const [todos, setTodos] = useState([]);

	const [task, setTask] = useState('');

	// {
	//     id:id,
	//     content:'',
	//     active:true,
	//     completed:false,
	// }

	//creates todo
	const createTodo = ({ key }) => {
		if (key === 'Enter') {
			if (task) {
				//clear input value
				setTask('');
			}
		}
	};

	//add an eventListener
	useEffect(() => {
		window.addEventListener('keyup', createTodo);
		return () => {
			window.removeEventListener('keyup', createTodo);
		};
	});

	//handleChange to control input element
	const handleChange = (e) => setTask(e.target.value);
	return (
		<>
			<div className="input__box">
				<input
					className="input"
					placeholder="what needs to be done?"
					value={task}
					onChange={handleChange}
				></input>
			</div>
			<Todos todoData={todos}></Todos>
		</>
	);
};

export default Index;
