import React from "react";

class Counter extends React.Component{
    state = {
        count: 0
    };
    addClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }));
    }
    render() {
        return <button onClick={this.addClick}>{this.state.count}</button>;
    }
}

export default Counter;