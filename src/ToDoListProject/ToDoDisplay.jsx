import { useState } from "react";
export const ToDoDisplay=({todos,setTodos})=>{
const [editing, setEditing] = useState(null);
const [editingText, setEditingText] = useState('');
const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => 
        i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
};

const startEditing = (index) => {
    setEditing(index);
    setEditingText(todos[index].text);
};

const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
};

const saveEdit = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodos);
    setEditing(null);
    setEditingText('');
};

    return<ul>
    {todos.map((todo, index) => (
      <li key={index} className="mb-2 border-2 border-solid border-slate-600 p-2 rounded-full flex items-center justify-between">
        <div>
          <input
            type="checkbox"
            className="border-2 border-solid border-slate-800 mr-2"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
          />
          {editing === index ? (
            <input
              type="text"
              className="border rounded p-1"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            <span className={`${todo.completed ? 'line-through' : ''}`}>
              {todo.text}
            </span>
          )}
        </div>
        <div>
          {editing === index ? (
            <button
              onClick={() => saveEdit(index)}
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => startEditing(index)}
              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => deleteTodo(index)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
}