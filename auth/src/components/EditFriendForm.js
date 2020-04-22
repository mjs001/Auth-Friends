import React, { useState, useEffect, setState } from "react";
import Nav from "./Nav";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
function EditFriendForm(props) {
  const initialState = useState({
    id: "",
    name: props.name || "",
    email: props.email || "",
    age: props.email || "",
  });

  const [friend, setFriend] = useState(initialState);
  const { push } = useHistory();
  const { id } = useParams();
  useEffect(() => {
    axiosWithAuth()
      .get(`api/friends/${id}`)
      .then((res) => {
        console.log(res);
        setFriend({
          name: res.data.name,
          email: res.data.email,
          age: res.data.age,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);
  const updateFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/friends/${id}`, friend)
      .then((res) => {
        push("/Friends");
      });
  };
  const handleChanges = (e) => {
    e.persist();
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={updateFriend}>
      <input
        type="text"
        name="name"
        id="name"
        value={friend.name}
        onChange={handleChanges}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        value={friend.email}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="age"
        id="age"
        placeholder="age"
        value={friend.age}
        onChange={handleChanges}
      />
      <button type="submit" onClick={updateFriend}>
        submit
      </button>
    </form>
  );
}
export default EditFriendForm;
