import React, { useState } from 'react';
import '../styles/Task.css';
import { ReactComponent as Check } from '../assets/check-solid-svgrepo-com.svg';
import { ReactComponent as Cross } from '../assets/cross-svgrepo-com.svg';
import findAndUpdate from '../utils/findAndUpdateOne';
import findAndRemove from '../utils/findAndRemoveOne';

const Task = ({ task, updateTodos, todoData }) => {
	//will use the task field
	const { id, completed, active } = task;

	//states for check boss

	//toggles between check and uncheck
	const handleCheck = () => {
		//find the task in todos,change the state of completed and update the state
		findAndUpdate(todoData, id, updateTodos);
		// setCompleted(!completed);
	};
	const handleRemoveTask = () => {
		//remove Task
		findAndRemove(todoData, id, updateTodos);
	};

	//retrieve task data
	const { content } = task;
	return (
		<div className="task">
			<div className="task__box">
				<span
					className="task__checkBox"
					style={{ border: completed && '1px solid var(--checkedLight)' }}
					onClick={handleCheck}
				>
					{completed && <Check className="task__check"></Check>}
				</span>
				<p className={completed ? 'task__crossThrough' : ''}>{content}</p>
			</div>
			<>
				<Cross className="task__cross" onClick={handleRemoveTask}></Cross>
			</>
		</div>
	);
};

export default Task;
