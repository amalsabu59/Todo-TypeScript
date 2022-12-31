import React from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  console.log(todos);
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon">
          <MdOutlineDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
