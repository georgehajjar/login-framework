import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toAccounts: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
    })
    //.then(success => {console.log("Login.js posting to /api/login")})
    //.then(success => this.setState(() => ({toAccounts: true}))) //only redirect to accounts if user is validated.
    .catch(error => console.log(error)
  );
}

  render() {
    if (this.state.toAccounts) {
      return <Redirect to='/accounts' />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Log In Form</h2>
            <form className="login" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="email"><b>Email</b></label>
                  <input type="text" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter Email" name="email" id="email" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password"><b>Password</b></label>
                  <input type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter Password" name="password" id="password" required/>
                </div>
                <button type="submit" className="btn">Log In</button>
              </div>
            </form>
            <br/>
            <p>Or sign up <a href="/signup">here</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
