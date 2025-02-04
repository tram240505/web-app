import { useState, useEffect } from "react"; 
import TodoItem from "./TodoItem"; 
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  
  //  save todos to localStorage 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  // Function to add a new todo
  const addTodo = () => {
    // Check if the task input is not empty
    if (task) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      // Clear the task input
      setTask("");
    }
  };

  return (
    <div className="todo-container">
      <div className="input-group">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter task..." 
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
}