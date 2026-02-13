import { useState } from "react";
import axios from "axios";

const LogIn = () => {
  const [userDetails, setUserDetails] = useState({
    email: "shivam@gmail.com",
    password: "1234567890",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name || value) {
      setUserDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogin = async () => {
    try {
      const data = await axios.post("http://localhost:7777/login", {
        password: userDetails.password,
        email: userDetails.email,
    },{
      withCredentials:true
    });
    } catch (error) {
      console.error(error , 'error')
      res.status(400).json({ message: error.message });
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card w-96  bg-black">
        <div className="card-body">
          <h2 className="card-title justify-items-center mb-4">Login</h2>
          <div>
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
          <div className="card-actions justify-center">
            <button className="btn w-full" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
