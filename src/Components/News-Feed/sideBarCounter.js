import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  addClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  removeClick = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };

  render() {
    return (
      <div>
        <button className="upArrow" onClick={this.addClick}>
          {this.state.count}
        </button>
        <button className="downArrow" onClick={this.removeClick}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
