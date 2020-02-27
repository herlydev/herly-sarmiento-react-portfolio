import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      errorText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("hanle change");
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
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
        if (response.data.sttus === "created") {
          console.log("You can come in");
        } else {
          this.setState({
            errorText: "Wrong email or password"
          });
        }
      })
      .catch(error => {
        this.setState({
          errorText: "An error occurred"
        });
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Login to Acces your Dashboard</h1>
        <div>{this.state.errorText}</div>

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
