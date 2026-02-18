import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [showButton, setShowButton] = useState(true)

  async function getUserRequests() {
    try {
      const res = await axios.get(BASE_URL + "/user/request/recieved", {
        withCredentials: true,
      });

      setRequests(res?.data?.data);
    } catch (error) {
      console.log(error, "error");
    }
  }

  async function toAcceptAndRejectUser(currentStatus, requestedId) {
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${currentStatus}/${requestedId}`,
        {},
        {
          withCredentials: true,
        },
      );

      setRequests(res?.data?.data);
    } catch (error) {
      console.log(error, "error");
    }
  }

  function handleUser(currentStatus, requestedId) {
    // setStatus(status);
    // setRequestedId(requestedId)
    toAcceptAndRejectUser(currentStatus, requestedId);
  }
  useEffect(() => {
    getUserRequests();
  }, []);

  if(!requests || !requests.length){
    return <h1>Hello</h1>
  }

  return (
    <div className="flex gap-3 m-3">
      {requests.map((c) => (
        <div
          className="card bg-base-100 w-65 shadow-sm bg-green place-items-center my-3 "
          style={{ border: "1px solid white", maxHeight: "500px" }}
          key={c?._id}
        >
          <div>
            <img src={c?.fromUserId?.photoUrl} alt="Shoes" />
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {c?.fromUserId?.firstName + " " + c?.fromUserId?.lastName}
            </h2>
            <p>
              {c?.fromUserId?.age &&
                c?.fromUserId?.gender &&
                c?.fromUserId?.age + "," + c?.fromUserId?.gender}
            </p>
            <p>{c?.fromUserId?.about}</p>
          </div>
          <div>
            <button
              className="btn btn-primary me-3"
              onClick={() => handleUser("accepted", c?._id)}
              type="button"
            >
              Accepted
            </button>
            <button
              className="btn btn-secondary "
              onClick={() => handleUser("rejected", c?._id)}
              
            >
              Rejected
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Requests;
