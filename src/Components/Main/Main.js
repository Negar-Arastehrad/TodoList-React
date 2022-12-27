import React from "react";
import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./MainStyle.css";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);





  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo }) //if hamoone chon nemikhaym id avaz she
          : { id: t.id, todo: t.todo }
      );

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return; //baraye in k dg paiini ro anjam nade
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo ,completed:false}, ...todos]); //sakhte id va value baraye har todo
      setTodo(""); //khali shodane input
    }
  };

  //baraye taghire matne input
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo); //faghat todo ro mikhaym chon id nemikhaym ke taghiir kone
    setEditId(id); //baraye in k begim too halate edit hastim
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };



 
  const handleComplete = (id) =>{

    setTodos(
      todos.map((item)=>{
        if(item.id===id){
          return {...item, completed: !item.completed };
        }
        return item;
      })
    )

  }

  

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayName = days[new Date().getDay()];

 

  return (
    <div className="main">
      <div className="container">
        <h1>Todo List</h1>
        <span>{dayName}</span>
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          editId={editId}
          handleSubmit={handleSubmit}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default Main;
