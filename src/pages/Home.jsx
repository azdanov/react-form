import React from "react";
import { Link } from "@reach/router";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mt-6">
      <h1 className="text-4xl mb-3">React Forms</h1>
      <p className="text-xl mb-1">Welcome to Forms!</p>
      <p className="text-xl mb-3">
        Please{" "}
        <Link
          className="no-underline hover:text-blue-dark text-blue"
          to="/login"
        >
          Login
        </Link>{" "}
        or{" "}
        <Link
          className="no-underline hover:text-blue-dark text-blue"
          to="/register"
        >
          Register
        </Link>{" "}
        to continue.
      </p>
    </main>
  );
}
