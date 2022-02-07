import React, { useContext } from "react";

import classes from "./TodoList.module.css";
import { NotesContext } from "../store/TodoStore";

const TodoList = () => {
	const context = useContext(NotesContext);
	// console.log(context);

	const removeHandler = (note) => {
		console.log(`Todo "${note.title}" was removed`);
		console.log(note.id);
		context.removeTodo(note.id);
	};

	return (
		<div className={classes.todos}>
			<h1>Notes:</h1>
			{context.notes.map((note) => {
				return (
					<div
						onClick={() => removeHandler(note)}
						key={note.id}
						className={classes.todo}
					>
						<h2>
							{note.id}. {note.title}
						</h2>
						<p>{note.task}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TodoList;
