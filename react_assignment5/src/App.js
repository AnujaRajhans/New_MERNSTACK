import React, { useEffect, useState } from 'react'
import Register from './components/Register'
import Login from './components/Login';
import Card from './components/Card';
import Themeswitcher from './components/Themeswitcher';
import './App.css'
const App = () => {

  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleRegister = (username) => {
    const newUser = { username };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setIsRegistered(true);
  };

  const handleLogin = (username) => {
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      setIsLoggedIn(true);
    }
    else {
      alert('User not found');
      setIsRegistered(false);
    }

  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light'? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(()=>{
    document.body.className = theme;
  })

  return (
    <div>
      <Themeswitcher theme={theme} toggleTheme={toggleTheme}/>
      {!isRegistered && <Register onRegister={handleRegister} />}
      {isRegistered && !isLoggedIn && <Login onLogin={handleLogin} />}
      {isRegistered && isLoggedIn && <Card onLogout={handleLogout}/>}
    </div>
  )
}

export default App
