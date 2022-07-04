import './styles.css';
import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './classes/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach ( todo => crearTodoHtml(todo));
todoList.todos.forEach ( crearTodoHtml );


