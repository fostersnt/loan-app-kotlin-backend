import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Animation for the input fields
const floatUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  font-family: 'Arial', sans-serif;
`;

const FormContainer = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: ${floatUp} 1s ease-out;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s ease;
  &:focus {
    border-color: #2a5298;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #2a5298;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1e3c72;
  }
`;

const ForgotPassword = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #2a5298;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login with:", email, password);
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
        <ForgotPassword>Forgot your password?</ForgotPassword>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
