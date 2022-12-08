import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Cronometer extends Component {
  render() {
    const { teste, dispatch } = this.props;
    return (
      <div>content</div>
    );
  }
}

const mapStateToProps = (state) => ({
  teste: state.cronometer.currentTime,
});

Cronometer.propTypes = {
  teste: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(Cronometer);
