import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container";
import { useState } from "react";
import avatar from "../../assets/placeholder.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../CustomHooks/useAuth";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { user, logoutUser } = useAuth();
  // const handleMenuOpen =
  const handleLogout = () => {
    logoutUser().then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="h-16 max-w-[100%] py-4 shadow-sm z-10 opacity-70  ">
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
                <AiOutlineMenu
                  onClick={() => setMenuToggle(!menuToggle)}
                ></AiOutlineMenu>
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
              <div className="absolute top-14 right-20 shadow-md p-3 bg-slate-300">
                <li className="list-none">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>

                <li className="list-none">
                  <Link to={"/register"}>Sign Up</Link>
                </li>
                <li onClick={handleLogout} className="list-none">
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
