'use client'
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import React, { useState } from 'react';

export default function Home() {

  const [tasks, setTasks] = useState([
    { id: 't1', text: 'Learn Next.js', completed: false },
    { id: 't2', text: 'Build a Todo App', completed: true },
    { id: 't3', text: 'Practice React', completed: false },
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: `t${tasks.length + 1}`, text: newTask, completed: false }]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: true } : task)));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTask onAdd={handleAddTask} />
      <TodoList tasks={tasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />
    </div>
  );
}


