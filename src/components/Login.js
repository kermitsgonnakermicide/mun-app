// src/components/Login.js
import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 40px;
  width: 300px;
  margin: 100px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #80cbc4; /* pastel green */
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
  text-align: center;
`;

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "daksh" && password === "0609") {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        {error && <Error>{error}</Error>}
      </form>
    </LoginContainer>
  );
};

export default Login;
