import React from "react";
import { Link } from "@reach/router";
import Logo from "./Logo";
import Container from "./Container";

export default function NavBar() {
  return (
    <div className="bg-blue-light p-3">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex text-white">
            <Logo className="text-2xl" />
            <Link
              className="text-white no-underline font-semibold text-2xl tracking-tight"
              to="/"
            >
              Forms
            </Link>
          </div>
          <div className="flex flex-no-wrap text-xl">
            <Link
              className="block no-underline lg:inline-block lg:mt-0 text-blue-lightest hover:text-white mr-4"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="block no-underline lg:inline-block lg:mt-0 text-blue-lightest hover:text-white mr-4"
              to="/register"
            >
              Register
            </Link>
            {/* <Link
              className="block no-underline lg:inline-block lg:mt-0 text-blue-lightest hover:text-white mr-4"
              to="/logout"
            >
              Logout
            </Link> */}
          </div>
        </nav>
      </Container>
    </div>
  );
}
