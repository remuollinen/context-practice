import React from "react";

const initialState = {
	notes: [
		{
			id: 1,
			title: "Create clean app",
			task: "npx create-react-app",
			done: false,
		},
		{
			id: 2,
			title: "Clean app",
			task: "Delete and clean unnecessary stuff",
			done: false,
		},
		{
			id: 3,
			title: "Create store / context",
			task: "Create new file and use React.createContext()",
			done: false,
		},
	],
};

export const NotesContext = React.createContext();

export const Provider = ({ children }) => {
	return (
		<NotesContext.Provider value={initialState}>
			{children}
		</NotesContext.Provider>
	);
};
