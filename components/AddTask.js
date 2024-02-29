'use client'
import React, { useRef } from 'react';

const AddTask = ({ onAdd }) => {
    const taskInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTask = taskInputRef.current.Value;

        const taskData = {
            text: enteredTask,
        }
        onAdd(taskData);
    }

    return (
        <div>
            <form onSubmit={submitHandler}  >
                <input type="text" ref={taskInputRef} />
                <button >Add Task</button>
            </form>
        </div>
    );

}
export default AddTask;