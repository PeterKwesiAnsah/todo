import React, { useState } from 'react';
import '../styles/Task.css';
import { ReactComponent as Check } from '../assets/check-solid-svgrepo-com.svg';
import { ReactComponent as Cross } from '../assets/cross-svgrepo-com.svg';

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
				<Cross className="task__cross"></Cross>
			</>
		</div>
	);
};

export default Task;
