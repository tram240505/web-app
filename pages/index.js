import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <h1 className="title">Todo App</h1>
      <TodoList />
    </div>
  );
}