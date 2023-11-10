import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { LoginContext } from "./helpers/Context"

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
        <Home />
        <Login />
        <Profile />      
      </LoginContext.Provider>
    </div>
  );
}

export default App;
