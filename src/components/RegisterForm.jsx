import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form/Form";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      preference: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    preference: Joi.string()
      .required()
      .label("Preference")
  };

  handleSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(this.state.data, null, 4));
  };

  render() {
    return (
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={this.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-4 pb-8 mt-6"
        >
          <h2 className="text-grey-darker text-4xl font-bold mb-6">Register</h2>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSelect("preference", "Preference", getBeverages())}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

function getBeverages() {
  return [
    { name: "Tea", value: "tea" },
    { name: "Coffee", value: "coffee" },
    { name: "Water", value: "water" }
  ];
}

export default RegisterForm;
