import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    const res = axios.post("http://localhost:5271/register", {
      username: username,
      password: password,
    });
  }
  return (
    <>
      <form onSubmit={submit}>
        <label>Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <br></br>

        <button>sign up</button>
      </form>
    </>
  );
}

export default App;
