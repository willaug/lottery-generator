import React from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';

import './Generator.css';

export default class Generator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { amountNumbers: '' };
  }

  changeAmountNumbers = () => {
    const { setAmountNumbers } = this.props;
    const { amountNumbers } = this.state;
    setAmountNumbers(amountNumbers);
  };

  render() {
    const { amountNumbers } = this.state;

    return (
      <div className="generator">
        <input
          type="number"
          value={amountNumbers}
          className="generator_input"
          placeholder="Amount of random numbers"
          onChange={(e) => this.setState({ amountNumbers: e.target.value })}
          onKeyDown={(e) => e.key === 'Enter' && amountNumbers > 0 && this.changeAmountNumbers()}
        />
        <Ripples>
          <button
            type="button"
            className="generator_button"
            onClick={this.changeAmountNumbers}
            disabled={amountNumbers <= 0}
          >
            Go it
          </button>
        </Ripples>
      </div>
    );
  }
}

Generator.propTypes = {
  setAmountNumbers: PropTypes.func.isRequired,
};
