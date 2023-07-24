import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="border rounded-md p-1 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
