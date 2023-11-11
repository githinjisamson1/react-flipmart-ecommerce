import React from "react";
import "./login.css";
import { useGlobalAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // for changing location
  const navigate = useNavigate();

  // TODO: implement AuthContext
  // Provide AuthContext
  const { user, setUser } = useGlobalAuthContext();

  //   handleChange
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // update user using dynamic object properties
    setUser({ ...user, [name]: value });
  };

  //   handleFormSubmission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    // console.log(user);
    navigate("/products");

    // empty login-form values upon submission
    setUser({ email: "", password: "" });
  };

  return (
    <div className="login">
      <section className="welcome-form">
        <div className="welcome">
          <h1>Welcome to FlipMart!</h1>
          <p>Login to get started</p>
        </div>
        <form
          onSubmit={(e) => {
            handleFormSubmission(e);
          }}
          className="login-form"
          action=""
        >
          <h1>Login</h1>
          <input
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Let's Start</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
