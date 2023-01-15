import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

export default class Display extends React.PureComponent {
  render() {
    const { amountNumbers } = this.props;
    const values = amountNumbers
      .map((number) => (<div key={number} className="display_value">{number}</div>));

    return (
      <div className="display">
        {values}
      </div>
    );
  }
}

Display.propTypes = {
  amountNumbers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
};
