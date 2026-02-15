import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footers from "./Footers";
import NavBar from "./NavBar";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";


const Body = () => {
  const navigate = useNavigate();
  const userData = useSelector(store => store.user)
  const dispatch =useDispatch()

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      console.log("res" , res)

      dispatch(addUser(res.data));
    } catch (error) {
      if(error.status === 401){
        navigate("/login");
      }
      console.error("error", error);
    }
  };
  useEffect(() => {
    if(!userData){
    fetchUser();

    }
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footers />
    </>
  );
};

export default Body;
