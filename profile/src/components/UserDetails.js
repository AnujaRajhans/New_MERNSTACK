import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import userimages from "../user.png";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [user]);
  return (
    <div className="container col-md-8">
      <div class="card mb-3 mt-5" style={{maxWidth:"540px"}}>
        <div class="row g-0 ">
          <div class="col-md-4">
            <img src={userimages} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6 ">
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">
                {user.email}
              </p>
              <p class="card-text">
                {user.phone}
              </p>
              <button class="btn btn-secondary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
