import { useState } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import EditProfile from "./EditProfile";

const Profile = () => {
 const user = useSelector((state) =>(state.user))

  // const handleLogin = async () => {
  //   try {
  //     const res = await axios.get(
  //       BASE_URL + "feed",
  //       {
  //         password: user?.password,
  //         email: user?.email,
  //       },
  //       {
  //         withCredentials: true,
  //       },
  //     );

  //     dispatch(addUser(res?.data?.data));
  //     navigate("/feed");

  //   } catch (error) {
  //     console.error(error, "error");
  //   }
  // };

  return (
    <EditProfile user = {user}/>
  );
};

export default Profile;
