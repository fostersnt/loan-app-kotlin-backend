import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { LoginApi } from "../../api/Login";
import { useForm } from "@inertiajs/react";

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
  background-color: #34495e; /* Set background to #34495e */
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
    border-color: #34495e; /* Highlight border color to match button color */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #34495e; /* Set button color to #34495e */
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2c3e50; /* Slightly darker shade on hover */
  }
`;

const ForgotPassword = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #34495e; /* Match hover color to button */
  }
`;

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
});

    const handleLogin = async (e) => {
        e.preventDefault();
        // const data = await LoginApi();
        post('/post', {
            onSuccess: (page) => {
                console.log("Login successful!", page);
            },
            onError: (errors) => {
                console.log("Validation errors:", errors);
            },
            onFinish: () => {
                console.log("Request completed");
            }
        })
    };

    return (
        <Container>
            <FormContainer>
                <Title>Login</Title>
                <form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <Button type="submit">Login</Button>
                </form>
                <ForgotPassword>Forgot your password?</ForgotPassword>
            </FormContainer>
        </Container>
    );
};

export default LoginPage;
