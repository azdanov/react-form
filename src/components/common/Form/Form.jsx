/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Joi from "joi-browser";
import classNames from "classnames";
import Input from "./Input";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    this.setState(({ errors, data }) => {
      const newErrors = { ...errors };

      const errorMessage = this.validateProperty(input);
      if (errorMessage) newErrors[input.name] = errorMessage;
      else delete newErrors[input.name];

      const newData = { ...data };
      newData[input.name] = input.value;

      return { data: newData, errors: newErrors };
    });
  };

  renderButton(label) {
    const isDisabled = this.validate();
    return (
      <button
        type="submit"
        disabled={isDisabled}
        className={classNames(
          "bg-blue text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-dark"
        )}
      >
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
