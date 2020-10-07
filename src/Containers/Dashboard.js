import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchItems from '../Store/Actions';
import '../Styles/Dashboard.css';

// import components
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Alert from '../Components/Alert';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    let content = null;
    if (this.props.loading) {
      content = <Loader defaultText="Loading..." />;
    } else if (this.props.error) {
      content = <Alert message={this.props.error} />;
    } else {
      content = (
        <div className="row">
          <div className="col-md-12">
            <h3>Clients</h3>
          </div>
          {
            this.props.items.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.phone}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
                    <p>
                      <span className="badge badge-success">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      );
    }

    return (
      <div className="dashboard-container">
        <Header />
        <div className="container mt-3">
          {content}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  items: PropTypes.array,
  fetchItems: PropTypes.func
};

Dashboard.defaultProps = {
  loading: true,
  error: null,
  items: [],
  fetchItems: () => {}
};

const mapStateToProps = ({ dashboard }) => ({
  loading: dashboard.loading,
  error: dashboard.error,
  items: dashboard.items
});

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
