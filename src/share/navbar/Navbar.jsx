import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 max-w-[100%] shadow-sm ">
      <nav className="flex justify-between gap-3">
        <h2>logo</h2>
        <ul className="flex gap-3">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Service</NavLink>
          </li>
        </ul>
        <div> Login Logout</div>
      </nav>
    </div>
  );
};

export default Navbar;
