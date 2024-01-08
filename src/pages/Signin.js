import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
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
            Sign In
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default SignInPage;
