import React from "react";
import { useState } from "react";
import "./TodoListStyle.css";

const TodoList = ({ todos, handleDelete, handleEdit,handleComplete}) => {
  
  

  return (
    <div className="todolist">
      <div className="container">
        <ul>
          {todos.map((t) => (
            <li>
              <p key={t.id} className={t.completed ? 'done span' : 'span'}>{t.todo}</p>
              <button onClick={() => handleEdit(t.id)}>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button onClick={() => handleDelete(t.id)}>
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button onClick={()=>handleComplete(t.id)}><i class="fa-solid fa-check"></i></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
