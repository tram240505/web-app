import Navbar from "../components/Navbar"; 
import { useState, useEffect } from "react"; 
export default function Completed() {
  const [completedTasks, setCompletedTasks] = useState([]);

  //  load completed tasks from localStorage
  useEffect(() => {
    // Retrieve the todos from localStorage and parse them
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setCompletedTasks(todos.filter((todo) => todo.completed));
  }, []);

  return (
    <div className="container">
      <Navbar /> 
      <h1 className="title">Completed Tasks</h1> 
      {completedTasks.length > 0 ? ( // Check if there are completed tasks
        <ul className="todo-list">
          {completedTasks.map((todo) => (
            <li key={todo.id} className="todo-item completed">{todo.text}</li>
          ))}
        </ul>
      ) : (
        <p>No completed tasks.</p> 
      )}
    </div>
  );
}