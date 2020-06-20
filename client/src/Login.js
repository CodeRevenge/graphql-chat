import React, { useState } from "react";
import { login } from "./auth";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChange = ({ name, value }) => {
    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await login(name, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">Chat Login</h1>
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={({ target }) => handleChange(target)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={({ target }) => handleChange(target)}
                />
              </div>
            </div>
            <div className="field">
              {error && <p className="help is-danger">Invalid Credentials</p>}
              <div className="control">
                <button
                  className="button is-link"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
