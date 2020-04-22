import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import DeleteFriend from "./DeleteFriend";
function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
        setIsLoading(false);
      });
  }, []);
  const DeleteFriend = (id) => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => {
        props.history.push("/Friends");
        setFriends(res.data);
        setIsLoading(false);
      });
  };
  return (
    <div className="box">
      {isloading ? <h2>loading...</h2> : <h2></h2>}
      {friends.map((friend) => (
        <>
          <h3>{friend.name}</h3>
          <p>email: {friend.email}</p>
          <p>age: {friend.age}</p>
          <button
            onClick={() => {
              DeleteFriend(friend.id);
            }}
          >
            X
          </button>
        </>
      ))}
    </div>
  );
}
export default FriendsList;
