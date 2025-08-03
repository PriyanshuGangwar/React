import React, { useState } from 'react';
import Task from './Task';

export default function TodoList() {
  const [tasks, setTasks] = useState([{ text: '', state: 'todo' }]);

  const onAdd = () => {
    setTasks([...tasks, { text: '', state: 'todo' }]);
  };

  const onDelete = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  const toggleTask = (idx) => {
    const updated = [...tasks];
    updated[idx].state = updated[idx].state === 'selected' ? 'todo' : 'selected';
    setTasks(updated);
  };

  const onChange = (idx, newText) => {
    const updated = [...tasks];
    updated[idx].text = newText;
    setTasks(updated);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              id={index}
              text={task.text}
              state={task.state}
              onAdd={onAdd}
              onDelete={() => onDelete(index)}
              toggleTask={() => toggleTask(index)}
              onChange={(value) => onChange(index, value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
