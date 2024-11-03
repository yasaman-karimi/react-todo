import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import service from "../service";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("username and password are required");
      return;
    }
    if (password.length < 8) {
      setError("password should be more than 8 charecters");
      return;
    }

    try {
      const apiKey = await service.login(username, password);
      if (apiKey) {
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="card text-center"
      style={{
        width: 25 + "rem",
        margin: "auto",
        marginTop: 10 + "rem",
        padding: 2 + "rem",
      }}
    >
      <div className="card-header">
        <h3>Login</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              marginBottom: 1 + "rem",
            }}
          >
            Login
          </button>
          {error && <div className="alert alert-danger">{error}</div>}
        </form>
        <Link to={`/signup`}>SignUp</Link>
      </div>
    </div>
  );
}
