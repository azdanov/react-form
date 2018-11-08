import React from "react";
import { Router } from "@reach/router";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import Footer from "../components/Footer";
import Container from "../components/Container";

export default function App() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen">
      <NavBar />
      <Container className="flex-grow">
        <Router>
          <Home path="/" />
          <Login path="/login" />
          {/* <Logout path="/logout" /> */}
          <Register path="/register" />
          <NotFound default />
        </Router>
      </Container>
      <Footer />
    </div>
  );
}
