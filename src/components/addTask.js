import React from 'react';

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );

      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasklist([...tasklist, newTask]);
      setTask({});

      e.target.task.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="add task"
          value={task.name || ''}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          maxLength={25}
          autoComplete="off"
        />

        <button className="addtask">{task.id ? 'update' : 'Add'}</button>
      </form>
    </div>
  );
};
