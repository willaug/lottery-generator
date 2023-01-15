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
    console.log(amount);
    this.setState({
      amountNumbers: [10, 15, 23, 30],
    });
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
