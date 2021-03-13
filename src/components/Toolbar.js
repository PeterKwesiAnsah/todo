import React from 'react';
import '../styles/Toolbar.css';


const Toolbar = ({ setFilter,filter }) => {
	const handleAction = ({ target }) => {
        //get text content from event triggered elememt
		const filterString = target.textContent;

		if (filterString) {
			setFilter(filterString);
		}
	};
	return (
		<div className="toolbar">
			<span className="toolbar__count" name="toolbarCount">
				0 items Left
			</span>
			<div className="toolbar__actions" onClick={handleAction}>
				<span className="toolbar__btn active">
					All
				</span>
				<span className="toolbar__btn">
					Active
				</span>
				<span className="toolbar__btn">
					Completed
				</span>
			</div>
			<span className="toolbar__clearBtn">Clear Completed</span>
		</div>
	);
};

export default Toolbar;
