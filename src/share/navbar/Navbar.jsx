import { NavLink } from "react-router-dom";
import Container from "../../components/Container";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  // const handleMenuOpen =
  return (
    <div className="h-16 max-w-[100%] py-4 shadow-sm z-10">
      <Container>
        <nav className="flex justify-between gap-3 ">
          <h2>logo</h2>
          <ul className="flex gap-3">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Service</NavLink>
            </li>
            <li className="flex items-center gap-1">
              <NavLink>Add Guests</NavLink>
              <FaSearch className="bg-orange-400  rounded-full p-1 text-2xl"></FaSearch>
            </li>
          </ul>
          <div className="flex items-center gap-1">
            <h2>Rent Now</h2>

            <FaHamburger
              onClick={() => setMenuToggle(!menuToggle)}
            ></FaHamburger>
            {menuToggle && (
              <div className="absolute top-12 right-20 ">
                <h2>Dashboard</h2>
                <h1>Login</h1>
                <h2>Log Out</h2>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
