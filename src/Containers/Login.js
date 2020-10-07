import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Login.css';

// import components
import Input from '../Components/Input';
import Button from '../Components/Button';

class Login extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5 mx-auto">
              <div className="login-form">
                <h3 className="text-center mb-3 mt-3">LOGIN</h3>
                <div className="form-group">
                  <label htmlFor="emailId">Email ID</label>
                  <Input id="emailId" type="text" className="form-control" placeholder="Email ID" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input id="password" type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                  <Button
                    className="btn btn-primary btn-block"
                    type="button"
                    onClick={() => { this.props.history.push('/dashboard'); }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
