import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const EditProfile = ({ user }) => {
  const [userDetails, setUserDetails] = useState({
    email: user?.email,
    firstName: user?.firstName,
    lastName: user?.lastName,
    age: user?.age,
    gender: user?.gender,
    about: user?.about,
    photoUrl: user?.photoUrl,
    skills: user?.skills,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name || value) {
      setUserDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(BASE_URL + "/profile/edit", {
        email: userDetails?.email,
        firstName: userDetails?.firstName,
        lastName: userDetails?.lastName,
        age: userDetails?.age,
        gender: userDetails?.gender,
        about: userDetails?.about,
        photoUrl: userDetails?.photoUrl,
        skills: userDetails?.skills,
      });

      console.log("res", res);
    } catch (error) {
      console.error("error", error.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card w-96  bg-black">
        <div className="card-body">
          <h2 className="card-title justify-items-center mb-4">
            Profile details
          </h2>
          <div>
            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">Photo URL</label>
              <input
                name="photoUrl"
                src={userDetails?.photoUrl}
                className="w-full border-none bg-black mx-auto"
                style={{ width: "250px" }}

                
              />
              
            </div>
            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">Email Id</label>
              <input
                type="text"
                name="email"
                value={userDetails?.email}
                disabled={true}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">First name</label>
              <input
                type="text"
                name="firstName"
                value={userDetails?.firstName}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">Last name</label>
              <input
                type="text"
                name="lastName"
                value={userDetails?.lastName}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">Age</label>
              <input
                type="text"
                name="age"
                value={userDetails?.age}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">Gender</label>
              <input
                type="text"
                name="gender"
                value={userDetails?.gender}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">About</label>
              <input
                type="text"
                name="about"
                value={userDetails?.about}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">Skills</label>
              <input
                type="text"
                name="skills"
                value={userDetails?.skills}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn w-full" onClick={updateUser}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
