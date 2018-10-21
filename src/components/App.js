import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add new fishes
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes });
  };

  loadSamplesFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order }
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamplesFishes={this.loadSamplesFishes} />
      </div>
    )
  }
}

export default App;
