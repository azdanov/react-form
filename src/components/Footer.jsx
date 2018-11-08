import React from "react";
import classNames from "classnames";
import { PropTypes } from "prop-types";

export default function Footer({ className }) {
  return (
    <div className={classNames("bg-grey-lighter p-3", className)}>
      <small className="block text-center text-grey-darker text-base">
        &copy; {getCurrentYear()}
      </small>
    </div>
  );
}

function getCurrentYear() {
  return new Date().getFullYear();
}

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ""
};
