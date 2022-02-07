import React, { useContext } from "react";

import classes from "./TodoList.module.css";
import { NotesContext } from "../store/TodoStore";

const TodoList = () => {
	const context = useContext(NotesContext);
	console.log(context);

	return (
		<div className={classes.todos}>
			<h1>Notes:</h1>
			{context.notes.map((note) => {
				return (
					<div key={note.id} className={classes.todo}>
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
