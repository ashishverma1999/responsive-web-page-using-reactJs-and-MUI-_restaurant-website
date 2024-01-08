import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Layout from "../components/Layout/Layout";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
                                        
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUpPage;
