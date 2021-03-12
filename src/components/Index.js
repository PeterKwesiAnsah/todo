import React, { useState ,useEffect} from 'react';
import '../styles/Index.css';

const Index = () => {
	//init states to handle todo Operations
	const [todo, setTodo] = useState([]);

	const [task, setTask] = useState('');

    //add an eventListener 
    useEffect(()=>{

    },[])

	//handleChange to control input element
	const handleChange = (e) => setTask(e.target.value);
	return (
		<div className="input__box">
			<input
				className="input"
				placeholder="what needs to be done?"
				value={task}
				handleChange={handleChange}
			></input>
		</div>
	);
};

export default Index;
