import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Users.css'
const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);
  return (
    <div
      className="container col-md-3 userList">
      <ol className="list-group">
        {user.map((user) => (
          <Link className ="link" to={`/userDetails/${user.id}`}>
            <li className="list-group-item">{user.name}</li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
