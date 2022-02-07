import React, { useContext, useState } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

import { NotesContext } from "../store/TodoStore";

const AddTodo = () => {
	const [todo, setTodo] = useState({ title: "", task: "" });
	const context = useContext(NotesContext);

	const changeHandler = (e) => {
		const { name, value } = e.target;

		setTodo((prevState) => ({ ...prevState, [name]: value }));
		// console.log(todo);
	};

	const addHandler = (e) => {
		e.preventDefault();
		context.addTodoItem(todo);
	};

	return (
		<form onSubmit={addHandler} className={classes.input}>
			<div>
				<label htmlFor="title">Title</label>
				<input onChange={changeHandler} type="text" id="title" name="title" />
			</div>
			<div>
				<label htmlFor="task">Task</label>
				<input onChange={changeHandler} type="text" id="task" name="task" />
			</div>
			<Button type="submit">Add Task</Button>
		</form>
	);
};

export default AddTodo;
