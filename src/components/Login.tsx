import React from "react";
import axios from "axios";
import { Button } from "antd";

const Login: React.FC = () => {
  const login = () => {
    const data = {
      "user": {
        "email": "test@test.com",
        "password": "password"
      }
    };
    axios.post('http://localhost:3000/login', data).then(response => {
      console.log(response.data);
    })
  };
  return (
    <Button onClick={login}>Login</Button>
  );
};

export default Login;