// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    const { counter, dispatch } = this.props;

    return (
      <div>
        <h1>Contador</h1>
        <div>
          <h1>{ counter }</h1>
          <div>
            <button
              type="button"
              onClick={ () => dispatch(actionIncrement()) }
            >
              Incrementar
            </button>
            <button
              type="button"
              onClick={ () => dispatch(actionDecrement()) }
            >
              Decrementar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter,
  };
};

Counter.propTypes = {
  counter: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Counter);
