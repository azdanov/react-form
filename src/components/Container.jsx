import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Container({ className, children }) {
  return (
    <div className={classNames("container mx-auto font-sans", className)}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  className: ""
};
