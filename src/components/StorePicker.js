import React from "react";
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // stop form submitting
    event.preventDefault();
    // get the text from the box
    const storeName = this.myInput.current.value;
    // change the page from / to /store/:storeId
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;