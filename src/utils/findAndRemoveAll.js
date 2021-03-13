const findAndRemoveAll = (data, fn) => {
	const newMutalData = [...data];

	//get all completed tasks
	const filtered = data.filter(({ completed }) => completed === true);
    
};
export default findAndRemoveAll;
