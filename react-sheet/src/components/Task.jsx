import React from 'react';

export default function Task(props) {
  const { id, text, state, onAdd, onDelete, toggleTask, onChange } = props;

  return (
    <div id={id}>
      <input
        type="checkbox"
        name="checkbox"
        checked={state === 'selected'}
        onChange={toggleTask}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={onAdd}>+</button>
      <button onClick={onDelete}>×</button>
    </div>
  );
}
