import React, { useState } from "react";

const Register = ({onRegister}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Register:', username,password);
        onRegister(username,password);
    };
    
  return (
    <div
      className="card mx-auto "
      style={{ maxWidth: "800px", padding: "100px",marginTop:"100px" }}
    >
      <h2 className="card-title text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Enter username"
            value={username}
            required
          /> <br></br>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            value={password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;