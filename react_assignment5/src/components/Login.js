import React, { useState } from 'react'

const Login = ({onLogin}) => {
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        onLogin(username,);
    };
  return (
    <div className="card mx-auto" style={{ maxWidth: '800px', padding: '100px', marginTop: "200px" }}>
      <h2 className="card-title text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          /><br></br>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  )
}

export default Login
