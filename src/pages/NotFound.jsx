import React from "react";
import { Link } from "@reach/router";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="mt-8 text-4xl">Page Not Found</h1>
      <p className="mt-8 text-3xl">404</p>
      <Link className="mt-8 text-xl no-underline" to="/">
        Go Home
      </Link>
    </main>
  );
}
