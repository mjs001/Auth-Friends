import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
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
  const EditFriend = (id) => {
    props.history.push(`/EditFriends/${id}`);
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
          <button
            onClick={() => {
              EditFriend(friend.id);
            }}
          >
            edit
          </button>
        </>
      ))}
    </div>
  );
}
export default FriendsList;
