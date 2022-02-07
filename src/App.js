import React from "react";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

import { Provider } from "./components/store/TodoStore";

const App = () => {
	return (
		<Provider>
			<AddTodo />
			<TodoList />
		</Provider>
	);
};

export default App;
