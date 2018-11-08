import React from "react";
import classNames from "classnames";

const Input = ({ name, label, error, ...rest }) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className={classNames(
        "block text-grey-darker text-sm font-bold mb-2",
        error ? "text-red" : ""
      )}
    >
      {label}
    </label>
    <input
      {...rest}
      name={name}
      id={name}
      className={classNames(
        "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
        error ? "border border-red" : ""
      )}
    />
    {error && <p className="text-red mt-2 text-xs italic">{error}</p>}
  </div>
);

export default Input;
