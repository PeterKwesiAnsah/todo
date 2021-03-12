import React, { useState } from 'react';
import '../styles/Task.css';
import { ReactComponent as Check } from '../assets/check-solid-svgrepo-com.svg';

const Task = ({ task }) => {
	//states for check boss
	const [completed, setCompleted] = useState(false);

	//toggles between check and uncheck
	const handleCheck = () => {
		setCompleted(!completed);
	};

	//retrieve task data
	const { content } = task;
	return (
		<div className="task">
			<span
				className="task__checkBox"
				style={{ border: completed && '1px solid var(--checked)' }}
				onClick={handleCheck}
			>
				{completed && <Check className="task__check"></Check>}
			</span>
			<p>{content}</p>
		</div>
	);
};

export default Task;
