import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const TodoList = () => {
  return (
    <div>
      <TodoForm />
      <Todo />
    </div>
  );
};

export default TodoList;
