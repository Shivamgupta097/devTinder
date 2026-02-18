import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const LogIn = () => {
  const [userDetails, setUserDetails] = useState({
    // email: "shivam@gmail.com",
    // password: "1234567890",
  });
  // const [signUpForm, setSignUpForm] = useState({
  //   firstName,
  //   lastName,
  //   age,
  //   skills,
  //   photoUrl,
  // });

  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name || value) {
      setUserDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          password: userDetails.password,
          email: userDetails.email,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(addUser(res.data.data));
      navigate("/feed");
    } catch (error) {
      console.error(error, "error");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/sign-up", userDetails, {
        withCredentials: true,
      });

      dispatch(addUser(res.data.data));
      navigate("/feed");
    } catch (error) {
      console.error(error, "error");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center my-10">
      <div className="card w-96  bg-black">
        <div className="card-body">
          <h2 className="card-title justify-items-center mb-4">
            {isSignUpForm ? "Sign up" : "Login"}
          </h2>
          <div>
            {isSignUpForm && (
              <>
                <div className="form-control w-full max-w-xs mb-3">
                  <label className="label mb-2">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                    className="input border-none w-full max-w-xs bg-white text-black"
                  />
                </div>

                <div className="form-control w-full max-w-xs mb-3">
                  <label className="label mb-2">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={userDetails.lastName}
                    onChange={handleInputChange}
                    className="input border-none w-full max-w-xs bg-white text-black"
                  />
                </div>

                <div className="form-control w-full max-w-xs mb-3">
                  <label className="label mb-2">age</label>
                  <input
                    type="text"
                    name="age"
                    value={userDetails.age}
                    onChange={handleInputChange}
                    className="input border-none w-full max-w-xs bg-white text-black"
                  />
                </div>

                <div className="form-control w-full max-w-xs mb-3  w-full">
                  <label className="label mb-2 flex bg-red">Gender</label>
                  <select
                    name="gender"
                    value={userDetails.gender}
                    onChange={handleInputChange}
                  >
                    {["male", "female", "others"].map((c) => (
                      <option value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label mb-2">Email Id</label>
              <input
                type="text"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>

            <div className="form-control w-full max-w-xs ">
              <label className="label mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={userDetails?.password}
                onChange={handleInputChange}
                className="input border-none w-full max-w-xs bg-white text-black"
              />
            </div>
          </div>

          {isSignUpForm ? (
              <p onClick={() => setIsSignUpForm(false)}>Click here to go to login page</p>
            ) : (
              <p  onClick={() => setIsSignUpForm(true)}>
                Click here to go to sign up form
              </p>
            )}
          <div className="card-actions justify-center">
            {isSignUpForm ? (
              <button className="btn w-full" onClick={handleSignUp}>
                Sign Up
              </button>
            ) : (
              <button className="btn w-full" onClick={handleLogin}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
