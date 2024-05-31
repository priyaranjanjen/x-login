import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <>
    {
      isAuthenticated === true ? (
        <h3>Welcome, user!</h3>
      ) : (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
              <label>Username:</label>
              <input 
                required 
                type='text' 
                placeholder='username' 
                value={formData.username} 
                onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
              />
              <br />
              <label>Password:</label>
              <input 
                required 
                type='password' 
                placeholder='password' 
                value={formData.password} 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
              />
              <br />
              <button type="submit">Submit</button>
            </form>
        </>
      )
    }
    </>
  );
}

export default App;
