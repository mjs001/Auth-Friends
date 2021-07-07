import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link className="add" to="/Friends">
          FriendsList
        </Link>
      </li>
      <li>
        <Link to="/EditFriends/:id"></Link>
      </li>
      <li>
        <Link to="/AddFriends">AddFriends</Link>
      </li>
    </ul>
  );
}
