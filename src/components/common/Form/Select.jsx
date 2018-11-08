import React from "react";
import classNames from "classnames";

const Select = ({ name, label, options, error, ...rest }) => (
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
    <div className="relative">
      <select
        className={classNames(
          "shadow appearance-none border rounded w-full py-2 px-3 bg-white text-grey-darker leading-tight focus:outline-none focus:shadow-outline",
          error ? "border border-red" : ""
        )}
        name={name}
        id={name}
        {...rest}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
    {error && <p className="text-red mt-2 text-xs italic">{error}</p>}
  </div>
);

export default Select;
