import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("hanle change");
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.email,
            password: this.state.password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log("response", response);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Login to Acces your Dashboard</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Youe email"
            value={this.state.email}
            onChange={this.handleChange}
            // autoComplete= false
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
