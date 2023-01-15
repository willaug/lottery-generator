import React from 'react';
import Generator from './components/Generator/Generator';
import Display from './components/Display/Display';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountNumbers: [],
    };
  }

  setAmountNumbers = (amount) => {
    const amountNumbers = Array(amount)
      .fill(0)
      .map(() => Math.floor(Math.random() * 60) + 1)
      .sort((current, toCompare) => current - toCompare);

    this.setState({ amountNumbers });
  };

  render() {
    const { amountNumbers } = this.state;

    return (
      <div className="card">
        <h1>LotteryGenerator</h1>
        <Display amountNumbers={amountNumbers} />
        <Generator setAmountNumbers={this.setAmountNumbers} />
      </div>
    );
  }
}

export default App;
