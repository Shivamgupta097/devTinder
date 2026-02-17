import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Connections = () => {
  const [connections, setConnections] = useState([]);

  async function getUserConnection() {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });

      setConnections(res?.data?.data);
    } catch (error) {
      console.log(error, "error");
    }
  }

  useEffect(() => {
    getUserConnection();
  }, []);
  return (
    <div className="flex gap-3 m-3">
    {connections.map((c) => <div
      className="card bg-base-100 w-65 shadow-sm bg-green place-items-center "
      style={{ border: "1px solid white", maxHeight: "500px"  }}
    >
    
      <div>
        <img src={c?.toUserId?.photoUrl} alt="Shoes" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{c?.toUserId?.firstName + " " + c?.toUserId?.lastName}</h2>
        <p>{c?.toUserId?.age && c?.toUserId?.gender && c?.toUserId?.age + "," + c?.toUserId?.gender}</p>
        <p>{c?.toUserId?.about}</p>
      </div>
    </div>)}
    </div>
  );
};

export default Connections;
