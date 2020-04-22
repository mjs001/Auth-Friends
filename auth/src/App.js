import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AddFriendForm from "./components/AddFriendForm";
import DeleteFriend from "./components/DeleteFriend";
import EditFriendForm from "./components/EditFriendForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import "./components/styling.css";
import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <PrivateRoute exact path="/Friends" component={FriendsList} />
          <PrivateRoute path="/EditFriends/:id" component={EditFriendForm} />
          <PrivateRoute exact path="/AddFriends" component={AddFriendForm} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
