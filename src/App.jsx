/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValues = localStorage.getItem("ITEMS");
    if (localValues == null) return [];

    return JSON.parse(localValues);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function addTodo(title) {
    // passed SetState with function to keep state from refreshing
    setTodos((curruntTodos) => {
      return [
        ...curruntTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    });
  }

  function deleteTodo(id) {
    setTodos((curruntTodos) => {
      return curruntTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
    </>
  );
}
