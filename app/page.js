'use client'
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import React, { useState } from 'react';

export default function Home(props) {

  // const [tasks, setTasks] = useState([
  //   { id: 't1', text: 'Learn Next.js', completed: false },
  //   { id: 't2', text: 'Build a Todo App', completed: true },
  //   { id: 't3', text: 'Practice React', completed: false },
  // ]);

  const handleAddTask = async (newTask) => {
    // setTasks([...tasks, { id: `t${tasks.length + 1}`, text: newTask, completed: false }]);
    // console.log(tasks);

    try {
      const response = await fetch('/api/new-task', {
        method: 'POST',
        body: JSON.stringify({ text: newTask }), // Send an object with a 'text' property
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const data = await response.json();
      console.log(data); // Log the response from the server

      if (data.message === 'todos inserted') {

      } else {
        console.error('Unexpected server response:', data);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
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
      <TodoList task={props.tasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />
    </div>
  );
}

export async function getStaticProps() {
  //fetch data from an ApI
  const client = await MongoClient.connect('mongodb+srv://user:userpassword@cluster0.taya7uh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const todosCollection = db.collection('todos');

  const todos = await todosCollection.find().toArray(); // which return all the content from the database

  client.close();

  return {
    props: {
      todos: todos.map(task => ({
        id: task._id.toString(),
        text: task.text,
      }))
    },
    revalidate: 1
  };
}





