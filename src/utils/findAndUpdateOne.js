const findAndUpdateOne = (data, taskID, fn) => {
	const newMutableData = [...data];

	const task = newMutableData.find(({ id }) => id === taskID);
	//update detailts
	task.completed = !task.completed;
	task.active = !task.active;

	//update the state with Changes
	fn(newMutableData);
};
export default findAndUpdateOne;
