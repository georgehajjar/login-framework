import React, { Component } from 'react';

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    fetch('/api/user_data')
      .then(res => res.json())
      .then(res => {console.log(res.email)})
      .then(res => this.setState({ email: res.email })
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {this.state.email ? <h1>{`Hello ${this.state.email}`}</h1> : <h1>Loading.. please wait!</h1>}
          </div>
        </div>
      </div>
    );
  }
}

export default Accounts;
