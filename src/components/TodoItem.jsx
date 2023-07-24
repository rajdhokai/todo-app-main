import React from 'react';

function TodoItem({ task, toggleTask, removeTask }) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-4"
        />
        <span
          className={task.completed ? 'line-through' : ''}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => removeTask(task.id)}
        className="bg-red-500 text-white py-1 px-2 rounded"
      >
        Remove
      </button>
    </div>
  );
}

export default TodoItem;
