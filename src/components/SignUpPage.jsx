import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../service";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passverify, setPassVerify] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!username || !email || !password || !passverify) {
      setError("All fields are required.");
      return;
    }

    if (password !== passverify) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("password should be more than 8 charecters");
      return;
    }
    setError(null);
    try {
      await service.signup(username, email, password);
      navigate("/login");
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="card text-center"
      style={{
        width: 35 + "rem",
        margin: "auto",
        marginTop: 7 + "rem",
        padding: 2 + "rem",
      }}
    >
      <form method="POST" onSubmit={handleSubmit}>
        <div className="card-header">
          <h1>Sign Up</h1>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2" className="form-label">
              Repeat password
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-control"
              placeholder="Repeat your password"
              value={passverify}
              onChange={(e) => setPassVerify(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: 20 + "px", marginBottom: 15 + "px" }}
          >
            Sign Up
          </button>
          {error && <div className="alert alert-danger">{error}</div>}
          <Link to={`/login`}>Login</Link>
        </div>
      </form>
    </div>
  );
}
