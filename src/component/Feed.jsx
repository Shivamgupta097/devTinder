import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import axios from "axios";

const Feed = () => {
  const selector = useSelector
  const dispatch = useDispatch();

  const feed = selector((store) => store.feed);
  const userData = selector((state) => state.user);

  const getFeed = async () => {
    if (!feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
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

  if (!userData || !userData.length) {
    return <p>NO data found</p>;
  }
  return (
    <div>
      {feed.map((c) => (
        <UserCard user={c} />
      ))}
    </div>
  );
};

export default Feed;
