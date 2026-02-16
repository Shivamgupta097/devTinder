import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();

  const feed = useSelector((state) => state.feed);
  const userData = useSelector((state) => state.user);

  console.log("feed", feed);
  const getFeed = async () => {
    // if (!feed) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      console.log("res is here", res);
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed || !feed.length) {
    return <p>NO data found</p>;
  }
  return (
    <>
      <div
        className="flex gap-4 flex-wrap mx-center justify-center"
        style={{ margin: "center" }}
      >
        {feed.map((c) => (
          <UserCard user={c} />
        ))}
      </div>
    </>
  );
};

export default Feed;
