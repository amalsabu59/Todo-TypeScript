import React, { useState, useRef, useEffect } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditTodo] = useState<string>(todo.todo);
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
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editToDo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editToDo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--test"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
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
