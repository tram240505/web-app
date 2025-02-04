import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="nav-title">Todo App</h2>
      <div className="nav-links">
        <Link href="/">Home</Link> |  <Link href="/completed">Completed Tasks</Link>
      </div>
    </nav>
  );
}

 