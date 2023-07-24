import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTask, removeTask }) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
