'use client'
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState('');

    const addTaskHandler = () => {
        if (task.trim() !== '') {
            onAdd(task);
            setTask('');
        }
    };

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTaskHandler}>Add Task</button>
        </div>
    );
}

export default AddTask;