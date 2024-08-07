import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import './App.css';
const App = () => {
  return (
    <div className="container d-flex col-md-12">
      <UserList />
      <Routes>
        <Route path= '/userDetails/:id' element={<UserDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;
