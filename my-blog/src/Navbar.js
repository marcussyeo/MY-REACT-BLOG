import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>M.Y. Blog</h1>
      <div className="links">
        {/* Use Link so that it doesn't send a fresh request to the server and instead head to the route directly */}
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
