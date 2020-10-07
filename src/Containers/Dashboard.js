import React, { Component } from 'react';

// import components
import Header from '../Components/Header';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mt-5">
              <h3 className="text-center">Welcome user!</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;
