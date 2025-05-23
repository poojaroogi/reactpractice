import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleOnchange(e) {
    let Value = e.target.value;
    setTodo(Value);
  }

  function handleAddTodo() {
    if (!todo.trim()) return;
    setTodos((prev) => [...prev, todo]);
    setTodo("");
    notifyAdd()

  }

  function handleEdit(index) {
    setTodo(todos[index]);
    setEditIndex(index);
  }

  function handleUpdate() {
    if (!todo.trim()) return;
    const updatedlist = [...todos];
    updatedlist[editIndex] = todo;
    setTodos(updatedlist);
    setTodo("");
    setEditIndex(null);
  }

  function handleDelete(index) {
    const deleted = todos.filter((_, i) => i !== index);
    setTodos(deleted);
    notifyDelete()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (editIndex !== null) {
        handleUpdate();
      } else {
        handleAddTodo();
      }
    }
  };

  const notifyDelete = () => toast.success("Todo deleted successfully!");
  const notifyAdd = () => toast.success("Todo Add successfully!");


  return (
    <div>
      {/* Toast container */}
      <Toaster   position="top-right" reverseOrder={true} />

      <input
        type="text"
        value={todo}
        onChange={handleOnchange}
        onKeyDown={handleKeyDown}
        placeholder="Enter your todo..."
      />{" "}
      <button onClick={editIndex !== null ? handleUpdate : handleAddTodo}>
        {editIndex !== null ? "Update" : "Add Todo"}
      </button>{" "}
      {editIndex !== null && (
        <button onClick={() => (setTodo(""), setEditIndex(null))}>
          Cancel
        </button>
      )}

      <ul>
        {todos.map((res, index) => (
          <li key={index}>
            {res}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
