import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form/Form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Username"),
    password: Joi.string()
      .min(6)
      .max(255)
      .required()
      .label("Password")
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
          <h2 className="text-grey-darker text-4xl font-bold mb-6">Login</h2>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
