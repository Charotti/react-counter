import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  substract() {
    if (this.state.count > 0) {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter
          increment={() => this.increment()}
          substract={() => this.substract()}
          count={this.state.count}
        />
        <Counter
          increment={() => this.increment()}
          substract={() => this.substract()}
          count={this.state.count}
        />
      </div>
    );
  }
}

export default App;
