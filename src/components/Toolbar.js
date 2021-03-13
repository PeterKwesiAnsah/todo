import React from 'react';
import '../styles/Toolbar.css';

const Toolbar = ({ setFilterString, filterString, count }) => {
	const handleAction = ({ target }) => {
		//get text content from event triggered elememt
		const filter = target.textContent;

		if (filter) {
			//set a new filter state
			setFilterString(filter);
		}
	};
	return (
		<div className="toolbar">
			<span className="toolbar__count" name="toolbarCount">
				{count > 0 ? count + ' items' : count + ' item'} Left
			</span>
			<div className="toolbar__actions" onClick={handleAction}>
				<span className="toolbar__btn active">All</span>
				<span className="toolbar__btn">Active</span>
				<span className="toolbar__btn">Completed</span>
			</div>
			<span className="toolbar__clearBtn">Clear Completed</span>
		</div>
	);
};

export default Toolbar;
