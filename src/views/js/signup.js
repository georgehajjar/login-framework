import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toLogin: false
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

    fetch('/api/signup', {
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
    .then(success => {console.log("Successful post to /signup")})
    .then(this.setState(() => ({toLogin: true})))
    .catch(error => console.log(error)
  );
}

  render() {
    if (this.state.toLogin) {
      return <Redirect to='/login' />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Sign Up Form</h2>
            <form className="signup" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="email"><b>Email</b></label>
                  <input type="text" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter Email" name="email" id="email" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password"><b>Password</b></label>
                  <input type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter Password" name="password" id="password" required/>
                </div>
                <button type="submit" className="registerbtn">Register</button>
              </div>
            </form>
            <br/>
            <p>Or log in <a href="/login">here</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
