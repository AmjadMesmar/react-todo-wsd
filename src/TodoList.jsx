/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && <h4>No Todos Yet.</h4>}
        {todos.map((todo) => {
          return (
            <TodoItem
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            {...todo} // spread out directly since we want to pass all keys of the todo object
            key={todo.id}
            // id={todo.id}
            // title={todo.title}
            // completed={todo.completed}
            />
          );
        })}
      </ul>
    </>
  );
}
