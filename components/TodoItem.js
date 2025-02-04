export default function TodoItem({ todo, setTodos, todos }) {
  // Function to toggle the completion status of the todo
  const toggleComplete = () => {
      setTodos(
          todos.map((t) => 
              // If the current todo's id matches the id of the todo being processed,
              t.id === todo.id ? { ...t, completed: !t.completed } : t
          )
      );
  };
  
  // Function to delete the todo from the list
  const deleteTodo = () => {
      // Update the todos list by filtering out the todo with the matching id
      setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {todo.text}
          <div className="button-group">
              <button onClick={toggleComplete}>✔</button>
              <button onClick={deleteTodo}>❌</button>
          </div>
      </li>
  );
}