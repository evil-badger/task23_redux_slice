import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Number from './components/Number';
import {Counter} from './redux/Counter'


const App = () => {
	return (
		<div className="app">
			<h1 className="app-title">Это компонент APP. Внутри него два компонента - инпут+кнопка, и вывод содержимого инпута+кнопка уничтожения враждебных соседей</h1>
			<AddTodo />
			<TodoList />
			<Number/>
			<Counter/>
		</div>
	);
};

export default App;
