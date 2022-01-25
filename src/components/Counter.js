import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        {/* <button onClick={()=>{
            this.setState({count: this.state.count -1});
          }}>-</button> */}
        <button onClick={() => this.props.substract()}>-</button>

        <button onClick={() => this.props.increment()}>+</button>
      </div>
    );
  }
}

export default Counter;
