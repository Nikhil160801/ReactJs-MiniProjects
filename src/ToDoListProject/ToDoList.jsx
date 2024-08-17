import { useState } from 'react';
import { ToDoDisplay } from './ToDoDisplay';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  return (
    <div className="bg-todo-pattern bg-no-repeat bg-cover min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-red-300 p-8 rounded-lg shadow-lg w-96 max-md:w-90">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Add new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <button
          onClick={addTodo}
          className="w-full bg-red-500 duration-300 hover:scale-105 text-white py-2 rounded hover:bg-red-700 mb-4"
        >
          Add Task
        </button>
        <ToDoDisplay todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default TodoList;
