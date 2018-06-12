/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import PropTypes from 'prop-types';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  decrement() {
    const newCount = this.state.count - 1;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.decrement}>
            -
        </button>
        <span>
          {this.state.count}
        </span>
        <button className="button" onClick={this.increment}>
            +
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;

