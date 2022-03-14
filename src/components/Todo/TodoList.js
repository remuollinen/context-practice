import React, { useContext, useState } from "react";

import classes from "./TodoList.module.css";
import { NotesContext } from "../store/TodoStore";

const TodoList = () => {
	const context = useContext(NotesContext);
	const [filteredTodos, setFilteredTodos] = useState(context.notes);
	// console.log(context);

	const removeHandler = (id) => {
		context.removeTodo(id);
	};

	const filterHandler = (e) => {
		// console.log(e.target.value);
		if (e.target.value === "complete") {
			setFilteredTodos(context.notes.filter((note) => note.done));
		} else if (e.target.value === "incomplete") {
			setFilteredTodos(context.notes.filter((note) => !note.done));
		} else {
			setFilteredTodos(context.notes);
		}
	};

	return (
		<div className={classes.todos}>
			<h1>Notes:</h1>
			<select onChange={filterHandler}>
				<option value="all">All</option>
				<option value="complete">Completed</option>
				<option value="incomplete">Not completed</option>
			</select>
			{context.notes.map((note) => {
				return (
					<div
						key={note.id}
						className={`${classes.todo} ${note.done ? classes.done : ""}`}
					>
						<h2 onClick={() => context.doneToggle(note.id)}>{note.title}</h2>
						<p>{note.task}</p>
						<span
							className={`material-icons ${classes.delete}`}
							onClick={() => removeHandler(note.id)}
						>
							delete
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default TodoList;
