import React from "react";

function Register(e) {
  const [name,setname] = useState();
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form>
      <div class="form-group">
          <label for="username">Username</label>
          <input
            type="username"
            class="form-control"
            id="exampleInputUsername"
            aria-describedby="username"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail (e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onChange={(handleSubmit)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
