import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { useState } from "react";
import avatar from "../../assets/placeholder.jpg";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const user = true;
  // const handleMenuOpen =
  return (
    <div className="h-16 max-w-[100%] py-4 shadow-sm z-10 opacity-70">
      <Container>
        <nav className="flex justify-between items-center gap-3 ">
          <h2>logo</h2>
          <ul className="flex gap-3">
            <li>
              <NavLink to={"/"}>Home</NavLink>
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

            {user ? (
              <>
                <FaHamburger
                  onClick={() => setMenuToggle(!menuToggle)}
                ></FaHamburger>
                <img src={avatar} className="w-10 h-10 rounded-full" alt="" />
              </>
            ) : (
              <li className="list-none">
                <Link className="btn" to={"/login"}>
                  Login
                </Link>
              </li>
            )}

            {menuToggle && (
              <div className="absolute top-12 right-20 ">
                <li className="list-none">
                  <Link to={""}>Dashboard</Link>
                </li>

                <li className="list-none">
                  <Link to={"/register"}>Sign Up</Link>
                </li>
                <li className="list-none">
                  <Link to={""}>Log Out</Link>
                </li>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
