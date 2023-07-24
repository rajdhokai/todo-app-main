import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <div className="columns-lg">
        <TodoForm addTask={addTask} />
        <TodoList
          tasks={tasks}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      </div>

    </div>
  );
}

export default App;
