import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        {/* <button onClick={()=>{
            this.setState({count: this.state.count -1});
          }}>-</button> */}
        <div className="btn-wrapper">
          <button className="btn-red" onClick={() => this.props.substract()}>
            -
          </button>

          <button className=" btn-green" onClick={() => this.props.increment()}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
