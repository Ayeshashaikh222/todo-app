

const TodoList = ({ tasks, onDelete, onComplete }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                    {!task.completed && <button onClick={() => onComplete(task.id)}>Complete</button>}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;