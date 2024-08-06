import React, { useState } from "react";
function Form() {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  console.log(email,password);
  const payload = {email,password};
  console.log(payload);
  const handleSubmit = (e) => {
  };
  return (
    <div classname="container-bg-light">
      <h2> Form </h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) =>setPassword(e.target.value)}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={handleSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
      <h3>Payload:</h3>
      <pre>Payload: {JSON.stringify(payload)}</pre>
    </div>
    </div>
  );
}

export default Form;
