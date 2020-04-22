import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/Friends">FriendsList</Link>
      </li>
      <li>
        <Link to="/EditFriend">EditFriend</Link>
      </li>
      <li>
        <Link to="/AddFriends">AddFriends</Link>
      </li>
    </ul>
  );
}
