import { useState } from "react";

export default function LogIn({ setLoggedIn }) {
  const [data, setData] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const notComplete = Object.entries(data).some(
    ([, value]) => value.trim() === ""
  );

  return (
    <form>
      <h2>Log In</h2>
      <div className="field">
        <label> Username:</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInput}
        />
      </div>
      <div className="field">
        <label> Password:</label>
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleInput}
        />
      </div>

      <button
        className={`button ${notComplete ? "disabled" : ""}`}
        disabled={notComplete}
        onClick={() => setLoggedIn(true)}
      >
        Log In
      </button>
    </form>
  );
}
