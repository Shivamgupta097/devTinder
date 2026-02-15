import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const NavBar = () => {
  const store = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    console.log("1");

    try {
      const res = await axios.post(BASE_URL + "/logout ", {
        withCredentails: true,
      });

      navigate("/login");

      console.log("response", res);
      console.log("2");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DevTinder{" "}
        </Link>
      </div>
      <div className="flex gap-2 me-3">
        {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          /> */}

        <p className="my-auto">Welcome, {store?.firstName} </p>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={store?.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <p onClick={handleLogOut}>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
