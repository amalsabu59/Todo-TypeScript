import React from "react";
import "./styles.css";
import { ToDo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
